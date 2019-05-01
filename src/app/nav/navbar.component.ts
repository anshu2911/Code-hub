import {Component} from '@angular/core';
import { IUsers } from '../users/shared/user.model';
import { UserService } from '../users/shared/user.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nav-bar',
    templateUrl: './navbar.component.html'
})
export class NavBarComponent {
    searchTerm = '';
    foundUsers: IUsers;
    constructor(private userService: UserService) { }

    searchUsers(searchTerm) {
        this.userService.getUsers(searchTerm).subscribe(user => {
            console.log(user);
            this.foundUsers = user;
        });
    }
}
