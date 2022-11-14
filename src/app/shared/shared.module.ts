import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModulesModule } from '../material-modules/material-modules.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModulesModule
  ],
  exports: [MaterialModulesModule]
})
export class SharedModule { }
