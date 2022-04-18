import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { LibraryComponent } from './library/library.component';
import { DashboardComponent } from './dashboard/dashboard.component';



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
