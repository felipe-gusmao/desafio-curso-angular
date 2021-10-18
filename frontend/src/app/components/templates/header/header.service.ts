import { HeaderModel } from './header.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerModel = new BehaviorSubject<HeaderModel>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get headerModel():HeaderModel {
    return this._headerModel.value;
  }

  set (headerModel:HeaderModel) {
    return this._headerModel.next(headerModel);
  }
}
