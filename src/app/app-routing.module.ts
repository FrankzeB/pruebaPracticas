import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { AdditemComponent } from './components/additem/additem.component';

const routes: Routes = [
  //LazyLoading
  {path: 'auth',
  loadChildren:()=>import("./modules/auth/auth.module").then( m => m.AuthModule)}, //creacion de lazyload (auth)
  //Pimera app compra angular
  {path: '', component: ItemsComponent},
  {path:'add', component: AdditemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
