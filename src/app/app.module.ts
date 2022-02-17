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
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './pages/homepage.component';
import { HDRILibrary } from './pages/hdrilibrary.component';
import { TextureLibrary } from './pages/texturelibrary.component';
import { AllLibrary } from './pages/alllibrary.component';
import { ModelLibrary } from './pages/modellibrary.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BottonNavBarComponent,
    TitleSplashComponent,
    LibrarySplashComponent,
    LibraryCardComponent,
    FullSceneParallax,
    GreyScaleParallax,
    HomePage,
    HDRILibrary,
    TextureLibrary,
    ModelLibrary,
    AllLibrary
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
