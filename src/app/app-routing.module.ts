import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FAVORITES_ROUTE } from './app-routes';
import { ContainerComponent } from './modules/container/container.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '', 
        loadChildren: () => import('./modules/photos/photos.module').then(m => m.PhotosModule)
      },
      {
        path: FAVORITES_ROUTE,
        loadChildren: () => import('./modules/favorites/favorites.module').then(m => m.FavoritesModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
