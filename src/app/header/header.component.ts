import { Component, OnInit } from '@angular/core';
import{ServicesService} from '../services.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  togole=false;
  studentDatas:any=[];
  constructor(private service:ServicesService  ) { 

  }

  ngOnInit(): void {
    console.log('data', this.service.getData());
    // this.studentDatas=[this.service.getData().value];
  }
  
  togolObservation(){
  this.togole=!this.togole;
  }


}
