import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../auth/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'

})
export class HeaderComponent {
    isUserLoggedIn: Boolean;
    constructor(private router: Router, private userService: UserService) { }
    ngOnInit() {
        this.userService.getLoggedInUser().subscribe(user=> {
            if(user==null) {
                this.isUserLoggedIn = false;
            } else {
                this.isUserLoggedIn = true;
            }
        })
    }
    onLogout() {
       this.userService.logout();
    }
}