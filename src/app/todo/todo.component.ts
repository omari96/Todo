import { Component, OnInit } from '@angular/core';
import { todo } from './model/todo.model';
import { level } from './model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})


export class TodoComponent implements OnInit {
  todos: todo[] = [
    // {
    //   id: 1,
    //   title: 'omari',
    //   taskLevel: "Medium"
    // },
    // {
    //   id: 2,
    //   title: 'diasjdijas',
    //   taskLevel: "Hard"

    // },
    // {
    //   id: 3,
    //   title: 'ndunsu',
    //   taskLevel: "Easy"
    // },
    // {
    //   id: 4,
    //   title: 'diasjdidsjdi',
    //   taskLevel: "Easy"
    // }
  ];

  isVisible: boolean = false;
  todoTitle: string = '';
  idTodo: number = this.todos.length + 1;

  inProgress: todo[] = [];
  dones: todo[] = [];
  options = [
    { name: "Easy", value: 1 },
    { name: "Medium", value: 2 },
    { name: "Hard", value: 2 }
  ]
  selectedOption: level = "Easy";

  constructor() { }

  ngOnInit(): void {

  }

  ShowAddTask(){
    this.isVisible = !this.isVisible
  }

  removeTodo(index: number) {
    this.todos = this.todos.filter((_, i) => index !== i);
  }

  addTodo() {
    this.todos.push({
      id: this.idTodo,
      title: this.todoTitle,
      taskLevel: this.selectedOption
    })
    this.todoTitle = "";
    this.idTodo++;
  }

  sendProgress(i: number) {
    let itemTodo = this.todos.splice(i, 1);
    this.inProgress.push(...itemTodo)
  };

  sendTodo(i: number) {
    let itemTodo = this.inProgress.splice(i, 1);
    this.todos.push(...itemTodo)
  };

  sendDone(i: number) {
    let itemTodo = this.inProgress.splice(i, 1);
    this.dones.push(...itemTodo)
  };

  backProgress(i: number) {
    let itemTodo = this.dones.splice(i, 1);
    this.inProgress.push(...itemTodo)
  };

}

