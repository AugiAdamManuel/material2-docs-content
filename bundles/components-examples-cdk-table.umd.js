(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/table'), require('@angular/core'), require('tslib'), require('@angular/cdk/collections'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk/table', ['exports', '@angular/cdk/table', '@angular/core', 'tslib', '@angular/cdk/collections', 'rxjs'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdk = global.ng.componentsExamples.cdk || {}, global.ng.componentsExamples.cdk.table = {}), global.ng.cdk.table, global.ng.core, global.tslib, global.ng.cdk.collections, global.rxjs));
}(this, (function (exports, i1, i0, tslib, collections, rxjs) { 'use strict';

    function CdkTableBasicFlexExample_cdk_header_cell_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-header-cell");
        i0.ɵɵtext(1, " No. ");
        i0.ɵɵelementEnd();
    } }
    function CdkTableBasicFlexExample_cdk_cell_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-cell");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r10 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r10.position, " ");
    } }
    function CdkTableBasicFlexExample_cdk_header_cell_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-header-cell");
        i0.ɵɵtext(1, " Name ");
        i0.ɵɵelementEnd();
    } }
    function CdkTableBasicFlexExample_cdk_cell_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-cell");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r11 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r11.name, " ");
    } }
    function CdkTableBasicFlexExample_cdk_header_cell_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-header-cell");
        i0.ɵɵtext(1, " Weight ");
        i0.ɵɵelementEnd();
    } }
    function CdkTableBasicFlexExample_cdk_cell_9_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-cell");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r12 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
    } }
    function CdkTableBasicFlexExample_cdk_header_cell_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-header-cell");
        i0.ɵɵtext(1, " Symbol ");
        i0.ɵɵelementEnd();
    } }
    function CdkTableBasicFlexExample_cdk_cell_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-cell");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r13 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
    } }
    function CdkTableBasicFlexExample_cdk_header_row_13_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "cdk-header-row");
    } }
    function CdkTableBasicFlexExample_cdk_row_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "cdk-row");
    } }
    var ELEMENT_DATA = [
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
    /**
     * @title Basic use of `<cdk-table>` (uses display flex)
     */
    var CdkTableBasicFlexExample = /** @class */ (function () {
        function CdkTableBasicFlexExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new ExampleDataSource();
        }
        CdkTableBasicFlexExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cdk-table-basic-flex-example',
                        styleUrls: ['cdk-table-basic-flex-example.css'],
                        templateUrl: 'cdk-table-basic-flex-example.html',
                    },] },
        ];
        CdkTableBasicFlexExample.ɵfac = function CdkTableBasicFlexExample_Factory(t) { return new (t || CdkTableBasicFlexExample)(); };
        CdkTableBasicFlexExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkTableBasicFlexExample, selectors: [["cdk-table-basic-flex-example"]], decls: 15, vars: 3, consts: [[3, "dataSource"], ["cdkColumnDef", "position"], [4, "cdkHeaderCellDef"], [4, "cdkCellDef"], ["cdkColumnDef", "name"], ["cdkColumnDef", "weight"], ["cdkColumnDef", "symbol"], [4, "cdkHeaderRowDef"], [4, "cdkRowDef", "cdkRowDefColumns"]], template: function CdkTableBasicFlexExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "cdk-table", 0);
                i0.ɵɵelementContainerStart(1, 1);
                i0.ɵɵtemplate(2, CdkTableBasicFlexExample_cdk_header_cell_2_Template, 2, 0, "cdk-header-cell", 2);
                i0.ɵɵtemplate(3, CdkTableBasicFlexExample_cdk_cell_3_Template, 2, 1, "cdk-cell", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(4, 4);
                i0.ɵɵtemplate(5, CdkTableBasicFlexExample_cdk_header_cell_5_Template, 2, 0, "cdk-header-cell", 2);
                i0.ɵɵtemplate(6, CdkTableBasicFlexExample_cdk_cell_6_Template, 2, 1, "cdk-cell", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(7, 5);
                i0.ɵɵtemplate(8, CdkTableBasicFlexExample_cdk_header_cell_8_Template, 2, 0, "cdk-header-cell", 2);
                i0.ɵɵtemplate(9, CdkTableBasicFlexExample_cdk_cell_9_Template, 2, 1, "cdk-cell", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(10, 6);
                i0.ɵɵtemplate(11, CdkTableBasicFlexExample_cdk_header_cell_11_Template, 2, 0, "cdk-header-cell", 2);
                i0.ɵɵtemplate(12, CdkTableBasicFlexExample_cdk_cell_12_Template, 2, 1, "cdk-cell", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(13, CdkTableBasicFlexExample_cdk_header_row_13_Template, 1, 0, "cdk-header-row", 7);
                i0.ɵɵtemplate(14, CdkTableBasicFlexExample_cdk_row_14_Template, 1, 0, "cdk-row", 8);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(13);
                i0.ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
            } }, directives: [i1.CdkTable, i1.CdkColumnDef, i1.CdkHeaderCellDef, i1.CdkCellDef, i1.CdkHeaderRowDef, i1.CdkRowDef, i1.CdkHeaderCell, i1.CdkCell, i1.CdkHeaderRow, i1.CdkRow], styles: ["cdk-row[_ngcontent-%COMP%], cdk-header-row[_ngcontent-%COMP%], cdk-footer-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\ncdk-cell[_ngcontent-%COMP%], cdk-header-cell[_ngcontent-%COMP%], cdk-footer-cell[_ngcontent-%COMP%] {\n  flex: 1;\n}"] });
        return CdkTableBasicFlexExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkTableBasicFlexExample, [{
            type: i0.Component,
            args: [{
                    selector: 'cdk-table-basic-flex-example',
                    styleUrls: ['cdk-table-basic-flex-example.css'],
                    templateUrl: 'cdk-table-basic-flex-example.html',
                }]
        }], null, null); })();
    /**
     * Data source to provide what data should be rendered in the table. Note that the data source
     * can retrieve its data in any way. In this case, the data source is provided a reference
     * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
     * the underlying data. Instead, it only needs to take the data and send the table exactly what
     * should be rendered.
     */
    var ExampleDataSource = /** @class */ (function (_super) {
        tslib.__extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    function CdkTableBasicExample_th_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 9);
        i0.ɵɵtext(1, " No. ");
        i0.ɵɵelementEnd();
    } }
    function CdkTableBasicExample_td_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 10);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r25 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r25.position, " ");
    } }
    function CdkTableBasicExample_th_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 9);
        i0.ɵɵtext(1, " Name ");
        i0.ɵɵelementEnd();
    } }
    function CdkTableBasicExample_td_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 10);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r26 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r26.name, " ");
    } }
    function CdkTableBasicExample_th_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 9);
        i0.ɵɵtext(1, " Weight ");
        i0.ɵɵelementEnd();
    } }
    function CdkTableBasicExample_td_9_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 10);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r27 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r27.weight, " ");
    } }
    function CdkTableBasicExample_th_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "th", 9);
        i0.ɵɵtext(1, " Symbol ");
        i0.ɵɵelementEnd();
    } }
    function CdkTableBasicExample_td_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 10);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r28 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", element_r28.symbol, " ");
    } }
    function CdkTableBasicExample_tr_13_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 11);
    } }
    function CdkTableBasicExample_tr_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "tr", 12);
    } }
    var ELEMENT_DATA$1 = [
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
    /**
     * @title Basic CDK data-table
     */
    var CdkTableBasicExample = /** @class */ (function () {
        function CdkTableBasicExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new ExampleDataSource$1();
        }
        CdkTableBasicExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'cdk-table-basic-example',
                        styleUrls: ['cdk-table-basic-example.css'],
                        templateUrl: 'cdk-table-basic-example.html',
                    },] },
        ];
        CdkTableBasicExample.ɵfac = function CdkTableBasicExample_Factory(t) { return new (t || CdkTableBasicExample)(); };
        CdkTableBasicExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkTableBasicExample, selectors: [["cdk-table-basic-example"]], decls: 15, vars: 3, consts: [["cdk-table", "", 3, "dataSource"], ["cdkColumnDef", "position"], ["cdk-header-cell", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdkColumnDef", "name"], ["cdkColumnDef", "weight"], ["cdkColumnDef", "symbol"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], ["cdk-header-cell", ""], ["cdk-cell", ""], ["cdk-header-row", ""], ["cdk-row", ""]], template: function CdkTableBasicExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵelementContainerStart(1, 1);
                i0.ɵɵtemplate(2, CdkTableBasicExample_th_2_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(3, CdkTableBasicExample_td_3_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(4, 4);
                i0.ɵɵtemplate(5, CdkTableBasicExample_th_5_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(6, CdkTableBasicExample_td_6_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(7, 5);
                i0.ɵɵtemplate(8, CdkTableBasicExample_th_8_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(9, CdkTableBasicExample_td_9_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(10, 6);
                i0.ɵɵtemplate(11, CdkTableBasicExample_th_11_Template, 2, 0, "th", 2);
                i0.ɵɵtemplate(12, CdkTableBasicExample_td_12_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(13, CdkTableBasicExample_tr_13_Template, 1, 0, "tr", 7);
                i0.ɵɵtemplate(14, CdkTableBasicExample_tr_14_Template, 1, 0, "tr", 8);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(13);
                i0.ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
            } }, directives: [i1.CdkTable, i1.CdkColumnDef, i1.CdkHeaderCellDef, i1.CdkCellDef, i1.CdkHeaderRowDef, i1.CdkRowDef, i1.CdkHeaderCell, i1.CdkCell, i1.CdkHeaderRow, i1.CdkRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: left;\n}"] });
        return CdkTableBasicExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkTableBasicExample, [{
            type: i0.Component,
            args: [{
                    selector: 'cdk-table-basic-example',
                    styleUrls: ['cdk-table-basic-example.css'],
                    templateUrl: 'cdk-table-basic-example.html',
                }]
        }], null, null); })();
    /**
     * Data source to provide what data should be rendered in the table. Note that the data source
     * can retrieve its data in any way. In this case, the data source is provided a reference
     * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
     * the underlying data. Instead, it only needs to take the data and send the table exactly what
     * should be rendered.
     */
    var ExampleDataSource$1 = /** @class */ (function (_super) {
        tslib.__extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA$1);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    var EXAMPLES = [
        CdkTableBasicExample,
        CdkTableBasicFlexExample,
    ];
    var CdkTableExamplesModule = /** @class */ (function () {
        function CdkTableExamplesModule() {
        }
        CdkTableExamplesModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.CdkTableModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    },] },
        ];
        CdkTableExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkTableExamplesModule });
        CdkTableExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkTableExamplesModule_Factory(t) { return new (t || CdkTableExamplesModule)(); }, imports: [[
                    i1.CdkTableModule,
                ]] });
        return CdkTableExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkTableExamplesModule, { declarations: [CdkTableBasicExample,
            CdkTableBasicFlexExample], imports: [i1.CdkTableModule], exports: [CdkTableBasicExample,
            CdkTableBasicFlexExample] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkTableExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i1.CdkTableModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }], null, null); })();

    exports.CdkTableBasicExample = CdkTableBasicExample;
    exports.CdkTableBasicFlexExample = CdkTableBasicFlexExample;
    exports.CdkTableExamplesModule = CdkTableExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-table.umd.js.map
