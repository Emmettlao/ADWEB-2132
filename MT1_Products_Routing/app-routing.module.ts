import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [{path: 'home', component:HomeComponent},
{path: 'about', component:AboutComponent},
{path: 'contact', component:ContactComponent},
{path: 'product', component:ProductComponent},
{path: 'product-detail', component:ProductDetailComponent},
{path: 'pagenotfound', component:PagenotfoundComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

