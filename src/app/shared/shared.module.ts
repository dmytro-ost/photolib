import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModulesModule } from './material-modules/material-modules.module';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MaterialModulesModule
  ],
  exports: [
    MaterialModulesModule,
    SpinnerComponent,
  ]
})
export class SharedModule { }
