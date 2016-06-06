import {Component, OnInit} from '@angular/core';

import {MessageComponent} from './message.component';
import {MessageService} from './message.service';
import  {MessageInputComponent} from './message-input.component';



@Component ({
    selector: 'message-list',
    template: `
       <div>
            <my-message-input></my-message-input>
            <my-message *ngFor="let message of messages" [message]="message" (messageChange)="message.content = $event"></my-message>'
       </div>
    `,
    directives: [MessageComponent, MessageInputComponent],
    providers: [MessageService] 
})

export class MessageListComponent implements OnInit{
    messages = [];
    
    constructor(private _messageService: MessageService) {       
        
    }
    
    ngOnInit() {
        this.messages =  this._messageService.messages;
    }
    
    
    
    
    // message = {content: 'test content', userName: 'Max'}
    
    // changeContent (event) {
    //     this.message.content = "app chaned content"
    // }
}