/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/menu/menu-overview/menu-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/menu";
/**
 * \@title Basic menu
 */
export class MenuOverviewExample {
}
MenuOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'menu-overview-example',
                templateUrl: 'menu-overview-example.html',
                styleUrls: ['menu-overview-example.css'],
            },] },
];
/** @nocollapse */ MenuOverviewExample.ɵfac = function MenuOverviewExample_Factory(t) { return new (t || MenuOverviewExample)(); };
/** @nocollapse */ MenuOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: MenuOverviewExample, selectors: [["menu-overview-example"]], decls: 8, vars: 1, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""]], template: function MenuOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵtext(1, "Menu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-menu", null, 1);
        i0.ɵɵelementStart(4, "button", 2);
        i0.ɵɵtext(5, "Item 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 2);
        i0.ɵɵtext(7, "Item 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵproperty("matMenuTriggerFor", _r1);
    } }, directives: [i1.MatButton, i2.MatMenuTrigger, i2._MatMenu, i2.MatMenuItem], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuOverviewExample, [{
        type: Component,
        args: [{
                selector: 'menu-overview-example',
                templateUrl: 'menu-overview-example.html',
                styleUrls: ['menu-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbWVudS9tZW51LW92ZXJ2aWV3L21lbnUtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1vdmVydmlldy9tZW51LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFVeEMsTUFBTSxPQUFPLG1CQUFtQjs7O1lBTC9CLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzthQUN6Qzs7c0ZBQ1ksbUJBQW1CO3dEQUFuQixtQkFBbUI7UUNWaEMsaUNBQThDO1FBQUEsb0JBQUk7UUFBQSxpQkFBUztRQUMzRCx5Q0FDRTtRQUFBLGlDQUFzQjtRQUFBLHNCQUFNO1FBQUEsaUJBQVM7UUFDckMsaUNBQXNCO1FBQUEsc0JBQU07UUFBQSxpQkFBUztRQUN2QyxpQkFBVzs7O1FBSlEsdUNBQTBCOztrRERVaEMsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgbWVudVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZW51LW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ21lbnUtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ21lbnUtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTWVudU92ZXJ2aWV3RXhhbXBsZSB7fVxuIiwiPGJ1dHRvbiBtYXQtYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCI+TWVudTwvYnV0dG9uPlxuPG1hdC1tZW51ICNtZW51PVwibWF0TWVudVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+SXRlbSAxPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5JdGVtIDI8L2J1dHRvbj5cbjwvbWF0LW1lbnU+XG4iXX0=