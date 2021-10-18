import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdemo-comp',
  templateUrl: './ifdemo-comp.component.html',
  styleUrls: ['./ifdemo-comp.component.scss']
})
export class IfdemoCompComponent implements OnInit {
  
  somevalue : boolean ;

  constructor() { 
    this.somevalue=false;
  }

  ngOnInit(): void {
  }

  calc_func(selval:boolean):void{
    if(selval)
    {
      this.somevalue=true;
    }else
    {
      this.somevalue=false;
    }
  }

}
