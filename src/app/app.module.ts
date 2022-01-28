import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BottonNavBarComponent } from './navigation/Bottomnavbar.component';
import { TopNavBarComponent } from './navigation/Topnavbar.component';
import { TitleSplashComponent } from './splashelements/Titlesplash.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottonNavBarComponent,
    TitleSplashComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
