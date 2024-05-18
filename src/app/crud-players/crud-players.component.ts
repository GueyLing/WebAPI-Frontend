import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crud-players',
  templateUrl: './crud-players.component.html',
  styleUrls: ['./crud-players.component.css']
})
export class CrudPlayersComponent {
  players: any[] = [];
  
  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.http.get('http://localhost:3000/api/players')
      .subscribe((res: any) => {
        this.players = res.players;
      });
  }

  deletePlayer(id: string) {
    this.http.delete(`http://localhost:3000/api/players/${id}`)
      .subscribe((res: any) => {
        console.log(res.message);
        // Here you might want to remove the player from your local players array as well
        this.players = this.players.filter(player => player._id !== id);
      });
  }
}




