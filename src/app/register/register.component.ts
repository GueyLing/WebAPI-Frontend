import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { name: '', password: '', role: 'user' }; // replace with your actual user properties
  errorMessage: string | null = null;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.errorMessage = params['error'] || null;
    });
  }

  createUser() {
    if (this.user.name && this.user.password) {
      this.http.post('https://webapi-backend-64d1.onrender.com/users', this.user)
        .subscribe((res: any) => {
          console.log(res.message);
          this.router.navigate(['/'], { queryParams: { registered: 'User registration success' } });
        });
    } else {
      this.router.navigate(['/register'], { queryParams: { error: 'Please enter all the fields' } });
    }
  }
}


