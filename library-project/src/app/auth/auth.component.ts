import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { User } from './user.model';
import { Role } from './role.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;

  constructor(private authService: AuthService,
    private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    if (this.isLoginMode) {
      this.authService.login(value.username, value.password).subscribe(response => {
        console.log(response);
        localStorage.setItem('token', 'Bearer ' + response.token);
        // ja sam dodala
        this.userService.getUserByToken().subscribe(user => {
          console.log(user);
          this.userService.emitUser(user);
        }, error => {
          console.log(error);
        });
        this.router.navigate(['books']);
      }, error => {
        console.log(error);
      });
      form.reset();
    } else {
      const newUser = new User(value.name, value.lastName, value.username, form.controls['gender'].value, value.phone, value.email, value.country, value.city, value.street, value.password, new Role(2, 'regular'))
      this.userService.registerUser(newUser).subscribe(response => {
        form.reset();
        this.isLoginMode = true;
        this.toastr.success("Successfully registered!", "Success");
        this.ngOnInit();
      }, error=> {
        console.log(error);
      })
    }
  }
}
