import { NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  // { path: 'cart', component: CartRootComponent, children: [] },
  { path: '', redirectTo: 'catalog', pathMatch: 'full'},
  { path: '**', redirectTo: 'catalog', pathMatch: 'full'}
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
