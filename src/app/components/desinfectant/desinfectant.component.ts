import { Component } from '@angular/core';
import { DataModel } from '../data.model';
import { NAVIGATION } from '../../navigation';

@Component({
  selector: 'app-desinfectant',
  templateUrl: './desinfectant.component.html',
})
export class DesinfectantComponent {
  public data: DataModel = NAVIGATION[3];
  constructor() {}
}
