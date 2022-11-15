import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SINGLE_PHOTO_ROUTE } from 'src/app/app-routes';
import { PhotosComponent } from './photos/photos.component';
import { SinglePhotoComponent } from './single-photo/single-photo.component';


const routes: Routes = [
  {
    path: '',
    component: PhotosComponent,
  },
  {
    path: SINGLE_PHOTO_ROUTE,
    component: SinglePhotoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
