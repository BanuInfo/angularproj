import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-input-live',
  templateUrl: './demo-input-live.component.html',
  styleUrls: ['./demo-input-live.component.scss']
})
export class DemoInputLiveComponent implements OnInit {
  test_input:string="Banu";
  
  constructor() { }

  ngOnInit(): void {
  }

}
