import { Component } from '@angular/core';
import { DataModel } from '../data.model';
import { NAVIGATION } from '../../navigation';

@Component({
  selector: 'app-hazmat',
  templateUrl: './hazmat.component.html',
})
export class HazmatComponent {

  public data: DataModel = NAVIGATION[0];
  constructor() { }
}
