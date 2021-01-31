import { Component } from '@angular/core';
import { DataModel } from '../data.model';
import { NAVIGATION } from '../../navigation';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
})
export class PaperComponent {
  public data: DataModel = NAVIGATION[2];
  constructor() {}
}
