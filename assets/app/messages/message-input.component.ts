import {Component} from '@angular/core';

import {Message} from './message';
import {MessageService} from './message.service';


@Component ({
    selector: 'my-message-input',
    template: `
   <form>
        <div class="form-group">
            <input type="text" class="form-control" #inputVar>
        </div>
        <button class="btn btn-primary" (click)="onCreate(inputVar.value)">send message</button>   
   </form>
    `,
    providers: [MessageService]
}) 

export class MessageInputComponent{
   
    
    constructor (private _messageService: MessageService) {
        
    }
    
    onCreate(content : string) {
        const message: Message = new Message(content, null, 'Amax');
        this._messageService.messages.push(message);
        this._messageService.getMessages();
        
    }
}