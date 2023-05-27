import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/interface/Product';
import { ServiceComponent } from 'src/app/service/service.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  product: Iproduct = {
    name: "",
    price: 0
  }

  constructor(private productService: ServiceComponent, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'))

      this.productService.getOneProduct(id).subscribe(product => this.product = product)
    })
  }

  onHandelSubmit() {
    this.productService.editProduct(this.product).subscribe(product => console.log(product))
  }
}
