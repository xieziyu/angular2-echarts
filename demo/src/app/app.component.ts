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
  chartOption2= demo.BarChartOptions1;
  dataset = demo.BarChartDataset1;

  // demo3:
  chartOption3 = demo.PieChartOptions1;
  chartLoading = false;

  chageDataset() {
    this.dataset = (this.dataset == demo.BarChartDataset2) ? demo.BarChartDataset1 :  demo.BarChartDataset2;
  }

  toggleLoading() {
    this.chartLoading = !this.chartLoading;
  }
}
