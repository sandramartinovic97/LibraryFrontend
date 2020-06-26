import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;

  constructor(private authService: AuthService,
              private userService: UserService) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    this.authService.login(value.username, value.password).subscribe(response => {
      console.log(response);
      localStorage.setItem('token', 'Bearer' + response.token);
      // ja sam dodala
      this.userService.getUserByToken().subscribe(user => {
        console.log(user);
        this.userService.emitUser(user);
      });
    });
    form.reset();
  }
}
