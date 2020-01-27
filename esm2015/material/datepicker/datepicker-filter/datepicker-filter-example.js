/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/datepicker/datepicker-filter/datepicker-filter-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
/**
 * \@title Datepicker with filter validation
 */
export class DatepickerFilterExample {
    constructor() {
        this.myFilter = (/**
         * @param {?} d
         * @return {?}
         */
        (d) => {
            /** @type {?} */
            const day = (d || new Date()).getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        });
    }
}
DatepickerFilterExample.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-filter-example',
                templateUrl: 'datepicker-filter-example.html',
                styleUrls: ['datepicker-filter-example.css'],
            },] },
];
/** @nocollapse */ DatepickerFilterExample.ɵfac = function DatepickerFilterExample_Factory(t) { return new (t || DatepickerFilterExample)(); };
/** @nocollapse */ DatepickerFilterExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerFilterExample, selectors: [["datepicker-filter-example"]], decls: 7, vars: 3, consts: [[1, "example-full-width"], ["matInput", "", 3, "matDatepickerFilter", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerFilterExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Choose a date");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "input", 1);
        i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
        i0.ɵɵelement(5, "mat-datepicker", null, 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r13 = i0.ɵɵreference(6);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("matDatepickerFilter", ctx.myFilter)("matDatepicker", _r13);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("for", _r13);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerFilterExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-filter-example',
                templateUrl: 'datepicker-filter-example.html',
                styleUrls: ['datepicker-filter-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    DatepickerFilterExample.prototype.myFilter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1maWx0ZXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1maWx0ZXIvZGF0ZXBpY2tlci1maWx0ZXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1maWx0ZXIvZGF0ZXBpY2tlci1maWx0ZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFReEMsTUFBTSxPQUFPLHVCQUF1QjtJQUxwQztRQU1FLGFBQVE7Ozs7UUFBRyxDQUFDLENBQWMsRUFBVyxFQUFFOztrQkFDL0IsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDdEMsbURBQW1EO1lBQ25ELE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFBQTtLQUNGOzs7WUFYQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0M7OzhGQUNZLHVCQUF1Qjs0REFBdkIsdUJBQXVCO1FDUnBDLHlDQUNFO1FBQUEsaUNBQVc7UUFBQSw2QkFBYTtRQUFBLGlCQUFZO1FBQ3BDLDJCQUNBO1FBQUEsMkNBQXdFO1FBQ3hFLDBDQUF5QztRQUMzQyxpQkFBaUI7OztRQUhDLGVBQWdDO1FBQWhDLGtEQUFnQyx1QkFBQTtRQUNmLGVBQWM7UUFBZCwwQkFBYzs7a0RES3BDLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0M7Ozs7SUFFQywyQ0FJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHdpdGggZmlsdGVyIHZhbGlkYXRpb24gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItZmlsdGVyLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItZmlsdGVyLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLWZpbHRlci1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyRmlsdGVyRXhhbXBsZSB7XG4gIG15RmlsdGVyID0gKGQ6IERhdGUgfCBudWxsKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgZGF5ID0gKGQgfHwgbmV3IERhdGUoKSkuZ2V0RGF5KCk7XG4gICAgLy8gUHJldmVudCBTYXR1cmRheSBhbmQgU3VuZGF5IGZyb20gYmVpbmcgc2VsZWN0ZWQuXG4gICAgcmV0dXJuIGRheSAhPT0gMCAmJiBkYXkgIT09IDY7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICA8bWF0LWxhYmVsPkNob29zZSBhIGRhdGU8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyRmlsdGVyXT1cIm15RmlsdGVyXCIgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCI+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19