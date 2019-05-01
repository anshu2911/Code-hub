import {Component, OnInit} from '@angular/core';
import { UserService } from './shared/user.service';
import { map } from 'rxjs/operators';
import { IUsers, IUser } from './shared/user.model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'users-list',
    template: `
    <div>
    <h5>Total Results : {{users.total_count}}</h5>
    <hr>
    <div class="row">
            <div *ngFor="let user of users.items" class="col-5">
                <user-thumbnail [user]="user"></user-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class UsersListComponent implements OnInit {
    users: IUsers;
    constructor(private userService: UserService) { }

    ngOnInit() {
        const searchParam = 'henry';
        this.userService.getUsers(searchParam).subscribe((res: IUsers) => {
            this.users = res;
        });
    }
}

