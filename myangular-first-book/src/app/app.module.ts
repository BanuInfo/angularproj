import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompNewComponent } from './first-comp-new/first-comp-new.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { ThirdCompComponent } from './third-comp/third-comp.component';
import { MyPropCompDemoComponent } from './my-prop-comp-demo/my-prop-comp-demo.component';
import { FormsModule } from '@angular/forms';
import { DemoInputLiveComponent } from './demo-input-live/demo-input-live.component';
import { OutDemoEventComponent } from './out-demo-event/out-demo-event.component';
import { IfdemoCompComponent } from './ifdemo-comp/ifdemo-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompNewComponent,
    SecondCompComponent,
    ThirdCompComponent,
    MyPropCompDemoComponent,
    DemoInputLiveComponent,
    OutDemoEventComponent,
    IfdemoCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
