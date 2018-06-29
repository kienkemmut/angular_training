import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { FormsModule} from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
      BrowserModule,
      FormsModule
  ],
  declarations: [AddUserComponent, EditUserComponent, ListComponent, LoginComponent, AppComponent],
    providers: [],
})
export class UserModule { }
