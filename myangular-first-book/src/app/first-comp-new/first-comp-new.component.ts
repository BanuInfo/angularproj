import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-first-comp-new',
  templateUrl: './first-comp-new.component.html',
  styleUrls: ['./first-comp-new.component.scss']
})
export class FirstCompNewComponent implements OnInit {

  @Input() s1_name : string | undefined;
  

  constructor() {
     
    }

  ngOnInit(): void {
  }

}
