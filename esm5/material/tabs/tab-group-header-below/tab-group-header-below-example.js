import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group with the headers on the bottom
 */
var TabGroupHeaderBelowExample = /** @class */ (function () {
    function TabGroupHeaderBelowExample() {
    }
    TabGroupHeaderBelowExample.ɵfac = function TabGroupHeaderBelowExample_Factory(t) { return new (t || TabGroupHeaderBelowExample)(); };
    TabGroupHeaderBelowExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupHeaderBelowExample, selectors: [["tab-group-header-below-example"]], decls: 7, vars: 0, consts: [["headerPosition", "below"], ["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupHeaderBelowExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-tab-group", 0);
            i0.ɵɵelementStart(1, "mat-tab", 1);
            i0.ɵɵtext(2, " Content 1 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-tab", 2);
            i0.ɵɵtext(4, " Content 2 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-tab", 3);
            i0.ɵɵtext(6, " Content 3 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatTabGroup, i1.MatTab], styles: [""] });
    return TabGroupHeaderBelowExample;
}());
export { TabGroupHeaderBelowExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupHeaderBelowExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-header-below-example',
                templateUrl: 'tab-group-header-below-example.html',
                styleUrls: ['tab-group-header-below-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWhlYWRlci1iZWxvdy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtaGVhZGVyLWJlbG93L3RhYi1ncm91cC1oZWFkZXItYmVsb3ctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWhlYWRlci1iZWxvdy90YWItZ3JvdXAtaGVhZGVyLWJlbG93LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO0tBSzBDO3dHQUE3QiwwQkFBMEI7bUVBQTFCLDBCQUEwQjtZQ1Z2Qyx3Q0FDRTtZQUFBLGtDQUF3QjtZQUFBLDJCQUFVO1lBQUEsaUJBQVU7WUFDNUMsa0NBQXlCO1lBQUEsMkJBQVU7WUFBQSxpQkFBVTtZQUM3QyxrQ0FBd0I7WUFBQSwyQkFBVTtZQUFBLGlCQUFVO1lBQzlDLGlCQUFnQjs7cUNESmhCO0NBVTBDLEFBTDFDLElBSzBDO1NBQTdCLDBCQUEwQjtrREFBMUIsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGFiIGdyb3VwIHdpdGggdGhlIGhlYWRlcnMgb24gdGhlIGJvdHRvbVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtaGVhZGVyLWJlbG93LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ncm91cC1oZWFkZXItYmVsb3ctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC1oZWFkZXItYmVsb3ctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBIZWFkZXJCZWxvd0V4YW1wbGUge31cbiIsIjxtYXQtdGFiLWdyb3VwIGhlYWRlclBvc2l0aW9uPVwiYmVsb3dcIj5cbiAgPG1hdC10YWIgbGFiZWw9XCJGaXJzdFwiPiBDb250ZW50IDEgPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlNlY29uZFwiPiBDb250ZW50IDIgPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlRoaXJkXCI+IENvbnRlbnQgMyA8L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+XG4iXX0=