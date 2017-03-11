import { Directive, ElementRef, Renderer, Input, Output, HostListener, EventEmitter } from '@angular/core';
export var AngularEchartsDirective = (function () {
    function AngularEchartsDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.chartClick = new EventEmitter();
        this.chartDblClick = new EventEmitter();
        this.chartMouseDown = new EventEmitter();
        this.chartMouseUp = new EventEmitter();
        this.chartMouseOver = new EventEmitter();
        this.chartMouseOut = new EventEmitter();
        this.chartGlobalOut = new EventEmitter();
        this.myChart = null;
        this.currentWindowWidth = null;
        this.skipDataChange = false;
    }
    AngularEchartsDirective.prototype.createChart = function () {
        this.theme = this.theme || 'default';
        this.currentWindowWidth = window.innerWidth;
        return echarts.init(this.el.nativeElement);
    };
    AngularEchartsDirective.prototype.updateChart = function () {
        this.myChart.setOption(this.options);
        this.myChart.resize();
    };
    AngularEchartsDirective.prototype.onWindowResize = function (event) {
        if (event.target.innerWidth !== this.currentWindowWidth) {
            this.currentWindowWidth = event.target.innerWidth;
            if (this.myChart) {
                this.myChart.resize();
            }
        }
    };
    AngularEchartsDirective.prototype.ngOnChanges = function (changes) {
        if (changes['options']) {
            this.onOptionsChange(this.options);
        }
        if (changes['dataset']) {
            this.onDatasetChange(this.dataset);
        }
        if (changes['loading']) {
            this.onLoadingChange(this.loading);
        }
        if (this.skipDataChange) {
            this.skipDataChange = false;
        }
    };
    AngularEchartsDirective.prototype.ngOnDestroy = function () {
        if (this.myChart) {
            this.myChart.dispose();
            this.myChart = null;
        }
    };
    AngularEchartsDirective.prototype.onOptionsChange = function (opt) {
        if (opt) {
            if (!this.myChart) {
                this.myChart = this.createChart();
                this.registerEvents(this.myChart);
            }
            if (this.hasData()) {
                this.updateChart();
                this.skipDataChange = true;
            }
            else if (this.dataset && this.dataset.length) {
                this.mergeDataset(this.dataset);
                this.updateChart();
                this.skipDataChange = true;
            }
        }
    };
    AngularEchartsDirective.prototype.onDatasetChange = function (dataset) {
        if (this.skipDataChange)
            return;
        if (this.myChart && this.options) {
            if (!this.options.series) {
                this.options.series = [];
            }
            this.mergeDataset(dataset);
            this.updateChart();
        }
    };
    AngularEchartsDirective.prototype.onLoadingChange = function (loading) {
        if (this.myChart) {
            if (loading) {
                this.myChart.showLoading();
            }
            else {
                this.myChart.hideLoading();
            }
        }
    };
    AngularEchartsDirective.prototype.mergeDataset = function (dataset) {
        for (var i = 0, len = dataset.length; i < len; i++) {
            if (!this.options.series[i]) {
                this.options.series[i] = { data: dataset[i] };
            }
            else {
                this.options.series[i].data = dataset[i];
            }
        }
    };
    AngularEchartsDirective.prototype.hasData = function () {
        if (!this.options.series || !this.options.series.length) {
            return false;
        }
        for (var _i = 0, _a = this.options.series; _i < _a.length; _i++) {
            var serie = _a[_i];
            if (serie.data && serie.data.length > 0) {
                return true;
            }
        }
        return false;
    };
    AngularEchartsDirective.prototype.registerEvents = function (myChart) {
        var _this = this;
        if (myChart) {
            myChart.on('click', function (e) { _this.chartClick.emit(e); });
            myChart.on('dblClick', function (e) { _this.chartDblClick.emit(e); });
            myChart.on('mousedown', function (e) { _this.chartMouseDown.emit(e); });
            myChart.on('mouseup', function (e) { _this.chartMouseUp.emit(e); });
            myChart.on('mouseover', function (e) { _this.chartMouseOver.emit(e); });
            myChart.on('mouseout', function (e) { _this.chartMouseOut.emit(e); });
            myChart.on('globalout', function (e) { _this.chartGlobalOut.emit(e); });
        }
    };
    AngularEchartsDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[echarts]'
                },] },
    ];
    AngularEchartsDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer, },
    ]; };
    AngularEchartsDirective.propDecorators = {
        'options': [{ type: Input },],
        'dataset': [{ type: Input },],
        'theme': [{ type: Input },],
        'loading': [{ type: Input },],
        'chartClick': [{ type: Output },],
        'chartDblClick': [{ type: Output },],
        'chartMouseDown': [{ type: Output },],
        'chartMouseUp': [{ type: Output },],
        'chartMouseOver': [{ type: Output },],
        'chartMouseOut': [{ type: Output },],
        'chartGlobalOut': [{ type: Output },],
        'onWindowResize': [{ type: HostListener, args: ['window:resize', ['$event'],] },],
    };
    return AngularEchartsDirective;
}());
//# sourceMappingURL=angular-echarts.directive.js.map