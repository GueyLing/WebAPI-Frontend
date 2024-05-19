import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-crud-players',
  templateUrl: './crud-players.component.html',
  styleUrls: ['./crud-players.component.css']
})
export class CrudPlayersComponent {
  players: any[] = [];
  
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    this.http.get('https://webapi-backend-64d1.onrender.com/api/players', httpOptions)
      .subscribe((res: any) => {
        this.players = res.players;
      });
  }

  deletePlayer(id: string) {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    this.http.delete(`https://webapi-backend-64d1.onrender.com/api/players/${id}`, httpOptions)
      .subscribe((res: any) => {
        console.log(res.message);
        // Here you might want to remove the player from your local players array as well
        this.players = this.players.filter(player => player._id !== id);
      });
  }
}




