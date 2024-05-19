import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string | null = null;
  registered: string | null = null;
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });

    this.route.queryParams.subscribe(params => {
      this.errorMessage = params['error'] || null;
      this.registered = params['registered'] || null;
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.http.post('https://webapi-backend-64d1.onrender.com/users/login', this.loginForm.value)
      .subscribe((res: any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        if (res.message === 'login_success_admin') {
          localStorage.setItem('role', 'admin');
          this.router.navigate(['/crud_players']);
        } else if (res.message === 'login_success_user'){
          localStorage.setItem('role', 'user');
          this.router.navigate(['/user_dashboard']);
        } else{
          this.router.navigate(['/'], { queryParams: { error: 'Invalid Credentials' } });
        }
      });
    }
  }
}