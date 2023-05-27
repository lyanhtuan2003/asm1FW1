import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interface/Product';
import { ServiceComponent } from 'src/app/service/service.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  product: Iproduct = {
    name: "",
    price: 0
  }

  constructor(private productService: ServiceComponent) {

  }


  onHandelSubmit() {
    this.productService.addProduct(this.product).subscribe(product => console.log(product))
  }
}
