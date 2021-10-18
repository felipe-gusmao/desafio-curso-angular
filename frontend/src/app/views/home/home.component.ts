import { HeaderService } from './../../components/templates/header/header.service';
import { HeaderModel } from './../../components/templates/header/header.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  headerModel: HeaderModel = {
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  }

  constructor(private headerService: HeaderService) {
    headerService.set(this.headerModel)
  }

  ngOnInit(): void {
  }

}
