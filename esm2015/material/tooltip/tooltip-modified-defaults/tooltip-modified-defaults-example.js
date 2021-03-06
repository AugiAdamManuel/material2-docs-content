/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/tooltip/tooltip-modified-defaults/tooltip-modified-defaults-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/tooltip";
/**
 * Custom options the configure the tooltip's default show/hide delays.
 * @type {?}
 */
export const myCustomTooltipDefaults = {
    showDelay: 1000,
    hideDelay: 1000,
    touchendHideDelay: 1000,
};
/**
 * \@title Tooltip with a show and hide delay
 */
export class TooltipModifiedDefaultsExample {
}
TooltipModifiedDefaultsExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-modified-defaults-example',
                templateUrl: 'tooltip-modified-defaults-example.html',
                styleUrls: ['tooltip-modified-defaults-example.css'],
                providers: [
                    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
                ],
            },] },
];
/** @nocollapse */ TooltipModifiedDefaultsExample.ɵfac = function TooltipModifiedDefaultsExample_Factory(t) { return new (t || TooltipModifiedDefaultsExample)(); };
/** @nocollapse */ TooltipModifiedDefaultsExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipModifiedDefaultsExample, selectors: [["tooltip-modified-defaults-example"]], features: [i0.ɵɵProvidersFeature([
            { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
        ])], decls: 2, vars: 0, consts: [["mat-raised-button", "", "matTooltip", "By default, I delay", "aria-label", "Button that displays a tooltip that has custom delays through a default config"]], template: function TooltipModifiedDefaultsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵtext(1, " Button with delay-default tooltip\n");
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatButton, i2.MatTooltip], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TooltipModifiedDefaultsExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-modified-defaults-example',
                templateUrl: 'tooltip-modified-defaults-example.html',
                styleUrls: ['tooltip-modified-defaults-example.css'],
                providers: [
                    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbHRpcC90b29sdGlwLW1vZGlmaWVkLWRlZmF1bHRzL3Rvb2x0aXAtbW9kaWZpZWQtZGVmYXVsdHMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy90b29sdGlwLW1vZGlmaWVkLWRlZmF1bHRzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLDJCQUEyQixFQUEyQixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7OztBQUdoRyxNQUFNLE9BQU8sdUJBQXVCLEdBQTZCO0lBQy9ELFNBQVMsRUFBRSxJQUFJO0lBQ2YsU0FBUyxFQUFFLElBQUk7SUFDZixpQkFBaUIsRUFBRSxJQUFJO0NBQ3hCOzs7O0FBYUQsTUFBTSxPQUFPLDhCQUE4Qjs7O1lBUjFDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QyxXQUFXLEVBQUUsd0NBQXdDO2dCQUNyRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztnQkFDcEQsU0FBUyxFQUFFO29CQUNULEVBQUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBQztpQkFDMUU7YUFDRjs7NEdBQ1ksOEJBQThCO21FQUE5Qiw4QkFBOEIsdUZBSjlCO1lBQ1QsRUFBQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFDO1NBQzFFO1FDbkJILGlDQUdFO1FBQUEsb0RBQ0Y7UUFBQSxpQkFBUzs7a0REaUJJLDhCQUE4QjtjQVIxQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0MsV0FBVyxFQUFFLHdDQUF3QztnQkFDckQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7Z0JBQ3BELFNBQVMsRUFBRTtvQkFDVCxFQUFDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxRQUFRLEVBQUUsdUJBQXVCLEVBQUM7aUJBQzFFO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01BVF9UT09MVElQX0RFRkFVTFRfT1BUSU9OUywgTWF0VG9vbHRpcERlZmF1bHRPcHRpb25zfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcblxuLyoqIEN1c3RvbSBvcHRpb25zIHRoZSBjb25maWd1cmUgdGhlIHRvb2x0aXAncyBkZWZhdWx0IHNob3cvaGlkZSBkZWxheXMuICovXG5leHBvcnQgY29uc3QgbXlDdXN0b21Ub29sdGlwRGVmYXVsdHM6IE1hdFRvb2x0aXBEZWZhdWx0T3B0aW9ucyA9IHtcbiAgc2hvd0RlbGF5OiAxMDAwLFxuICBoaWRlRGVsYXk6IDEwMDAsXG4gIHRvdWNoZW5kSGlkZURlbGF5OiAxMDAwLFxufTtcblxuLyoqXG4gKiBAdGl0bGUgVG9vbHRpcCB3aXRoIGEgc2hvdyBhbmQgaGlkZSBkZWxheVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b29sdGlwLW1vZGlmaWVkLWRlZmF1bHRzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2x0aXAtbW9kaWZpZWQtZGVmYXVsdHMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2x0aXAtbW9kaWZpZWQtZGVmYXVsdHMtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge3Byb3ZpZGU6IE1BVF9UT09MVElQX0RFRkFVTFRfT1BUSU9OUywgdXNlVmFsdWU6IG15Q3VzdG9tVG9vbHRpcERlZmF1bHRzfVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwTW9kaWZpZWREZWZhdWx0c0V4YW1wbGUge31cbiIsIjxidXR0b24gbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgbWF0VG9vbHRpcD1cIkJ5IGRlZmF1bHQsIEkgZGVsYXlcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiQnV0dG9uIHRoYXQgZGlzcGxheXMgYSB0b29sdGlwIHRoYXQgaGFzIGN1c3RvbSBkZWxheXMgdGhyb3VnaCBhIGRlZmF1bHQgY29uZmlnXCI+XG4gIEJ1dHRvbiB3aXRoIGRlbGF5LWRlZmF1bHQgdG9vbHRpcFxuPC9idXR0b24+XG4iXX0=