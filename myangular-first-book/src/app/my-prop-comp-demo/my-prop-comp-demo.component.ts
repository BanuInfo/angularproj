import { Component, OnInit } from '@angular/core';
 
 

@Component({
  selector: 'app-my-prop-comp-demo',
  templateUrl: './my-prop-comp-demo.component.html',
  styleUrls: ['./my-prop-comp-demo.component.scss']
})
export class MyPropCompDemoComponent implements OnInit {

  my_title:string ="THIS IS MY TEST";
  imagedemo:string = "https://images.freeimages.com/images/large-previews/8e0/yellow-dandelion-1558021.jpg";
  
  constructor() { }

  ngOnInit(): void {
  }

}
