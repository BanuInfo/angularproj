import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-comp',
  templateUrl: './third-comp.component.html',
  styleUrls: ['./third-comp.component.scss']
})

export class ThirdCompComponent implements OnInit {
  per_name:string;
  

  constructor() {
    this.per_name = "Venu" ;
   }

  ngOnInit(): void {
  }

}
