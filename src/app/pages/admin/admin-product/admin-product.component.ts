import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interface/Product';
import { ServiceComponent } from 'src/app/service/service.component';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent {
  products: Iproduct[] = []

  constructor(private productService: ServiceComponent) {
    this.productService.getAllProduct().subscribe(product => this.products = product)
  }

  onRemove(id: any) {
    this.productService.removeProduct(id).subscribe(() => this.products = this.products.filter(item => item.id != id))
  }
}
