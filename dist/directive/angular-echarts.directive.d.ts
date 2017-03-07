import { ElementRef, Renderer, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
export declare class AngularEchartsDirective implements OnChanges, OnDestroy {
    private el;
    private renderer;
    options: any;
    dataset: Array<any>;
    theme: string;
    loading: boolean;
    private myChart;
    private currentWindowWidth;
    private checked;
    constructor(el: ElementRef, renderer: Renderer);
    private createChart();
    private updateChart();
    onWindowResize(event: any): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
    onOptionsChange(opt: any): void;
    onDatasetChange(dataset: Array<any>): void;
    onLoadingChange(loading: boolean): void;
    hasData(): boolean;
}
