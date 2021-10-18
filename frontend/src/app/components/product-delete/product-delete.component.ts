import { Product } from './../product/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    });
  };

  excluirButton(): void{
    this.productService.delete(this.product.id).subscribe( () => {
      this.productService.showMessage('Produto excluido com sucesso!')
    })
    this.router.navigate(['/products']);
  };

  cancelarButton(): void{
    this.router.navigate(['/products']);
  };

}
