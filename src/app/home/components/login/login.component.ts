import { AuthService } from './../../../core/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
  });
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    this.authService.login(this.loginForm.value).subscribe((data) => {
      console.log(data);
      if (data.apiStatus == true) {
        this.authService.token = data.token
        // let token = localStorage.getItem('token')
        // if (!token) localStorage.setItem('token', JSON.stringify(data.token))

      }
    }, () => { }, () => {
      this.authService.contacts().subscribe(data => {
        console.log(data);
      })
      // setTimeout(() => {
      //   this.router.navigate(['/home'])
      // }, 2000);
    })
  }
}
