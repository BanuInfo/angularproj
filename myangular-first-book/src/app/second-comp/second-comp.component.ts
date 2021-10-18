import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.scss']
})
export class SecondCompComponent implements OnInit {

  stud_name:string[];
  
  constructor() { 
    this.stud_name=['Das','Gaya','Banu','Priya'];
  }

  ngOnInit(): void {
  }

}
