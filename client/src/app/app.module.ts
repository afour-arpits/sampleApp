import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommentsService } from './services/comments.service';
import { PopupBoxComponent } from './popup-box/popup-box.component'

@NgModule({
  declarations: [
    AppComponent,
    PopupBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    AppRoutingModule
  ],
  providers: [ CommentsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
