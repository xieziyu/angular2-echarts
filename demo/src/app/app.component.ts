import { Component, ViewEncapsulation } from '@angular/core';

import * as demo from './demo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  // demo1:
  chartOption1 = demo.LineChartOptions1;

  // demo2:
  chartOption2 = demo.BarChartOptions1;
  dataset2 = demo.BarChartDataset1;
}
