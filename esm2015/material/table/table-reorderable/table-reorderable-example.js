/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/table/table-reorderable/table-reorderable-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/cdk/drag-drop";
function TableReorderableExample_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function TableReorderableExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r351 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r351.position, " ");
} }
function TableReorderableExample_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableReorderableExample_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r352 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r352.name, " ");
} }
function TableReorderableExample_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function TableReorderableExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r353 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r353.weight, " ");
} }
function TableReorderableExample_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function TableReorderableExample_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r354 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r354.symbol, " ");
} }
function TableReorderableExample_tr_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 11);
} }
function TableReorderableExample_tr_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 12);
} }
/**
 * \@title Table with re-orderable columns
 */
export class TableReorderableExample {
    constructor() {
        this.columns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    }
}
TableReorderableExample.decorators = [
    { type: Component, args: [{
                selector: 'table-reorderable-example',
                templateUrl: './table-reorderable-example.html',
                styleUrls: ['./table-reorderable-example.css']
            },] },
];
/** @nocollapse */ TableReorderableExample.ɵfac = function TableReorderableExample_Factory(t) { return new (t || TableReorderableExample)(); };
/** @nocollapse */ TableReorderableExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableReorderableExample, selectors: [["table-reorderable-example"]], decls: 15, vars: 3, consts: [["mat-table", "", "cdkDropList", "", "cdkDropListOrientation", "horizontal", 3, "dataSource", "cdkDropListDropped"], ["matColumnDef", "position"], ["mat-header-cell", "", "cdkDrag", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "cdkDrag", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableReorderableExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵlistener("cdkDropListDropped", function TableReorderableExample_Template_table_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, TableReorderableExample_th_2_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(3, TableReorderableExample_td_3_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(4, 4);
        i0.ɵɵtemplate(5, TableReorderableExample_th_5_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(6, TableReorderableExample_td_6_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(7, 5);
        i0.ɵɵtemplate(8, TableReorderableExample_th_8_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(9, TableReorderableExample_td_9_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(10, 6);
        i0.ɵɵtemplate(11, TableReorderableExample_th_11_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(12, TableReorderableExample_td_12_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(13, TableReorderableExample_tr_13_Template, 1, 0, "tr", 7);
        i0.ɵɵtemplate(14, TableReorderableExample_tr_14_Template, 1, 0, "tr", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.columns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.columns);
    } }, directives: [i1.MatTable, i2.CdkDropList, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCell, i2.CdkDrag, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableReorderableExample, [{
        type: Component,
        args: [{
                selector: 'table-reorderable-example',
                templateUrl: './table-reorderable-example.html',
                styleUrls: ['./table-reorderable-example.css']
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableReorderableExample.prototype.columns;
    /** @type {?} */
    TableReorderableExample.prototype.dataSource;
}
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
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcmVvcmRlcmFibGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLXJlb3JkZXJhYmxlL3RhYmxlLXJlb3JkZXJhYmxlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1yZW9yZGVyYWJsZS90YWJsZS1yZW9yZGVyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBYyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7SUNNaEUsNkJBQStDO0lBQUEscUJBQUk7SUFBQSxpQkFBSzs7O0lBQ3hELDhCQUF3QztJQUFBLFlBQXFCO0lBQUEsaUJBQUs7OztJQUExQixlQUFxQjtJQUFyQixzREFBcUI7OztJQUk3RCw2QkFBK0M7SUFBQSxzQkFBSztJQUFBLGlCQUFLOzs7SUFDekQsOEJBQXdDO0lBQUEsWUFBaUI7SUFBQSxpQkFBSzs7O0lBQXRCLGVBQWlCO0lBQWpCLGtEQUFpQjs7O0lBSXpELDZCQUErQztJQUFBLHdCQUFPO0lBQUEsaUJBQUs7OztJQUMzRCw4QkFBd0M7SUFBQSxZQUFtQjtJQUFBLGlCQUFLOzs7SUFBeEIsZUFBbUI7SUFBbkIsb0RBQW1COzs7SUFJM0QsNkJBQStDO0lBQUEsd0JBQU87SUFBQSxpQkFBSzs7O0lBQzNELDhCQUF3QztJQUFBLFlBQW1CO0lBQUEsaUJBQUs7OztJQUF4QixlQUFtQjtJQUFuQixvREFBbUI7OztJQUc3RCx5QkFBbUQ7OztJQUNuRCx5QkFBeUQ7Ozs7O0FEaEIzRCxNQUFNLE9BQU8sdUJBQXVCO0lBTHBDO1FBTUUsWUFBTyxHQUFhLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0QsZUFBVSxHQUFHLFlBQVksQ0FBQztLQUszQjs7Ozs7SUFIQyxJQUFJLENBQUMsS0FBNEI7UUFDL0IsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekUsQ0FBQzs7O1lBWEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DOzs4RkFDWSx1QkFBdUI7NERBQXZCLHVCQUF1QjtRQ1hwQyxnQ0FNRTtRQUZLLG1JQUFzQixnQkFBWSxJQUFDO1FBRXhDLGdDQUNFO1FBQUEsc0VBQStDO1FBQy9DLHNFQUF3QztRQUMxQywwQkFBZTtRQUVmLGdDQUNFO1FBQUEsc0VBQStDO1FBQy9DLHNFQUF3QztRQUMxQywwQkFBZTtRQUVmLGdDQUNFO1FBQUEsc0VBQStDO1FBQy9DLHNFQUF3QztRQUMxQywwQkFBZTtRQUVmLGlDQUNFO1FBQUEsd0VBQStDO1FBQy9DLHdFQUF3QztRQUMxQywwQkFBZTtRQUVmLHdFQUE4QztRQUM5Qyx3RUFBb0Q7UUFDdEQsaUJBQVE7O1FBM0JELDJDQUF5QjtRQXlCWCxnQkFBMEI7UUFBMUIsNkNBQTBCO1FBQ2pDLGVBQXVDO1FBQXZDLDhDQUF1Qzs7a0REaEJ4Qyx1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DOzs7O0lBRUMsMENBQTZEOztJQUM3RCw2Q0FBMEI7Ozs7O0FBTzVCLHFDQUtDOzs7SUFKQywrQkFBYTs7SUFDYixtQ0FBaUI7O0lBQ2pCLGlDQUFlOztJQUNmLGlDQUFlOzs7TUFHWCxZQUFZLEdBQXNCO0lBQ3RDLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM1RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDekQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztDQUM1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5cbi8qKlxuICogQHRpdGxlIFRhYmxlIHdpdGggcmUtb3JkZXJhYmxlIGNvbHVtbnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtcmVvcmRlcmFibGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS1yZW9yZGVyYWJsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS1yZW9yZGVyYWJsZS1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlUmVvcmRlcmFibGVFeGFtcGxlIHtcbiAgY29sdW1uczogc3RyaW5nW10gPSBbJ3Bvc2l0aW9uJywgJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCddO1xuICBkYXRhU291cmNlID0gRUxFTUVOVF9EQVRBO1xuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLmNvbHVtbnMsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxuICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnfSxcbiAge3Bvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJ30sXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxuICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHdlaWdodDogMTAuODExLCBzeW1ib2w6ICdCJ30sXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQyd9LFxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxuICB7cG9zaXRpb246IDgsIG5hbWU6ICdPeHlnZW4nLCB3ZWlnaHQ6IDE1Ljk5OTQsIHN5bWJvbDogJ08nfSxcbiAge3Bvc2l0aW9uOiA5LCBuYW1lOiAnRmx1b3JpbmUnLCB3ZWlnaHQ6IDE4Ljk5ODQsIHN5bWJvbDogJ0YnfSxcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXG5dO1xuIiwiPHRhYmxlIG1hdC10YWJsZVxuICAgICAgIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBcbiAgICAgICBjZGtEcm9wTGlzdFxuICAgICAgIGNka0Ryb3BMaXN0T3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcbiAgICAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxuXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwicG9zaXRpb25cIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsIGNka0RyYWcgKm1hdEhlYWRlckNlbGxEZWY+IE5vLiA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5wb3NpdGlvbn19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwibmFtZVwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgY2RrRHJhZyAqbWF0SGVhZGVyQ2VsbERlZj4gTmFtZSA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5uYW1lfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ3ZWlnaHRcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsIGNka0RyYWcgKm1hdEhlYWRlckNlbGxEZWY+IFdlaWdodCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC53ZWlnaHR9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInN5bWJvbFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgY2RrRHJhZyAqbWF0SGVhZGVyQ2VsbERlZj4gU3ltYm9sIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnN5bWJvbH19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiY29sdW1uc1wiPjwvdHI+XG4gIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBjb2x1bW5zO1wiPjwvdHI+XG48L3RhYmxlPlxuIl19