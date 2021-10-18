import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-out-demo-event',
  templateUrl: './out-demo-event.component.html',
  styleUrls: ['./out-demo-event.component.scss']
})
export class OutDemoEventComponent implements OnInit {
  @Output()  counter : number ;
  constructor(){
    this.counter=1; 
  }

  ngOnInit(): void {
  }

  increase_counter():void
  {
    this.counter = this.counter + 1;
  }

  
  decrease_counter():void
  {
    this.counter = this.counter - 1;
  }


}
