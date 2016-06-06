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
    // messages = [
    //     {
    //     content: 'test content',
    //     userName: 'AK'
    //     },
    //     {
    //         content:'test2 content',
    //         userName: 'Max'
    //     }
    
    // ]
    message = {content: 'test content', userName: 'Max'}
    
    // changeContent (event) {
    //     this.message.content = "app chaned content"
    // }
}
