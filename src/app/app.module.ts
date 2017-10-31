import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberComponent } from './number/number.component';
import { ClockComponent } from './clock/clock.component';
import { DotComponent } from './dot/dot.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    ClockComponent,
    DotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
