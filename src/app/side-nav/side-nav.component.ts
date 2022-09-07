import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  togole=false;
  constructor() { }

  ngOnInit(): void {
  }

  togolObservation(){
    this.togole=!this.togole;
    }
}
