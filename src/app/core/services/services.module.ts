import { NgModule } from '@angular/core';
import { CatalogService } from "./catalog.service";
import { CartService } from "./cart.service";

@NgModule({
  providers: [CatalogService, CartService]
})
export class ServicesModule { }
