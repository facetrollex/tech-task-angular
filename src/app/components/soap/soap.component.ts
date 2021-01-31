import { Component } from '@angular/core';
import { NAVIGATION } from '../../navigation';
import { DataModel } from '../data.model';

@Component({
  selector: 'app-soap',
  templateUrl: './soap.component.html',
  styleUrls: ['./soap.component.scss']
})
export class SoapComponent {
  public data: DataModel = NAVIGATION[1];

  constructor() {}
}
