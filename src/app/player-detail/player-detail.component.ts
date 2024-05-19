import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent {
  player = { name: '', player_id: null, image_url: '', height: '', weight: '', college: '', position: '', jersey_number: '', country: '', team: '' ,  news: [{ title: '', url: '', urlToImage: '', description: '' }] };// replace with your actual player properties
  id: string | undefined;
  isLoading = true;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPlayer(params['id']);
      this.id = params['id'];
    });
  }
  
  getPlayer(id: string) {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };

    this.http.get(`https://webapi-backend-64d1.onrender.com/api/players/${id}`, httpOptions)
      .subscribe((res: any) => {
        this.player = res.player;
        if (this.player.player_id) {
          this.getNBAPlayerInfo(this.player.player_id);
          this.getNBANews(this.player.player_id);
        }
      });
  }

  getNBAPlayerInfo(id: string) {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    this.http.get(`https://webapi-backend-64d1.onrender.com/external-api/${id}`, httpOptions)
      .subscribe((res: any) => {
        console.log(res);
        this.player = {
          ...this.player,  // keep existing properties
          height: res.data.height,
          weight: res.data.weight,
          college: res.data.college,
          position: res.data.position,
          jersey_number: res.data.jersey_number,
          country: res.data.country,
          team: res.data.team.full_name,
        };
        // Here you can use the response data as needed
      });
  }

  getNBANews(id: string) {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    };
    this.http.get(`https://webapi-backend-64d1.onrender.com/external-api/news/${id}`, httpOptions)
      .subscribe((res: any) => {
        this.player.news = res.articles.map((article: any) => ({
          title: article.title,
          url: article.url,
          urlToImage: article.urlToImage,
          description: article.description
        }));
        this.isLoading = false;
      });
  }
}
