import { NgModule } from '@angular/core';
import { AngularEchartsDirective } from './directive/angular-echarts.directive';
export * from './directive/angular-echarts.directive';
export var AngularEchartsModule = (function () {
    function AngularEchartsModule() {
    }
    AngularEchartsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AngularEchartsDirective
                    ],
                    exports: [
                        AngularEchartsDirective
                    ]
                },] },
    ];
    AngularEchartsModule.ctorParameters = function () { return []; };
    return AngularEchartsModule;
}());
//# sourceMappingURL=index.js.map