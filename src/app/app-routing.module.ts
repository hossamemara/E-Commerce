import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './carts/components/carts/carts.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'allproducts',pathMatch:'full'},
  {path:'allproducts',component:AllProductsComponent},
  {path:'productsDetails/:id',component:ProductDetailsComponent},
  {path:'carts',component:CartsComponent},
  {path:'**',component:NotFoundComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
