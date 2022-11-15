import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { SinglePhotoComponent } from './single-photo/single-photo.component';
import { PhotosRoutingModule } from './photos-routing.modules';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';



@NgModule({
  declarations: [
    PhotosComponent,
    SinglePhotoComponent,
    InfiniteScrollComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PhotosRoutingModule,
  ]
})
export class PhotosModule { }
