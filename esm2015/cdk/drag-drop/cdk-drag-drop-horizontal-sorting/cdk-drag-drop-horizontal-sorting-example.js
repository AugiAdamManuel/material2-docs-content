/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-horizontal-sorting/cdk-drag-drop-horizontal-sorting-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
import * as i2 from "@angular/common";
function CdkDragDropHorizontalSortingExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const timePeriod_r28 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(timePeriod_r28);
} }
/**
 * \@title Drag&Drop horizontal sorting
 */
export class CdkDragDropHorizontalSortingExample {
    constructor() {
        this.timePeriods = [
            'Bronze age',
            'Iron age',
            'Middle ages',
            'Early modern period',
            'Long nineteenth century'
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
    }
}
CdkDragDropHorizontalSortingExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-horizontal-sorting-example',
                templateUrl: 'cdk-drag-drop-horizontal-sorting-example.html',
                styleUrls: ['cdk-drag-drop-horizontal-sorting-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropHorizontalSortingExample.ɵfac = function CdkDragDropHorizontalSortingExample_Factory(t) { return new (t || CdkDragDropHorizontalSortingExample)(); };
/** @nocollapse */ CdkDragDropHorizontalSortingExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropHorizontalSortingExample, selectors: [["cdk-drag-drop-horizontal-sorting-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"]], template: function CdkDragDropHorizontalSortingExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropHorizontalSortingExample_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        i0.ɵɵtemplate(1, CdkDragDropHorizontalSortingExample_div_1_Template, 2, 1, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.timePeriods);
    } }, directives: [i1.CdkDropList, i2.NgForOf, i1.CdkDrag], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 1000px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: flex;\n  flex-direction: row;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-right: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  flex-grow: 1;\n  flex-basis: 0;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropHorizontalSortingExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-horizontal-sorting-example',
                templateUrl: 'cdk-drag-drop-horizontal-sorting-example.html',
                styleUrls: ['cdk-drag-drop-horizontal-sorting-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkDragDropHorizontalSortingExample.prototype.timePeriods;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1ob3Jpem9udGFsLXNvcnRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1ob3Jpem9udGFsLXNvcnRpbmcvY2RrLWRyYWctZHJvcC1ob3Jpem9udGFsLXNvcnRpbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1ob3Jpem9udGFsLXNvcnRpbmcvY2RrLWRyYWctZHJvcC1ob3Jpem9udGFsLXNvcnRpbmctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQWMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0lDQWxFLDhCQUF3RTtJQUFBLFlBQWM7SUFBQSxpQkFBTTs7O0lBQXBCLGVBQWM7SUFBZCxvQ0FBYzs7Ozs7QURVeEYsTUFBTSxPQUFPLG1DQUFtQztJQUxoRDtRQU1FLGdCQUFXLEdBQUc7WUFDWixZQUFZO1lBQ1osVUFBVTtZQUNWLGFBQWE7WUFDYixxQkFBcUI7WUFDckIseUJBQXlCO1NBQzFCLENBQUM7S0FLSDs7Ozs7SUFIQyxJQUFJLENBQUMsS0FBNEI7UUFDL0IsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMENBQTBDO2dCQUNwRCxXQUFXLEVBQUUsK0NBQStDO2dCQUM1RCxTQUFTLEVBQUUsQ0FBQyw4Q0FBOEMsQ0FBQzthQUM1RDs7c0hBQ1ksbUNBQW1DO3dFQUFuQyxtQ0FBbUM7UUNYaEQsOEJBQ0U7UUFEd0UsNklBQXNCLGdCQUFZLElBQUM7UUFDM0csb0ZBQXdFO1FBQzFFLGlCQUFNOztRQURxQixlQUFzQztRQUF0Qyx5Q0FBc0M7O2tERFVwRCxtQ0FBbUM7Y0FML0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQ0FBMEM7Z0JBQ3BELFdBQVcsRUFBRSwrQ0FBK0M7Z0JBQzVELFNBQVMsRUFBRSxDQUFDLDhDQUE4QyxDQUFDO2FBQzVEOzs7O0lBRUMsMERBTUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG4vKipcbiAqIEB0aXRsZSBEcmFnJkRyb3AgaG9yaXpvbnRhbCBzb3J0aW5nXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtaG9yaXpvbnRhbC1zb3J0aW5nLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3AtaG9yaXpvbnRhbC1zb3J0aW5nLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWhvcml6b250YWwtc29ydGluZy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcEhvcml6b250YWxTb3J0aW5nRXhhbXBsZSB7XG4gIHRpbWVQZXJpb2RzID0gW1xuICAgICdCcm9uemUgYWdlJyxcbiAgICAnSXJvbiBhZ2UnLFxuICAgICdNaWRkbGUgYWdlcycsXG4gICAgJ0Vhcmx5IG1vZGVybiBwZXJpb2QnLFxuICAgICdMb25nIG5pbmV0ZWVudGggY2VudHVyeSdcbiAgXTtcblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy50aW1lUGVyaW9kcywgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgfVxufVxuIiwiPGRpdiBjZGtEcm9wTGlzdCBjZGtEcm9wTGlzdE9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIGNsYXNzPVwiZXhhbXBsZS1saXN0XCIgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYm94XCIgKm5nRm9yPVwibGV0IHRpbWVQZXJpb2Qgb2YgdGltZVBlcmlvZHNcIiBjZGtEcmFnPnt7dGltZVBlcmlvZH19PC9kaXY+XG48L2Rpdj5cbiJdfQ==