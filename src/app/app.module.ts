import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductsAlertComponent } from "./products-alert/products-alert.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { DoublePipe } from "./double.pipe";
import { DividebyPipe } from "./divideby.pipe";
import { CartService } from "./cart.service";
import { CartComponent } from "./cart/cart.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { GeneralErrorComponent } from "./general-error/general-error.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AccountserviceService } from "./accountservice.service";
import { AccountService } from "./account.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "products", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent },
      { path: "shipping", component: ShippingComponent },
      { path: "generalerror", component: GeneralErrorComponent },
      { path: "", component: LoginComponent },
      { path: "register", component: RegisterComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductsAlertComponent,
    ProductDetailsComponent,
    DoublePipe,
    DividebyPipe,
    CartComponent,
    ShippingComponent,
    GeneralErrorComponent,
    LoginComponent,
    RegisterComponent
  ],
  bootstrap: [AppComponent],
  providers: [CartService, AccountService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
