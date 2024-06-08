import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmarked-players',
  templateUrl: './bookmarked-players.component.html',
  styleUrls: ['./bookmarked-players.component.css']
})
export class BookmarkedPlayersComponent {
  userName: string | undefined;
  bookmarkedPlayers: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getBookmarkedPlayers();
  }

  getBookmarkedPlayers() {
    const userId = localStorage.getItem('user_id');
    this.http.get(`https://webapi-backend-64d1.onrender.com/users/api/users/${userId}/bookmarked-players`).subscribe((response: any) => {
      this.bookmarkedPlayers = response;
      this.bookmarkedPlayers.forEach((player, index) => {
        console.log(player);
      });
    });
  }
}
