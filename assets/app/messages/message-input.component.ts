import {Component} from '@angular/core';

import {Message} from './message';
import {MessageService} from './message.service';


@Component ({
    selector: 'my-message-input',
    template: `
   <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
        <div class="form-group">
            <input ngControl="content" type="text" class="form-control" #inputVar >
        </div>
        <button class="btn btn-primary">send message</button>   
   </form>
    `,
    // providers: [MessageService]
}) 

export class MessageInputComponent{   
    
    constructor (private _messageService: MessageService) {
        
    }

    onSubmit(form:any) {
        const message: Message = new Message(form.content, null, 'Amax');
        this._messageService.addMessage(message);
        
    }

}