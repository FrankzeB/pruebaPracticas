import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //LazyLoading
  {path: 'auth',
  loadChildren:()=>import("./modules/auth/auth.module").then( m => m.AuthModule)} //creacion de lazyload (auth)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
