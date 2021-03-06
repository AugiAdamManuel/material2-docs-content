import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/checkbox";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/radio";
/**
 * @title Configurable checkbox
 */
var CheckboxConfigurableExample = /** @class */ (function () {
    function CheckboxConfigurableExample() {
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
    }
    CheckboxConfigurableExample.decorators = [
        { type: Component, args: [{
                    selector: 'checkbox-configurable-example',
                    templateUrl: 'checkbox-configurable-example.html',
                    styleUrls: ['checkbox-configurable-example.css'],
                },] },
    ];
    CheckboxConfigurableExample.ɵfac = function CheckboxConfigurableExample_Factory(t) { return new (t || CheckboxConfigurableExample)(); };
    CheckboxConfigurableExample.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxConfigurableExample, selectors: [["checkbox-configurable-example"]], decls: 27, vars: 8, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin", 3, "ngModel", "ngModelChange"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "after", 1, "example-margin"], ["value", "before", 1, "example-margin"], [1, "result"], [1, "example-margin", 3, "ngModel", "indeterminate", "labelPosition", "disabled", "ngModelChange", "indeterminateChange"]], template: function CheckboxConfigurableExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-card");
            i0.ɵɵelementStart(1, "mat-card-content");
            i0.ɵɵelementStart(2, "h2", 0);
            i0.ɵɵtext(3, "Checkbox configuration");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "section", 1);
            i0.ɵɵelementStart(5, "mat-checkbox", 2);
            i0.ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_checkbox_ngModelChange_5_listener($event) { return ctx.checked = $event; });
            i0.ɵɵtext(6, "Checked");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-checkbox", 2);
            i0.ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_checkbox_ngModelChange_7_listener($event) { return ctx.indeterminate = $event; });
            i0.ɵɵtext(8, "Indeterminate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "section", 1);
            i0.ɵɵelementStart(10, "label", 3);
            i0.ɵɵtext(11, "Align:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "mat-radio-group", 4);
            i0.ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_radio_group_ngModelChange_12_listener($event) { return ctx.labelPosition = $event; });
            i0.ɵɵelementStart(13, "mat-radio-button", 5);
            i0.ɵɵtext(14, "After");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "mat-radio-button", 6);
            i0.ɵɵtext(16, "Before");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "section", 1);
            i0.ɵɵelementStart(18, "mat-checkbox", 2);
            i0.ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_checkbox_ngModelChange_18_listener($event) { return ctx.disabled = $event; });
            i0.ɵɵtext(19, "Disabled");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "mat-card", 7);
            i0.ɵɵelementStart(21, "mat-card-content");
            i0.ɵɵelementStart(22, "h2", 0);
            i0.ɵɵtext(23, "Result");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "section", 1);
            i0.ɵɵelementStart(25, "mat-checkbox", 8);
            i0.ɵɵlistener("ngModelChange", function CheckboxConfigurableExample_Template_mat_checkbox_ngModelChange_25_listener($event) { return ctx.checked = $event; })("indeterminateChange", function CheckboxConfigurableExample_Template_mat_checkbox_indeterminateChange_25_listener($event) { return ctx.indeterminate = $event; });
            i0.ɵɵtext(26, " I'm a checkbox ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.checked);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.indeterminate);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.labelPosition);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngModel", ctx.disabled);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngModel", ctx.checked)("indeterminate", ctx.indeterminate)("labelPosition", ctx.labelPosition)("disabled", ctx.disabled);
        } }, directives: [i1.MatCard, i1.MatCardContent, i2.MatCheckbox, i3.NgControlStatus, i3.NgModel, i4.MatRadioGroup, i4.MatRadioButton], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"] });
    return CheckboxConfigurableExample;
}());
export { CheckboxConfigurableExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'checkbox-configurable-example',
                templateUrl: 'checkbox-configurable-example.html',
                styleUrls: ['checkbox-configurable-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtY29uZmlndXJhYmxlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1jb25maWd1cmFibGUvY2hlY2tib3gtY29uZmlndXJhYmxlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1jb25maWd1cmFibGUvY2hlY2tib3gtY29uZmlndXJhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO1FBTUUsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixrQkFBYSxHQUF1QixPQUFPLENBQUM7UUFDNUMsYUFBUSxHQUFHLEtBQUssQ0FBQztLQUNsQjs7Z0JBVkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLFdBQVcsRUFBRSxvQ0FBb0M7b0JBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2lCQUNqRDs7MEdBQ1ksMkJBQTJCO29FQUEzQiwyQkFBMkI7WUNWeEMsZ0NBQ0U7WUFBQSx3Q0FDRTtZQUFBLDZCQUF1QjtZQUFBLHNDQUFzQjtZQUFBLGlCQUFLO1lBRWxELGtDQUNFO1lBQUEsdUNBQTJEO1lBQXRCLDRKQUFxQjtZQUFDLHVCQUFPO1lBQUEsaUJBQWU7WUFDakYsdUNBQWlFO1lBQTVCLGtLQUEyQjtZQUFDLDZCQUFhO1lBQUEsaUJBQWU7WUFDL0YsaUJBQVU7WUFFVixrQ0FDRTtZQUFBLGlDQUE4QjtZQUFBLHVCQUFNO1lBQUEsaUJBQVE7WUFDNUMsMkNBQ0U7WUFEZSxzS0FBMkI7WUFDMUMsNENBQXVEO1lBQUEsc0JBQUs7WUFBQSxpQkFBbUI7WUFDL0UsNENBQXdEO1lBQUEsdUJBQU07WUFBQSxpQkFBbUI7WUFDbkYsaUJBQWtCO1lBQ3BCLGlCQUFVO1lBRVYsbUNBQ0U7WUFBQSx3Q0FBNEQ7WUFBdkIsOEpBQXNCO1lBQUMseUJBQVE7WUFBQSxpQkFBZTtZQUNyRixpQkFBVTtZQUNaLGlCQUFtQjtZQUNyQixpQkFBVztZQUVYLG9DQUNFO1lBQUEseUNBQ0U7WUFBQSw4QkFBdUI7WUFBQSx1QkFBTTtZQUFBLGlCQUFLO1lBRWxDLG1DQUNFO1lBQUEsd0NBTUU7WUFKRSw2SkFBcUIsa0tBQUE7WUFJdkIsaUNBQ0Y7WUFBQSxpQkFBZTtZQUNqQixpQkFBVTtZQUNaLGlCQUFtQjtZQUNyQixpQkFBVzs7WUFqQ2dDLGVBQXFCO1lBQXJCLHFDQUFxQjtZQUNyQixlQUEyQjtZQUEzQiwyQ0FBMkI7WUFLL0MsZUFBMkI7WUFBM0IsMkNBQTJCO1lBT1AsZUFBc0I7WUFBdEIsc0NBQXNCO1lBWXZELGVBQXFCO1lBQXJCLHFDQUFxQixvQ0FBQSxvQ0FBQSwwQkFBQTs7c0NEOUIvQjtDQWVDLEFBVkQsSUFVQztTQUxZLDJCQUEyQjtrREFBM0IsMkJBQTJCO2NBTHZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzthQUNqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQ29uZmlndXJhYmxlIGNoZWNrYm94XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoZWNrYm94LWNvbmZpZ3VyYWJsZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGVja2JveC1jb25maWd1cmFibGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NoZWNrYm94LWNvbmZpZ3VyYWJsZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbmZpZ3VyYWJsZUV4YW1wbGUge1xuICBjaGVja2VkID0gZmFsc2U7XG4gIGluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgbGFiZWxQb3NpdGlvbjogJ2JlZm9yZScgfCAnYWZ0ZXInID0gJ2FmdGVyJztcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbn1cbiIsIjxtYXQtY2FyZD5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgPGgyIGNsYXNzPVwiZXhhbXBsZS1oMlwiPkNoZWNrYm94IGNvbmZpZ3VyYXRpb248L2gyPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwiY2hlY2tlZFwiPkNoZWNrZWQ8L21hdC1jaGVja2JveD5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwiaW5kZXRlcm1pbmF0ZVwiPkluZGV0ZXJtaW5hdGU8L21hdC1jaGVja2JveD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj5BbGlnbjo8L2xhYmVsPlxuICAgICAgPG1hdC1yYWRpby1ncm91cCBbKG5nTW9kZWwpXT1cImxhYmVsUG9zaXRpb25cIj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIHZhbHVlPVwiYWZ0ZXJcIj5BZnRlcjwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIHZhbHVlPVwiYmVmb3JlXCI+QmVmb3JlPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJleGFtcGxlLW1hcmdpblwiIFsobmdNb2RlbCldPVwiZGlzYWJsZWRcIj5EaXNhYmxlZDwvbWF0LWNoZWNrYm94PlxuICAgIDwvc2VjdGlvbj5cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuPC9tYXQtY2FyZD5cblxuPG1hdC1jYXJkIGNsYXNzPVwicmVzdWx0XCI+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIDxoMiBjbGFzcz1cImV4YW1wbGUtaDJcIj5SZXN1bHQ8L2gyPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIj5cbiAgICAgIDxtYXQtY2hlY2tib3hcbiAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCJcbiAgICAgICAgICBbKG5nTW9kZWwpXT1cImNoZWNrZWRcIlxuICAgICAgICAgIFsoaW5kZXRlcm1pbmF0ZSldPVwiaW5kZXRlcm1pbmF0ZVwiXG4gICAgICAgICAgW2xhYmVsUG9zaXRpb25dPVwibGFiZWxQb3NpdGlvblwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICAgIEknbSBhIGNoZWNrYm94XG4gICAgICA8L21hdC1jaGVja2JveD5cbiAgICA8L3NlY3Rpb24+XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG4iXX0=