import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderModel } from 'src/app/components/templates/header/header.model';
import { HeaderService } from 'src/app/components/templates/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})

export class ProductCrudComponent implements OnInit {
  headerModel: HeaderModel = {
    title: 'Cadastro de Produtos',
    icon: 'storefront',
    routeUrl: '/products'
  }

  constructor(
    private router: Router,
    private headerService: HeaderService) {
    headerService.set(this.headerModel)
  }


  ngOnInit(): void {
  }

  navigateToProductCreate(): void{
    this.router.navigate(['products/create']);
  }
}
