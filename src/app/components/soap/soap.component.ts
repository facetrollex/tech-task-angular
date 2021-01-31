import { Component } from '@angular/core';
import { NAVIGATION } from '../../navigation';
import { DataModel } from '../data.model';

@Component({
  selector: 'app-soap',
  templateUrl: './soap.component.html',
})
export class SoapComponent {
  public data: DataModel = NAVIGATION[1];

  constructor() {}
}
