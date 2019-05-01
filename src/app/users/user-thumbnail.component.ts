import {Component, Input} from '@angular/core';
import { IUsers } from './shared/user.model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'user-thumbnail',
    template: `
    <div class="well howerwell thumbnail">
        <h2>{{user.login}}</h2>
        <div>Profile Url: {{user.url}}</div>
        <div>
            <span>Location: {{user.type}}</span>
            <span>&nbsp;</span>
            <span>{{user.avatar_url}}, {{user.score}}</span>
        </div>
    </div>`
})
export class UserThumbnailComponent {
    @Input() user: IUsers;
}
