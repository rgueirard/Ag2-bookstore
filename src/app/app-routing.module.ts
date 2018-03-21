import { NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  //lazyload cart module
  { path: 'cart', loadChildren: 'app/cart/cart.module#CartModule'},
  { path: '', redirectTo: 'catalog', pathMatch: 'full'},
  // { path: '**', redirectTo: 'catalog', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
