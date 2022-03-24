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
import { HomePage } from './pages/home_page/homepage.component';
import { HDRILibrary } from './pages/hdrilibrary.component';
import { TextureLibrary } from './pages/texturelibrary.component';
import { AllLibrary } from './pages/alllibrary.component';
import { ModelLibrary } from './pages/modellibrary.component';
import { PatreonSplashComponent } from './splashelements/Patreonsplash.component';
import { PatreonCardComponent } from './splashelements/Patreon.card.component';
import { AboutUsSplashComponent } from './splashelements/Aboutussplash.component';
import { TextureSideBarComponent } from './pages/texturesidebar.component';
import { ModelSideBarComponent } from './pages/modelsidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { FormsModule } from '@angular/forms';

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
    AllLibrary,
    PatreonSplashComponent,
    PatreonCardComponent,
    AboutUsSplashComponent,
    TextureSideBarComponent,
    ModelSideBarComponent,
    UserInfoComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
