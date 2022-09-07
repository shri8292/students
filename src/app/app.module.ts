import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddStudentComponent } from './add-student/add-student.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import{HttpClientModule} from '@angular/common/http';
import { SideNavComponent } from './side-nav/side-nav.component'

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
