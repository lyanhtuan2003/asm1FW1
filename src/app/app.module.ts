import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { DetailComponent } from './pages/detail/detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { EditProductComponent } from './pages/admin/edit-product/edit-product.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { ServiceComponent } from './service/service.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductPageComponent,
    DetailComponent,
    PageNotFoundComponent,
    DashboardComponent,
    AdminProductComponent,
    AddProductComponent,
    EditProductComponent,
    LayoutAdminComponent,
    LayoutClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
