import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


import { AppComponent } from './app.component';
import { CatalogModule } from "./catalog/catalog.module";
import { ServicesModule } from "./core/services/services.module";
import { AppRoutingModule } from "./app-routing.module";
import { WidgetsModule} from "./core/widgets/widgets.module";
import { CartModule } from "./cart/cart.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CatalogModule,
    CartModule,
    ServicesModule,
    WidgetsModule,
    // rooting module à la fin
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
