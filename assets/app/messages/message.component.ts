import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Message} from './message';
import {MessageService} from './message.service';

@Component({
    selector: 'my-message',
    template: `
<div class="row">
    <section class="col-md-8 col-md-offset-2">
        <article class="panel panel-default">
            <div class="panel-body">
                {{ message.content }}
            </div>
            <footer class="panel-footer">
                <div class="author">
                    {{ message.userName }}
                </div>
                <div class="config pull-right" >
                    <a href="#" (click)="onEdit()">Edit</a>
                    <a href="#" (click)="onDelete()">Delete</a>
                </div>
            </footer>
        </article>
    </section>
</div>
    `,
 
  styles: [`
  .author {
    display: inline-block;
    font-style: italic;
}`]


})

export class MessageComponent {
    @Input() message: Message;
    @Output() messageChange = new EventEmitter<string>();

    constructor(private _messageService: MessageService) { 

    }
  
    onEdit() {
        this._messageService.editMessage(this.message)     
    //    this.messageChange.emit(this._messageService);
    }

    onDelete() {
        this._messageService.deleteMessage(this.message);
    }
    
}