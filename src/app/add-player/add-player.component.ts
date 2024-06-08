import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent {
  player = { name: '', player_id: '', image_url: ''};
  errorMessage: string | null = null;
  players: any[] = [];

  constructor(private http: HttpClient, private router: Router, private playerService: PlayerService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.errorMessage = params['error'] || null;
    });

    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    this.http.get('https://webapi-backend-64d1.onrender.com/external-api', httpOptions).subscribe((response: any) => {
      this.players = response.data;
      console.log('Players:', this.players);
    });
  }

  createPlayer() {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    if (this.player.name && this.player.player_id && this.player.image_url) {
    this.http.post('https://webapi-backend-64d1.onrender.com/api/players', this.player, httpOptions)
      .subscribe((res: any) => {
        console.log(res.message);
        this.router.navigate(['/crud_players']);
      });}else{
        this.router.navigate(['/add-player'], { queryParams: { error: 'Please enter all the fields' } });
      }
  }

  onNameChange() {
    if (this.player.name.length > 0) {
      this.playerService.getPlayers().subscribe(data => {
        console.log('Data:', data);
        const player = data.data.find((p: any) => p.first_name.toLowerCase() + ' ' + p.last_name.toLowerCase() === this.player.name.toLowerCase());
        console.log('Player:', player, this.player.name.toLowerCase());
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
