import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';
export var AngularEchartsDirective = (function () {
    function AngularEchartsDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.myChart = null;
        this.currentWindowWidth = null;
        this.checked = 0;
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
            }
            if (this.hasData()) {
                this.updateChart();
            }
        }
    };
    AngularEchartsDirective.prototype.onDatasetChange = function (dataset) {
        if (this.myChart && this.options) {
            if (!this.options.series) {
                this.options.series = [];
            }
            for (var i = 0, len = dataset.length; i < len; i++) {
                if (!this.options.series[i]) {
                    this.options.series[i] = { data: dataset[i] };
                }
                else {
                    this.options.series[i].data = dataset[i];
                }
            }
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
        'onWindowResize': [{ type: HostListener, args: ['window:resize', ['$event'],] },],
    };
    return AngularEchartsDirective;
}());
//# sourceMappingURL=angular-echarts.directive.js.map