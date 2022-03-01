import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MyserviceService } from './myservice.service';
import { InventoryComponent } from './inventory/inventory.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpclientService } from './httpclient.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent,
    ProductDetailComponent,
    PagenotfoundComponent,
    InventoryComponent,
    NewCmpComponent,
    HttpclientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MyserviceService, HttpclientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
