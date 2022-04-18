import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book/book.component';
import { LibraryComponent } from './components/library/library.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    BookComponent,
    LibraryComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserInterfaceModule { }
