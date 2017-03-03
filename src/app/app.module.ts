import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppComponent2 } from './app.component2';

//Child components
import { Home} from './app.HomeComponent';
import {Header} from './app.HeaderComponent'
import {Contain} from './app.ContainComponent'
import {Footer} from './app.FooterComponent'
import {Logger} from './LoggerService';
@NgModule({
  declarations: [
    AppComponent,
    AppComponent2,
    Home,
    Header,
    Contain,
    Footer
  ],
  imports: [
    BrowserModule
  ],
  providers: [Logger],
  bootstrap: [AppComponent,AppComponent2]
})
export class AppModule { }
