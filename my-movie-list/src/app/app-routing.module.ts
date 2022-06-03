import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./modules/movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path: 'my-list',
    loadChildren: () => import('./modules/mylist/mylist.module').then(m => m.MylistModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
