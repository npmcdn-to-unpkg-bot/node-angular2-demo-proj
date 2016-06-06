import { Component } from '@angular/core';
import {MessageListComponent} from './messages/message-list.component';



@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <message-list></message-list>
        `,
    styleUrls: ['app.styles.css'],
    directives: [MessageListComponent]
   
})
export class AppComponent {

}
