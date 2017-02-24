import { Directive, ElementRef, Renderer, Input, HostListener, OnChanges, OnDestroy, SimpleChange } from '@angular/core';

declare var echarts: any;

@Directive({
  selector: '[echarts]'
})
export class AngularEchartsDirective implements OnChanges, OnDestroy {
  @Input() options: any;
  @Input() dataset: Array<any>;
  @Input() theme: string;
  @Input() loading: boolean;

  private myChart: any = null;
  private currentWindowWidth = null;
  private checked = 0;

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  private createChart() {
    this.theme = this.theme || 'default';
    this.currentWindowWidth = window.innerWidth;
    return echarts.init(this.el.nativeElement);
  }

  private updateChart() {
    this.myChart.setOption(this.options);
    this.myChart.resize();
  }

  @HostListener('window:resize', ['$event']) onWindowResize(event) {
    if (event.target.innerWidth !== this.currentWindowWidth) {
      this.currentWindowWidth = event.target.innerWidth;
      if (this.myChart) {
        this.myChart.resize();
      }
    }
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (changes['options']) {
      this.onOptionsChange(this.options);
    }

    if (changes['dataset']) {
      this.onDatasetChange(this.dataset);
    }

    if (changes['loading']) {
      this.onLoadingChange(this.loading);
    }
  }

  ngOnDestroy() {
    if (this.myChart) {
      this.myChart.dispose();
      this.myChart = null;
    }
  }

  onOptionsChange(opt: any) {
    if (opt) {
      if (!this.myChart) {
        this.myChart = this.createChart();
      }

      if (this.hasData()) {
        this.updateChart();
      }
    }
  }

  onDatasetChange(dataset: Array<any>) {
    if (this.myChart && this.options) {
      if (!this.options.series) {
        this.options.series = [];
      }
      
      for (let i = 0, len = dataset.length; i < len; i++) {
        if (!this.options.series[i]) {
          this.options.series[i] = { data: dataset[i] };
        } else {
          this.options.series[i].data = dataset[i];
        }
        
      }

      this.updateChart();
    }
  }

  onLoadingChange(loading: boolean) {
    if (this.myChart) {
      if (loading) {
        this.myChart.showLoading();
      } else {
        this.myChart.hideLoading();
      }
    }
  }

  /**
   * method to check if the option has dataset.
   */
  hasData(): boolean {
    if (!this.options.series || !this.options.series.length) {
      return false;
    }

    for (let serie of this.options.series) {
      if (serie.data && serie.data.length > 0) {
        return true;
      }
    }

    return false;
  }
}
