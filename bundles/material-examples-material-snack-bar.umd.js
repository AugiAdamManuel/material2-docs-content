(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib'), require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/input'), require('@angular/material/select'), require('@angular/material/snack-bar')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/snack-bar', ['exports', 'tslib', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/input', '@angular/material/select', '@angular/material/snack-bar'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.snackBar = {}), global.tslib, global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.input, global.ng.material.select, global.ng.material['snack-bar']));
}(this, function (exports, tslib_1, core, forms, button, input, select, snackBar) { 'use strict';

    /**
     * @title Snack-bar with a custom component
     */
    var SnackBarComponentExample = /** @class */ (function () {
        function SnackBarComponentExample(_snackBar) {
            this._snackBar = _snackBar;
            this.durationInSeconds = 5;
        }
        SnackBarComponentExample.prototype.openSnackBar = function () {
            this._snackBar.openFromComponent(PizzaPartyComponent, {
                duration: this.durationInSeconds * 1000,
            });
        };
        SnackBarComponentExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'snack-bar-component-example',
                        template: "<mat-form-field>\n  <mat-label>Snack bar duration (seconds)</mat-label>\n  <input type=\"number\" [(ngModel)]=\"durationInSeconds\" matInput>\n</mat-form-field>\n\n<button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        /** @nocollapse */
        SnackBarComponentExample.ctorParameters = function () { return [
            { type: snackBar.MatSnackBar }
        ]; };
        return SnackBarComponentExample;
    }());
    var PizzaPartyComponent = /** @class */ (function () {
        function PizzaPartyComponent() {
        }
        PizzaPartyComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'snack-bar-component-example-snack',
                        template: "<span class=\"example-pizza-party\">\n  Pizza party!!! \uD83C\uDF55\n</span>\n",
                        styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "]
                    }] }
        ];
        return PizzaPartyComponent;
    }());

    /**
     * @title Basic snack-bar
     */
    var SnackBarOverviewExample = /** @class */ (function () {
        function SnackBarOverviewExample(_snackBar) {
            this._snackBar = _snackBar;
        }
        SnackBarOverviewExample.prototype.openSnackBar = function (message, action) {
            this._snackBar.open(message, action, {
                duration: 2000,
            });
        };
        SnackBarOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'snack-bar-overview-example',
                        template: "<mat-form-field>\n  <input matInput value=\"Disco party!\" placeholder=\"Message\" #message>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput value=\"Dance\" placeholder=\"Action\" #action>\n</mat-form-field>\n\n<button mat-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\n",
                        styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        SnackBarOverviewExample.ctorParameters = function () { return [
            { type: snackBar.MatSnackBar }
        ]; };
        return SnackBarOverviewExample;
    }());

    /**
     * @title Snack-bar with configurable position
     */
    var SnackBarPositionExample = /** @class */ (function () {
        function SnackBarPositionExample(_snackBar) {
            this._snackBar = _snackBar;
            this.horizontalPosition = 'start';
            this.verticalPosition = 'bottom';
        }
        SnackBarPositionExample.prototype.openSnackBar = function () {
            this._snackBar.open('Canonball!!', 'End now', {
                duration: 500,
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
            });
        };
        SnackBarPositionExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'snack-bar-position-example',
                        template: "<mat-form-field>\n  <mat-select placeholder=\"Horizontal position\" [(value)]=\"horizontalPosition\">\n    <mat-option value=\"start\">Start</mat-option>\n    <mat-option value=\"center\">Center</mat-option>\n    <mat-option value=\"end\">End</mat-option>\n    <mat-option value=\"left\">Left</mat-option>\n    <mat-option value=\"right\">Right</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field>\n  <mat-select placeholder=\"Vertical position\" [(value)]=\"verticalPosition\">\n    <mat-option value=\"top\">Top</mat-option>\n    <mat-option value=\"bottom\">Bottom</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pool party!\n</button>\n",
                        styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
                    }] }
        ];
        /** @nocollapse */
        SnackBarPositionExample.ctorParameters = function () { return [
            { type: snackBar.MatSnackBar }
        ]; };
        return SnackBarPositionExample;
    }());

    var EXAMPLES = [
        SnackBarComponentExample,
        SnackBarOverviewExample,
        SnackBarPositionExample,
    ];
    var SnackBarExamplesModule = /** @class */ (function () {
        function SnackBarExamplesModule() {
        }
        SnackBarExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            forms.FormsModule,
                            button.MatButtonModule,
                            input.MatInputModule,
                            select.MatSelectModule,
                            snackBar.MatSnackBarModule,
                        ],
                        declarations: tslib_1.__spread(EXAMPLES, [PizzaPartyComponent]),
                        exports: EXAMPLES,
                        entryComponents: [PizzaPartyComponent],
                    },] }
        ];
        return SnackBarExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SnackBarComponentExample = SnackBarComponentExample;
    exports.SnackBarOverviewExample = SnackBarOverviewExample;
    exports.SnackBarPositionExample = SnackBarPositionExample;
    exports.PizzaPartyComponent = PizzaPartyComponent;
    exports.SnackBarExamplesModule = SnackBarExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-snack-bar.umd.js.map