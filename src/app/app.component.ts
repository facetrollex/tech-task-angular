import { Component } from '@angular/core';
import { NAVIGATION } from './navigation';
import { DataModel } from './components/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tech-task-angular';
  public navigation: DataModel[] = NAVIGATION;
}
