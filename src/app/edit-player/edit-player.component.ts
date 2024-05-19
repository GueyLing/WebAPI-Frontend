import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent {
  player = { name: '', player_id: '', image_url: '' }; // replace with your actual player properties
  id: string | undefined;
  errorMessage: string | null = null;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router2: Router, private playerService: PlayerService) { }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPlayer(params['id']);
      this.id = params['id'];
    });

    this.route.queryParams.subscribe(params => {
      this.errorMessage = params['error'] || null;
    });
  }

  editPlayer() {
    if (this.player.name && this.player.player_id && this.player.image_url) {
      const token = localStorage.getItem('token');
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token
        })
      };
    this.http.put(`http://localhost:3000/api/players/${this.id}`, this.player, httpOptions)
      .subscribe((res: any) => {
        console.log(res.message);
        this.router2.navigate(['/crud_players']);
      });}else{
        this.router2.navigate(['/edit-player', this.id], { queryParams: { error: 'Please enter all the fields' } });
      }
  }

  getPlayer(id: string) {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    this.http.get(`http://localhost:3000/api/players/${id}`, httpOptions)
      .subscribe((res: any) => {
        this.player = res.player;
      });
  }

  onNameChange() {
    if (this.player.name.length > 0) {
      this.playerService.getPlayers().subscribe(data => {
        const player = data.data.find((p: any) => p.first_name.toLowerCase() + ' ' + p.last_name.toLowerCase() === this.player.name.toLowerCase());
        this.player.player_id = player ? player.id : '';
      }, error => {
        console.error('Error fetching players:', error);
        this.player.player_id = 'Error fetching data';
      });
    } else {
      this.player.player_id = '';
    }
  }
}




