import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo : any;
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  @Input() i:number;

  constructor() { this.todo; this.i = 0}

  ngOnInit(): void {
  }

  onClick(todo : Todo){
    this.todoDelete.emit(todo);
    console.warn("todo delete is triggerd")
  }

  onCheckboxClick(todo : Todo)
  {
    console.log(todo)
    this.todoCheckbox.emit(todo);
  }
}
