import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interface/Product';
import { ActivatedRoute, Routes } from '@angular/router';
import { ServiceComponent } from 'src/app/service/service.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  product: Iproduct = {
    name: "",
    price: 0
  }
  constructor(private Route: ActivatedRoute, private productService: ServiceComponent) {
    this.Route.paramMap.subscribe(param => {
      const id = Number(param.get("id"))

      this.productService.getOneProduct(id).subscribe(product => this.product = product)
    })
  }
}
