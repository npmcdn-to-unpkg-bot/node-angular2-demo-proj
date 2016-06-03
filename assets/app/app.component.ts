import { Component } from '@angular/core';
import {MessageComponent} from './messages/message.component';



@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.template.html',
    styleUrls: ['app.styles.css'],
    directives: [MessageComponent]
   
})
export class AppComponent {
    message = {
        content: 'test content',
        author: 'AK'
    }
    
}
