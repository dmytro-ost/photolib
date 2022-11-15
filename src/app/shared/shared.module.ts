import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModulesModule } from './material-modules/material-modules.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { PhotosListComponent } from './photos-list/photos-list.component';


@NgModule({
  declarations: [
    SpinnerComponent,
    PhotosListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModulesModule
  ],
  exports: [
    MaterialModulesModule,
    SpinnerComponent,
    PhotosListComponent,
  ]
})
export class SharedModule { }
