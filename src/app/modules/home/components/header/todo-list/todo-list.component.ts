import { Component } from '@angular/core';

//Interface
import { TaskList } from 'src/modules/home/model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  public taskList: Array<TaskList> = [
    { task: "Minha nova task", checked: true},
    { task: "Minha nova task 2", checked: false}
  ];
}
