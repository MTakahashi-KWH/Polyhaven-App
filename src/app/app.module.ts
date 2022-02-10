import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BottonNavBarComponent } from './navigation/Bottomnavbar.component';
import { TopNavBarComponent } from './navigation/Topnavbar.component';
import { GreyScaleParallax } from './parallaxelements/greyscaleparallax.component';
import { FullSceneParallax } from './parallaxelements/sceneparallax.component';
import { LibraryCardComponent } from './splashelements/Library.card.component';
import { LibrarySplashComponent } from './splashelements/Librarysplash.component';
import { TitleSplashComponent } from './splashelements/Titlesplash.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottonNavBarComponent,
    TitleSplashComponent,
    LibrarySplashComponent,
    LibraryCardComponent,
    FullSceneParallax,
    GreyScaleParallax
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
