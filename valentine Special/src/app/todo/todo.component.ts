import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

export class TodoComponent {
  addtasks:string="";

 public tasks: { name: string, status: boolean }[] = [];

  public displaytasks:{
    name:string,status:boolean
  }[]=[];


  addTask() {
    let newTask = {
      name: this.addtasks,
      status: false // Default status is set to false
    };
    if (newTask.name !== "") {
      this.tasks.push(newTask);
    }


  }

  all(){
    this.displaytasks.splice(0, this.displaytasks.length);
   this.displaytasks= this.tasks.concat();
  }
  remaining(){
    this.displaytasks.splice(0, this.displaytasks.length);
     this.displaytasks = this.tasks.filter(task => !task.status);

  }
  completed(){
    this.displaytasks.splice(0, this.displaytasks.length);
     this.displaytasks = this.tasks.filter(task => task.status);
  }
  statuss(index:number){
    this.tasks[index].status = true;

  }







}
