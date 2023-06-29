import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/header/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from './components/header/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './components/header/todo-list/todo-list.component';

//Page
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
