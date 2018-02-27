import { NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CatalogBookComponent} from "./catalog-book/catalog-book.component";
import {CatalogListComponent} from "./catalog-list/catalog-list.component";
import {CatalogRootComponent} from "./catalog-root/catalog-root.component";


const routes: Routes = [
  { path: 'catalog', component: CatalogRootComponent,
    children: [
      { path: 'list', component: CatalogListComponent },
      { path: 'book/:id', component: CatalogBookComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CatalogRoutingModule {

}
