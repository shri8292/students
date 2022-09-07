import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
  path:'header',
  component:HeaderComponent
  },
  {
    path:'addaptient',
    component:AddStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
