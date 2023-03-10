import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites/favorites.component';
import { FavoritesRoutingModule } from './favorites-routing.modules';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FavoritesRoutingModule
  ]
})
export class FavoritesModule { }
