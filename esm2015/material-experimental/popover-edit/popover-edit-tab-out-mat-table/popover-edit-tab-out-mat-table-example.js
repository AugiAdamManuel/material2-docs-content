/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material-experimental/popover-edit/popover-edit-tab-out-mat-table/popover-edit-tab-out-mat-table-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/cdk-experimental/popover-edit";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material-experimental/popover-edit";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/icon";
function PopoverEditTabOutMatTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r146 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 12, 13);
    i0.ɵɵlistener("ngSubmit", function PopoverEditTabOutMatTableExample_ng_template_1_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r146); const element_r143 = ctx.$implicit; const _r144 = i0.ɵɵreference(2); const ctx_r145 = i0.ɵɵnextContext(); return ctx_r145.onSubmitWeight(element_r143, _r144); })("matEditLensPreservedFormValueChange", function PopoverEditTabOutMatTableExample_ng_template_1_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r146); const element_r143 = ctx.$implicit; const ctx_r147 = i0.ɵɵnextContext(); return ctx_r147.preservedWeightValues.set(element_r143, $event); });
    i0.ɵɵelementStart(3, "div", 14);
    i0.ɵɵelementStart(4, "mat-form-field");
    i0.ɵɵelement(5, "input", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r143 = ctx.$implicit;
    const ctx_r132 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r132.preservedWeightValues.get(element_r143));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", element_r143.weight);
} }
function PopoverEditTabOutMatTableExample_th_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 16);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function PopoverEditTabOutMatTableExample_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r148 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r148.position, " ");
} }
function PopoverEditTabOutMatTableExample_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 16);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function PopoverEditTabOutMatTableExample_td_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r156 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "form", 12, 13);
    i0.ɵɵlistener("ngSubmit", function PopoverEditTabOutMatTableExample_td_8_ng_template_2_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r156); const _r153 = i0.ɵɵreference(2); const element_r149 = i0.ɵɵnextContext().$implicit; const ctx_r154 = i0.ɵɵnextContext(); return ctx_r154.onSubmitName(element_r149, _r153); })("matEditLensPreservedFormValueChange", function PopoverEditTabOutMatTableExample_td_8_ng_template_2_Template_form_matEditLensPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r156); const element_r149 = i0.ɵɵnextContext().$implicit; const ctx_r157 = i0.ɵɵnextContext(); return ctx_r157.preservedNameValues.set(element_r149, $event); });
    i0.ɵɵelementStart(3, "div", 14);
    i0.ɵɵelementStart(4, "mat-form-field");
    i0.ɵɵelement(5, "input", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r149 = i0.ɵɵnextContext().$implicit;
    const ctx_r151 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matEditLensPreservedFormValue", ctx_r151.preservedNameValues.get(element_r149));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", element_r149.name);
} }
function PopoverEditTabOutMatTableExample_td_8_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PopoverEditTabOutMatTableExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditTabOutMatTableExample_td_8_ng_template_2_Template, 6, 2, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, PopoverEditTabOutMatTableExample_td_8_span_4_Template, 3, 0, "span", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r149 = ctx.$implicit;
    const _r150 = i0.ɵɵreference(3);
    i0.ɵɵproperty("matPopoverEdit", _r150);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r149.name, " ");
} }
function PopoverEditTabOutMatTableExample_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 16);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function PopoverEditTabOutMatTableExample_td_11_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PopoverEditTabOutMatTableExample_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 22);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, PopoverEditTabOutMatTableExample_td_11_span_2_Template, 3, 0, "span", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r160 = ctx.$implicit;
    i0.ɵɵnextContext();
    const _r131 = i0.ɵɵreference(2);
    i0.ɵɵproperty("matPopoverEdit", _r131)("matPopoverEditContext", element_r160);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r160.weight, " ");
} }
function PopoverEditTabOutMatTableExample_th_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 16);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function PopoverEditTabOutMatTableExample_td_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r162 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r162.symbol, " ");
} }
function PopoverEditTabOutMatTableExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 23);
} }
function PopoverEditTabOutMatTableExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 24);
} }
/**
 * @record
 */
export function PeriodicElement() { }
if (false) {
    /** @type {?} */
    PeriodicElement.prototype.name;
    /** @type {?} */
    PeriodicElement.prototype.position;
    /** @type {?} */
    PeriodicElement.prototype.weight;
    /** @type {?} */
    PeriodicElement.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
/**
 * \@title Material Popover Edit with spreadsheet-like configuration on a Material data-table
 */
export class PopoverEditTabOutMatTableExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource();
        this.preservedNameValues = new WeakMap();
        this.preservedWeightValues = new WeakMap();
    }
    /**
     * @param {?} element
     * @param {?} f
     * @return {?}
     */
    onSubmitName(element, f) {
        if (!f.valid) {
            return;
        }
        element.name = f.value.name;
    }
    /**
     * @param {?} element
     * @param {?} f
     * @return {?}
     */
    onSubmitWeight(element, f) {
        if (!f.valid) {
            return;
        }
        element.weight = f.value.weight;
    }
}
PopoverEditTabOutMatTableExample.decorators = [
    { type: Component, args: [{
                selector: 'popover-edit-tab-out-mat-table-example',
                styleUrls: ['popover-edit-tab-out-mat-table-example.css'],
                templateUrl: 'popover-edit-tab-out-mat-table-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */ PopoverEditTabOutMatTableExample.ɵfac = function PopoverEditTabOutMatTableExample_Factory(t) { return new (t || PopoverEditTabOutMatTableExample)(); };
/** @nocollapse */ PopoverEditTabOutMatTableExample.ɵcmp = i0.ɵɵdefineComponent({ type: PopoverEditTabOutMatTableExample, selectors: [["popover-edit-tab-out-mat-table-example"]], decls: 17, vars: 3, consts: [["mat-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", "matPopoverEditTabOut", "", "matEditOpen", "", 3, "matPopoverEdit", 4, "matCellDef"], ["matColumnDef", "weight"], ["mat-cell", "", "matPopoverEditTabOut", "", "matEditOpen", "", 3, "matPopoverEdit", "matPopoverEditContext", 4, "matCellDef"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matEditLens", "", "matEditLensClickOutBehavior", "submit", 3, "matEditLensPreservedFormValue", "ngSubmit", "matEditLensPreservedFormValueChange"], ["f", "ngForm"], ["mat-edit-content", ""], ["matInput", "", "type", "number", "name", "weight", "required", "", 3, "ngModel"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", "matPopoverEditTabOut", "", "matEditOpen", "", 3, "matPopoverEdit"], ["nameEdit", ""], [4, "matRowHoverContent"], ["matInput", "", "name", "name", "required", "", 3, "ngModel"], ["mat-cell", "", "matPopoverEditTabOut", "", "matEditOpen", "", 3, "matPopoverEdit", "matPopoverEditContext"], ["mat-header-row", ""], ["mat-row", ""]], template: function PopoverEditTabOutMatTableExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵtemplate(1, PopoverEditTabOutMatTableExample_ng_template_1_Template, 6, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementContainerStart(3, 2);
        i0.ɵɵtemplate(4, PopoverEditTabOutMatTableExample_th_4_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(5, PopoverEditTabOutMatTableExample_td_5_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(6, 5);
        i0.ɵɵtemplate(7, PopoverEditTabOutMatTableExample_th_7_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(8, PopoverEditTabOutMatTableExample_td_8_Template, 5, 2, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(9, 7);
        i0.ɵɵtemplate(10, PopoverEditTabOutMatTableExample_th_10_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(11, PopoverEditTabOutMatTableExample_td_11_Template, 3, 3, "td", 8);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(12, 9);
        i0.ɵɵtemplate(13, PopoverEditTabOutMatTableExample_th_13_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(14, PopoverEditTabOutMatTableExample_td_14_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(15, PopoverEditTabOutMatTableExample_tr_15_Template, 1, 0, "tr", 10);
        i0.ɵɵtemplate(16, PopoverEditTabOutMatTableExample_tr_16_Template, 1, 0, "tr", 11);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(15);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i2.CdkEditable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i4.MatEditLens, i5.MatFormField, i6.MatInput, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i1.MatHeaderCell, i1.MatCell, i4.MatEditOpen, i4.MatPopoverEditTabOut, i4.MatRowHoverContent, i7.MatIcon, i1.MatHeaderRow, i1.MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 25%;\n}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PopoverEditTabOutMatTableExample, [{
        type: Component,
        args: [{
                selector: 'popover-edit-tab-out-mat-table-example',
                styleUrls: ['popover-edit-tab-out-mat-table-example.css'],
                templateUrl: 'popover-edit-tab-out-mat-table-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    PopoverEditTabOutMatTableExample.prototype.displayedColumns;
    /** @type {?} */
    PopoverEditTabOutMatTableExample.prototype.dataSource;
    /** @type {?} */
    PopoverEditTabOutMatTableExample.prototype.preservedNameValues;
    /** @type {?} */
    PopoverEditTabOutMatTableExample.prototype.preservedWeightValues;
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource {
    constructor() {
        super(...arguments);
        /**
         * Stream of data that is provided to the table.
         */
        this.data = new BehaviorSubject(ELEMENT_DATA);
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    connect() {
        return this.data;
    }
    /**
     * @return {?}
     */
    disconnect() { }
}
if (false) {
    /**
     * Stream of data that is provided to the table.
     * @type {?}
     */
    ExampleDataSource.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1lZGl0LXRhYi1vdXQtbWF0LXRhYmxlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvcG9wb3Zlci1lZGl0L3BvcG92ZXItZWRpdC10YWItb3V0LW1hdC10YWJsZS9wb3BvdmVyLWVkaXQtdGFiLW91dC1tYXQtdGFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvcG9wb3Zlci1lZGl0LXRhYi1vdXQtbWF0LXRhYmxlL3BvcG92ZXItZWRpdC10YWItb3V0LW1hdC10YWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUVwRCxPQUFPLEVBQUMsZUFBZSxFQUFhLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7OztJQ0c3QywyQkFDRTtJQUFBLG9DQU1FO0lBSEUsa1RBQXVDLGdSQUVBLHdEQUEwQyxJQUYxQztJQUd6QywrQkFDRTtJQUFBLHNDQUNFO0lBQUEsNEJBQ0Y7SUFBQSxpQkFBaUI7SUFDbkIsaUJBQU07SUFDUixpQkFBTztJQUNULGlCQUFNOzs7O0lBUkEsZUFBb0U7SUFBcEUsZ0dBQW9FO0lBSXBDLGVBQTBCO0lBQTFCLDZDQUEwQjs7O0lBU2hFLDhCQUF1QztJQUFBLHFCQUFJO0lBQUEsaUJBQUs7OztJQUNoRCw4QkFBd0M7SUFBQSxZQUFxQjtJQUFBLGlCQUFLOzs7SUFBMUIsZUFBcUI7SUFBckIsc0RBQXFCOzs7SUFLN0QsOEJBQXVDO0lBQUEsc0JBQUs7SUFBQSxpQkFBSzs7OztJQVE3QywyQkFDRTtJQUFBLG9DQU1FO0lBSEUsb1VBQXFDLG9TQUVFLHNEQUF3QyxJQUYxQztJQUd2QywrQkFDRTtJQUFBLHNDQUNFO0lBQUEsNEJBQ0Y7SUFBQSxpQkFBaUI7SUFDbkIsaUJBQU07SUFDUixpQkFBTztJQUNULGlCQUFNOzs7O0lBUkEsZUFBa0U7SUFBbEUsOEZBQWtFO0lBSWhELGVBQXdCO0lBQXhCLDJDQUF3Qjs7O0lBT2xELDRCQUNFO0lBQUEsZ0NBQVU7SUFBQSxvQkFBSTtJQUFBLGlCQUFXO0lBQzNCLGlCQUFPOzs7SUF6QlQsOEJBR0U7SUFBQSxZQUVBO0lBQ0Esd0lBQ0U7SUFnQkYseUZBQ0U7SUFFSixpQkFBSzs7OztJQXpCRCxzQ0FBMkI7SUFFN0IsZUFFQTtJQUZBLGtEQUVBOzs7SUEwQkYsOEJBQXVDO0lBQUEsd0JBQU87SUFBQSxpQkFBSzs7O0lBT2pELDRCQUNFO0lBQUEsZ0NBQVU7SUFBQSxvQkFBSTtJQUFBLGlCQUFXO0lBQzNCLGlCQUFPOzs7SUFSVCw4QkFJRTtJQUFBLFlBRUE7SUFBQSwwRkFDRTtJQUVKLGlCQUFLOzs7OztJQVJELHNDQUE2Qix1Q0FBQTtJQUcvQixlQUVBO0lBRkEsb0RBRUE7OztJQVFGLDhCQUF1QztJQUFBLHdCQUFPO0lBQUEsaUJBQUs7OztJQUNuRCw4QkFBd0M7SUFBQSxZQUFtQjtJQUFBLGlCQUFLOzs7SUFBeEIsZUFBbUI7SUFBbkIsb0RBQW1COzs7SUFHN0QseUJBQTREOzs7SUFDNUQseUJBQWtFOzs7OztBRDdFcEUscUNBS0M7OztJQUpDLCtCQUFhOztJQUNiLG1DQUFpQjs7SUFDakIsaUNBQWU7O0lBQ2YsaUNBQWU7OztNQUdYLFlBQVksR0FBc0I7SUFDdEMsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzVELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUN6RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcs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LGdDQUFnQztjQU41QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdDQUF3QztnQkFDbEQsU0FBUyxFQUFFLENBQUMsNENBQTRDLENBQUM7Z0JBQ3pELFdBQVcsRUFBRSw2Q0FBNkM7Z0JBQzFELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O0lBRUMsNERBQXNFOztJQUN0RSxzREFBcUM7O0lBRXJDLCtEQUFtRTs7SUFDbkUsaUVBQXFFOzs7Ozs7Ozs7QUFzQnZFLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUEyQjtJQUFsRTs7Ozs7UUFFRSxTQUFJLEdBQUcsSUFBSSxlQUFlLENBQW9CLFlBQVksQ0FBQyxDQUFDO0lBUTlELENBQUM7Ozs7O0lBTEMsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsVUFBVSxLQUFJLENBQUM7Q0FDaEI7Ozs7OztJQVJDLGlDQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge05nRm9ybX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xufVxuXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7cG9zaXRpb246IDEsIG5hbWU6ICdIeWRyb2dlbicsIHdlaWdodDogMS4wMDc5LCBzeW1ib2w6ICdIJ30sXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZSd9LFxuICB7cG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknfSxcbiAge3Bvc2l0aW9uOiA0LCBuYW1lOiAnQmVyeWxsaXVtJywgd2VpZ2h0OiA5LjAxMjIsIHN5bWJvbDogJ0JlJ30sXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InfSxcbiAge3Bvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJ30sXG4gIHtwb3NpdGlvbjogNywgbmFtZTogJ05pdHJvZ2VuJywgd2VpZ2h0OiAxNC4wMDY3LCBzeW1ib2w6ICdOJ30sXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTyd9LFxuICB7cG9zaXRpb246IDksIG5hbWU6ICdGbHVvcmluZScsIHdlaWdodDogMTguOTk4NCwgc3ltYm9sOiAnRid9LFxuICB7cG9zaXRpb246IDEwLCBuYW1lOiAnTmVvbicsIHdlaWdodDogMjAuMTc5Nywgc3ltYm9sOiAnTmUnfSxcbiAge3Bvc2l0aW9uOiAxMSwgbmFtZTogJ1NvZGl1bScsIHdlaWdodDogMjIuOTg5Nywgc3ltYm9sOiAnTmEnfSxcbiAge3Bvc2l0aW9uOiAxMiwgbmFtZTogJ01hZ25lc2l1bScsIHdlaWdodDogMjQuMzA1LCBzeW1ib2w6ICdNZyd9LFxuICB7cG9zaXRpb246IDEzLCBuYW1lOiAnQWx1bWludW0nLCB3ZWlnaHQ6IDI2Ljk4MTUsIHN5bWJvbDogJ0FsJ30sXG4gIHtwb3NpdGlvbjogMTQsIG5hbWU6ICdTaWxpY29uJywgd2VpZ2h0OiAyOC4wODU1LCBzeW1ib2w6ICdTaSd9LFxuICB7cG9zaXRpb246IDE1LCBuYW1lOiAnUGhvc3Bob3J1cycsIHdlaWdodDogMzAuOTczOCwgc3ltYm9sOiAnUCd9LFxuICB7cG9zaXRpb246IDE2LCBuYW1lOiAnU3VsZnVyJywgd2VpZ2h0OiAzMi4wNjUsIHN5bWJvbDogJ1MnfSxcbiAge3Bvc2l0aW9uOiAxNywgbmFtZTogJ0NobG9yaW5lJywgd2VpZ2h0OiAzNS40NTMsIHN5bWJvbDogJ0NsJ30sXG4gIHtwb3NpdGlvbjogMTgsIG5hbWU6ICdBcmdvbicsIHdlaWdodDogMzkuOTQ4LCBzeW1ib2w6ICdBcid9LFxuICB7cG9zaXRpb246IDE5LCBuYW1lOiAnUG90YXNzaXVtJywgd2VpZ2h0OiAzOS4wOTgzLCBzeW1ib2w6ICdLJ30sXG4gIHtwb3NpdGlvbjogMjAsIG5hbWU6ICdDYWxjaXVtJywgd2VpZ2h0OiA0MC4wNzgsIHN5bWJvbDogJ0NhJ30sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBNYXRlcmlhbCBQb3BvdmVyIEVkaXQgd2l0aCBzcHJlYWRzaGVldC1saWtlIGNvbmZpZ3VyYXRpb24gb24gYSBNYXRlcmlhbCBkYXRhLXRhYmxlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BvcG92ZXItZWRpdC10YWItb3V0LW1hdC10YWJsZS1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3BvcG92ZXItZWRpdC10YWItb3V0LW1hdC10YWJsZS1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3BvcG92ZXItZWRpdC10YWItb3V0LW1hdC10YWJsZS1leGFtcGxlLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUG9wb3ZlckVkaXRUYWJPdXRNYXRUYWJsZUV4YW1wbGUge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsncG9zaXRpb24nLCAnbmFtZScsICd3ZWlnaHQnLCAnc3ltYm9sJ107XG4gIGRhdGFTb3VyY2UgPSBuZXcgRXhhbXBsZURhdGFTb3VyY2UoKTtcblxuICByZWFkb25seSBwcmVzZXJ2ZWROYW1lVmFsdWVzID0gbmV3IFdlYWtNYXA8UGVyaW9kaWNFbGVtZW50LCBhbnk+KCk7XG4gIHJlYWRvbmx5IHByZXNlcnZlZFdlaWdodFZhbHVlcyA9IG5ldyBXZWFrTWFwPFBlcmlvZGljRWxlbWVudCwgYW55PigpO1xuXG4gIG9uU3VibWl0TmFtZShlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQsIGY6IE5nRm9ybSkge1xuICAgIGlmICghZi52YWxpZCkgeyByZXR1cm47IH1cblxuICAgIGVsZW1lbnQubmFtZSA9IGYudmFsdWUubmFtZTtcbiAgfVxuXG4gIG9uU3VibWl0V2VpZ2h0KGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCwgZjogTmdGb3JtKSB7XG4gICAgaWYgKCFmLnZhbGlkKSB7IHJldHVybjsgfVxuXG4gICAgZWxlbWVudC53ZWlnaHQgPSBmLnZhbHVlLndlaWdodDtcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgc291cmNlIHRvIHByb3ZpZGUgd2hhdCBkYXRhIHNob3VsZCBiZSByZW5kZXJlZCBpbiB0aGUgdGFibGUuIE5vdGUgdGhhdCB0aGUgZGF0YSBzb3VyY2VcbiAqIGNhbiByZXRyaWV2ZSBpdHMgZGF0YSBpbiBhbnkgd2F5LiBJbiB0aGlzIGNhc2UsIHRoZSBkYXRhIHNvdXJjZSBpcyBwcm92aWRlZCBhIHJlZmVyZW5jZVxuICogdG8gYSBjb21tb24gZGF0YSBiYXNlLCBFeGFtcGxlRGF0YWJhc2UuIEl0IGlzIG5vdCB0aGUgZGF0YSBzb3VyY2UncyByZXNwb25zaWJpbGl0eSB0byBtYW5hZ2VcbiAqIHRoZSB1bmRlcmx5aW5nIGRhdGEuIEluc3RlYWQsIGl0IG9ubHkgbmVlZHMgdG8gdGFrZSB0aGUgZGF0YSBhbmQgc2VuZCB0aGUgdGFibGUgZXhhY3RseSB3aGF0XG4gKiBzaG91bGQgYmUgcmVuZGVyZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBFeGFtcGxlRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2U8UGVyaW9kaWNFbGVtZW50PiB7XG4gIC8qKiBTdHJlYW0gb2YgZGF0YSB0aGF0IGlzIHByb3ZpZGVkIHRvIHRoZSB0YWJsZS4gKi9cbiAgZGF0YSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UGVyaW9kaWNFbGVtZW50W10+KEVMRU1FTlRfREFUQSk7XG5cbiAgLyoqIENvbm5lY3QgZnVuY3Rpb24gY2FsbGVkIGJ5IHRoZSB0YWJsZSB0byByZXRyaWV2ZSBvbmUgc3RyZWFtIGNvbnRhaW5pbmcgdGhlIGRhdGEgdG8gcmVuZGVyLiAqL1xuICBjb25uZWN0KCk6IE9ic2VydmFibGU8UGVyaW9kaWNFbGVtZW50W10+IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpIHt9XG59XG4iLCI8dGFibGUgY2xhc3M9XCJleGFtcGxlLXRhYmxlXCIgbWF0LXRhYmxlIGVkaXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIj5cbiAgPCEtLVxuICAgIFRoaXMgZWRpdCBsZW5zIGlzIHNwZWNpZmllZCBvdXRzaWRlIG9mIHRoZSBjZWxsIGFuZCBtdXN0IGV4cGxpY2l0bHkgZGVjbGFyZVxuICAgIGl0cyBjb250ZXh0LiBJdCBjb3VsZCBiZSByZXVzZWQgaW4gbXVsdGlwbGUgY2VsbHMuXG4gIC0tPlxuICA8bmctdGVtcGxhdGUgI3dlaWdodEVkaXQgbGV0LWVsZW1lbnQ+XG4gICAgPGRpdj5cbiAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICBtYXRFZGl0TGVuc1xuICAgICAgICAgIG1hdEVkaXRMZW5zQ2xpY2tPdXRCZWhhdmlvcj1cInN1Ym1pdFwiXG4gICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0V2VpZ2h0KGVsZW1lbnQsIGYpXCJcbiAgICAgICAgICBbbWF0RWRpdExlbnNQcmVzZXJ2ZWRGb3JtVmFsdWVdPVwicHJlc2VydmVkV2VpZ2h0VmFsdWVzLmdldChlbGVtZW50KVwiXG4gICAgICAgICAgKG1hdEVkaXRMZW5zUHJlc2VydmVkRm9ybVZhbHVlQ2hhbmdlKT1cInByZXNlcnZlZFdlaWdodFZhbHVlcy5zZXQoZWxlbWVudCwgJGV2ZW50KVwiPlxuICAgICAgICA8ZGl2IG1hdC1lZGl0LWNvbnRlbnQ+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBbbmdNb2RlbF09XCJlbGVtZW50LndlaWdodFwiIG5hbWU9XCJ3ZWlnaHRcIiByZXF1aXJlZD5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuICA8IS0tIFBvc2l0aW9uIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJwb3NpdGlvblwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IE5vLiA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5wb3NpdGlvbn19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gTmFtZSBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwibmFtZVwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IE5hbWUgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdF09XCJuYW1lRWRpdFwiIG1hdFBvcG92ZXJFZGl0VGFiT3V0XG4gICAgICAgIG1hdEVkaXRPcGVuPlxuICAgICAge3tlbGVtZW50Lm5hbWV9fVxuICAgICAgXG4gICAgICA8IS0tIFRoaXMgZWRpdCBpcyBkZWZpbmVkIGluIHRoZSBjZWxsIGFuZCBjYW4gaW1wbGljaXRseSBhY2Nlc3MgZWxlbWVudCAtLT5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjbmFtZUVkaXQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxuICAgICAgICAgICAgICBtYXRFZGl0TGVuc1xuICAgICAgICAgICAgICBtYXRFZGl0TGVuc0NsaWNrT3V0QmVoYXZpb3I9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAobmdTdWJtaXQpPVwib25TdWJtaXROYW1lKGVsZW1lbnQsIGYpXCJcbiAgICAgICAgICAgICAgW21hdEVkaXRMZW5zUHJlc2VydmVkRm9ybVZhbHVlXT1cInByZXNlcnZlZE5hbWVWYWx1ZXMuZ2V0KGVsZW1lbnQpXCJcbiAgICAgICAgICAgICAgKG1hdEVkaXRMZW5zUHJlc2VydmVkRm9ybVZhbHVlQ2hhbmdlKT1cInByZXNlcnZlZE5hbWVWYWx1ZXMuc2V0KGVsZW1lbnQsICRldmVudClcIj5cbiAgICAgICAgICAgIDxkaXYgbWF0LWVkaXQtY29udGVudD5cbiAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbmdNb2RlbF09XCJlbGVtZW50Lm5hbWVcIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICAgIDxzcGFuICptYXRSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFdlaWdodCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwid2VpZ2h0XCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gV2VpZ2h0IDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRdPVwid2VpZ2h0RWRpdFwiIG1hdFBvcG92ZXJFZGl0VGFiT3V0XG4gICAgICAgIFttYXRQb3BvdmVyRWRpdENvbnRleHRdPVwiZWxlbWVudFwiXG4gICAgICAgIG1hdEVkaXRPcGVuPlxuICAgICAge3tlbGVtZW50LndlaWdodH19XG4gICAgICBcbiAgICAgIDxzcGFuICptYXRSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFN5bWJvbCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic3ltYm9sXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gU3ltYm9sIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnN5bWJvbH19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XG48L3RhYmxlPlxuIl19