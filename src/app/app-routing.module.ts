import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/homepage.component';
import { HDRILibrary } from './pages/hdrilibrary.component';
import { TextureLibrary } from './pages/texturelibrary.component';
import { ModelLibrary } from './pages/modellibrary.component';
import { AllLibrary } from './pages/alllibrary.component';

const routes: Routes = [
  {path: '', component: HomePage },
  {path: 'hdris', component: HDRILibrary },
  {path: 'texture', component: TextureLibrary },
  {path: 'models', component: ModelLibrary },
  {path: 'all', component: AllLibrary }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
