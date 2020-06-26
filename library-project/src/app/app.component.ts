import { Component, OnInit } from '@angular/core';
import { UserService } from './auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) { }

  ngOnInit() {

      this.userService.getUserByToken().subscribe(user => {
        console.log(user);
        this.userService.emitUser(user);
    });
  }

}
