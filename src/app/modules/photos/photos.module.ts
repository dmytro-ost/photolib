import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { SinglePhotoComponent } from './single-photo/single-photo.component';
import { PhotosRoutingModule } from './photos-routing.modules';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PhotosComponent,
    PhotosListComponent,
    SinglePhotoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PhotosRoutingModule,
  ]
})
export class PhotosModule { }
