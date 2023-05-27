import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { DetailComponent } from './pages/detail/detail.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { EditProductComponent } from './pages/admin/edit-product/edit-product.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "", component: LayoutClientComponent, children: [
      { path: '', component: HomePageComponent },
      { path: "product", component: ProductPageComponent },
      { path: "product/:id", component: DetailComponent }
    ]
  },
  {
    path: "admin", component: LayoutAdminComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "product", component: AdminProductComponent },
      { path: "product/add", component: AddProductComponent },
      { path: "product/edit/:id", component: EditProductComponent }
    ]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
