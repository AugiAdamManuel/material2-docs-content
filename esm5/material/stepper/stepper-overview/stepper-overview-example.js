import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/stepper";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
function StepperOverviewExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperOverviewExample_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your address");
} }
function StepperOverviewExample_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
/**
 * @title Stepper overview
 */
var StepperOverviewExample = /** @class */ (function () {
    function StepperOverviewExample(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    StepperOverviewExample.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    };
    StepperOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'stepper-overview-example',
                    templateUrl: 'stepper-overview-example.html',
                    styleUrls: ['stepper-overview-example.css'],
                },] },
    ];
    /** @nocollapse */
    StepperOverviewExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    StepperOverviewExample.ɵfac = function StepperOverviewExample_Factory(t) { return new (t || StepperOverviewExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    StepperOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperOverviewExample, selectors: [["stepper-overview-example"]], decls: 35, vars: 6, consts: [["mat-raised-button", "", "id", "toggle-linear", 3, "click"], [3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperOverviewExample_Template(rf, ctx) { if (rf & 1) {
            var _r24 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function StepperOverviewExample_Template_button_click_0_listener() { return ctx.isLinear = !ctx.isLinear; });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-horizontal-stepper", 1, 2);
            i0.ɵɵelementStart(4, "mat-step", 3);
            i0.ɵɵelementStart(5, "form", 4);
            i0.ɵɵtemplate(6, StepperOverviewExample_ng_template_6_Template, 1, 0, "ng-template", 5);
            i0.ɵɵelementStart(7, "mat-form-field");
            i0.ɵɵelementStart(8, "mat-label");
            i0.ɵɵtext(9, "Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "input", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div");
            i0.ɵɵelementStart(12, "button", 7);
            i0.ɵɵtext(13, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "mat-step", 3);
            i0.ɵɵelementStart(15, "form", 4);
            i0.ɵɵtemplate(16, StepperOverviewExample_ng_template_16_Template, 1, 0, "ng-template", 5);
            i0.ɵɵelementStart(17, "mat-form-field");
            i0.ɵɵelementStart(18, "mat-label");
            i0.ɵɵtext(19, "Address");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(20, "input", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div");
            i0.ɵɵelementStart(22, "button", 9);
            i0.ɵɵtext(23, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "button", 7);
            i0.ɵɵtext(25, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "mat-step");
            i0.ɵɵtemplate(27, StepperOverviewExample_ng_template_27_Template, 1, 0, "ng-template", 5);
            i0.ɵɵelementStart(28, "p");
            i0.ɵɵtext(29, "You are now done.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "div");
            i0.ɵɵelementStart(31, "button", 9);
            i0.ɵɵtext(32, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "button", 10);
            i0.ɵɵlistener("click", function StepperOverviewExample_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r24); var _r20 = i0.ɵɵreference(3); return _r20.reset(); });
            i0.ɵɵtext(34, "Reset");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", !ctx.isLinear ? "Enable linear mode" : "Disable linear mode", "\n");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("linear", ctx.isLinear);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
        } }, directives: [i2.MatButton, i3.MatHorizontalStepper, i3.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatStepLabel, i4.MatFormField, i4.MatLabel, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i3.MatStepperNext, i3.MatStepperPrevious], styles: [".mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
    return StepperOverviewExample;
}());
export { StepperOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StepperOverviewExample, [{
        type: Component,
        args: [{
                selector: 'stepper-overview-example',
                templateUrl: 'stepper-overview-example.html',
                styleUrls: ['stepper-overview-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc3RlcHBlci9zdGVwcGVyLW92ZXJ2aWV3L3N0ZXBwZXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1vdmVydmlldy9zdGVwcGVyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQWEsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7O0lDS2xDLGtDQUFrQjs7O0lBWWxCLHFDQUFxQjs7O0lBYXZCLG9CQUFJOztBRDVCbEM7O0dBRUc7QUFDSDtJQVVFLGdDQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUo3QyxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBSStCLENBQUM7SUFFakQseUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDNUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDckMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUM3QyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUN0QyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7b0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2lCQUM1Qzs7OztnQkFUTyxXQUFXOztnR0FVTixzQkFBc0I7K0RBQXRCLHNCQUFzQjs7WUNYbkMsaUNBQ0U7WUFEd0IsbUlBQThCO1lBQ3RELFlBQ0Y7WUFBQSxpQkFBUztZQUNULG9EQUNFO1lBQUEsbUNBQ0U7WUFBQSwrQkFDRTtZQUFBLHVGQUEwQjtZQUMxQixzQ0FDRTtZQUFBLGlDQUFXO1lBQUEsb0JBQUk7WUFBQSxpQkFBWTtZQUMzQiw0QkFDRjtZQUFBLGlCQUFpQjtZQUNqQiw0QkFDRTtZQUFBLGtDQUFrQztZQUFBLHFCQUFJO1lBQUEsaUJBQVM7WUFDakQsaUJBQU07WUFDUixpQkFBTztZQUNULGlCQUFXO1lBQ1gsb0NBQ0U7WUFBQSxnQ0FDRTtZQUFBLHlGQUEwQjtZQUMxQix1Q0FDRTtZQUFBLGtDQUFXO1lBQUEsd0JBQU87WUFBQSxpQkFBWTtZQUM5Qiw0QkFFRjtZQUFBLGlCQUFpQjtZQUNqQiw0QkFDRTtZQUFBLGtDQUFzQztZQUFBLHFCQUFJO1lBQUEsaUJBQVM7WUFDbkQsa0NBQWtDO1lBQUEscUJBQUk7WUFBQSxpQkFBUztZQUNqRCxpQkFBTTtZQUNSLGlCQUFPO1lBQ1QsaUJBQVc7WUFDWCxpQ0FDRTtZQUFBLHlGQUEwQjtZQUMxQiwwQkFBRztZQUFBLGtDQUFpQjtZQUFBLGlCQUFJO1lBQ3hCLDRCQUNFO1lBQUEsa0NBQXNDO1lBQUEscUJBQUk7WUFBQSxpQkFBUztZQUNuRCxtQ0FBNkM7WUFBMUIsMEpBQVMsWUFBZSxJQUFDO1lBQUMsc0JBQUs7WUFBQSxpQkFBUztZQUM3RCxpQkFBTTtZQUNSLGlCQUFXO1lBQ2IsaUJBQXlCOztZQXJDdkIsZUFDRjtZQURFLDhGQUNGO1lBQ3dCLGVBQW1CO1lBQW5CLHFDQUFtQjtZQUMvQixlQUE4QjtZQUE5QixnREFBOEI7WUFDaEMsZUFBNEI7WUFBNUIsOENBQTRCO1lBVzFCLGVBQStCO1lBQS9CLGlEQUErQjtZQUNqQyxlQUE2QjtZQUE3QiwrQ0FBNkI7O2lDRGpCdkM7Q0EwQkMsQUFwQkQsSUFvQkM7U0FmWSxzQkFBc0I7a0RBQXRCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEB0aXRsZSBTdGVwcGVyIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0ZXBwZXItb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3RlcHBlci1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVyT3ZlcnZpZXdFeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXNMaW5lYXIgPSBmYWxzZTtcbiAgZmlyc3RGb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgc2Vjb25kRm9ybUdyb3VwOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZmlyc3RGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBmaXJzdEN0cmw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgICB0aGlzLnNlY29uZEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHNlY29uZEN0cmw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgfVxufVxuIiwiPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwiaXNMaW5lYXIgPSAhaXNMaW5lYXJcIiBpZD1cInRvZ2dsZS1saW5lYXJcIj5cbiAge3shaXNMaW5lYXIgPyAnRW5hYmxlIGxpbmVhciBtb2RlJyA6ICdEaXNhYmxlIGxpbmVhciBtb2RlJ319XG48L2J1dHRvbj5cbjxtYXQtaG9yaXpvbnRhbC1zdGVwcGVyIFtsaW5lYXJdPVwiaXNMaW5lYXJcIiAjc3RlcHBlcj5cbiAgPG1hdC1zdGVwIFtzdGVwQ29udHJvbF09XCJmaXJzdEZvcm1Hcm91cFwiPlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZmlyc3RGb3JtR3JvdXBcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RmlsbCBvdXQgeW91ciBuYW1lPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPG1hdC1sYWJlbD5OYW1lPC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkxhc3QgbmFtZSwgRmlyc3QgbmFtZVwiIGZvcm1Db250cm9sTmFtZT1cImZpcnN0Q3RybFwiIHJlcXVpcmVkPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcCBbc3RlcENvbnRyb2xdPVwic2Vjb25kRm9ybUdyb3VwXCI+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJzZWNvbmRGb3JtR3JvdXBcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RmlsbCBvdXQgeW91ciBhZGRyZXNzPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPG1hdC1sYWJlbD5BZGRyZXNzPC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJzZWNvbmRDdHJsXCIgcGxhY2Vob2xkZXI9XCJFeC4gMSBNYWluIFN0LCBOZXcgWW9yaywgTllcIlxuICAgICAgICAgICAgICAgcmVxdWlyZWQ+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5CYWNrPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcD5cbiAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkRvbmU8L25nLXRlbXBsYXRlPlxuICAgIDxwPllvdSBhcmUgbm93IGRvbmUuPC9wPlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwic3RlcHBlci5yZXNldCgpXCI+UmVzZXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtc3RlcD5cbjwvbWF0LWhvcml6b250YWwtc3RlcHBlcj5cbiJdfQ==