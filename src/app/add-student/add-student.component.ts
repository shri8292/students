import { outputAst } from '@angular/compiler';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {ServicesService} from '../services.service'
import { FormBuilder,FormGroup} from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  formData !: FormGroup;
  studentDatas:any=[];
  
  // formData= new FormGroup({
  //   firstName :new FormControl(''),
  //   lastName :new FormControl(""),
  //   email:new FormControl(''),
  // })

  // saveData(){
  //   console.log(this.formData.value);
  // }

  

  constructor(
    private formbuilder:FormBuilder,
    private service:ServicesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formData=this.formbuilder.group({
      firstName:[''],
      lastName:[''],
      email:['']
    })
  }


  
  submitDetails(){
    console.log('student details',this.formData.value);
    this.studentDatas.push(this.formData.value);
    this.service.setData(this.formData);
    this.formData.reset();
    this.router.navigate(['/']);
  }
}
