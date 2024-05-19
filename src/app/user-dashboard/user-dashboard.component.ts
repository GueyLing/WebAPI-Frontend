import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
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
}
