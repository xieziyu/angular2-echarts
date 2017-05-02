import { ElementRef, Renderer, OnChanges, OnDestroy, SimpleChange, EventEmitter } from '@angular/core';
export declare class AngularEchartsDirective implements OnChanges, OnDestroy {
    private el;
    private renderer;
    options: any;
    dataset: any[];
    theme: string;
    loading: boolean;
    chartInit: EventEmitter<any>;
    chartClick: EventEmitter<any>;
    chartDblClick: EventEmitter<any>;
    chartMouseDown: EventEmitter<any>;
    chartMouseUp: EventEmitter<any>;
    chartMouseOver: EventEmitter<any>;
    chartMouseOut: EventEmitter<any>;
    chartGlobalOut: EventEmitter<any>;
    chartDataZoom: EventEmitter<any>;
    private myChart;
    private currentWindowWidth;
    constructor(el: ElementRef, renderer: Renderer);
    private createChart();
    private updateChart();
    onWindowResize(event: any): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
    private onOptionsChange(opt);
    private onDatasetChange(dataset);
    private onLoadingChange(loading);
    private mergeDataset(dataset);
    private hasData();
    private registerEvents(myChart);
}
