import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SlideToggleConfigurableExample } from './slide-toggle-configurable/slide-toggle-configurable-example';
import { SlideToggleFormsExample } from './slide-toggle-forms/slide-toggle-forms-example';
import { SlideToggleOverviewExample } from './slide-toggle-overview/slide-toggle-overview-example';
import * as i0 from "@angular/core";
export { SlideToggleConfigurableExample, SlideToggleFormsExample, SlideToggleOverviewExample, };
var EXAMPLES = [
    SlideToggleConfigurableExample,
    SlideToggleFormsExample,
    SlideToggleOverviewExample,
];
var SlideToggleExamplesModule = /** @class */ (function () {
    function SlideToggleExamplesModule() {
    }
    SlideToggleExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: SlideToggleExamplesModule });
    SlideToggleExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SlideToggleExamplesModule_Factory(t) { return new (t || SlideToggleExamplesModule)(); }, imports: [[
                FormsModule,
                MatButtonModule,
                MatCardModule,
                MatCheckboxModule,
                MatRadioModule,
                MatSlideToggleModule,
                ReactiveFormsModule,
            ]] });
    return SlideToggleExamplesModule;
}());
export { SlideToggleExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SlideToggleExamplesModule, { declarations: [SlideToggleConfigurableExample,
        SlideToggleFormsExample,
        SlideToggleOverviewExample], imports: [FormsModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSlideToggleModule,
        ReactiveFormsModule], exports: [SlideToggleConfigurableExample,
        SlideToggleFormsExample,
        SlideToggleOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SlideToggleExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    FormsModule,
                    MatButtonModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatRadioModule,
                    MatSlideToggleModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZS10b2dnbGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUNMLDhCQUE4QixFQUMvQixNQUFNLCtEQUErRCxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDOztBQUVqRyxPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLHVCQUF1QixFQUN2QiwwQkFBMEIsR0FDM0IsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2YsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QiwwQkFBMEI7Q0FDM0IsQ0FBQztBQUVGO0lBQUE7S0FjQztpRUFEWSx5QkFBeUI7cUlBQXpCLHlCQUF5QixrQkFaM0I7Z0JBQ1AsV0FBVztnQkFDWCxlQUFlO2dCQUNmLGFBQWE7Z0JBQ2IsaUJBQWlCO2dCQUNqQixjQUFjO2dCQUNkLG9CQUFvQjtnQkFDcEIsbUJBQW1CO2FBQ3BCO29DQWxDSDtDQXVDQyxBQWRELElBY0M7U0FEWSx5QkFBeUI7d0ZBQXpCLHlCQUF5QixtQkFsQnBDLDhCQUE4QjtRQUM5Qix1QkFBdUI7UUFDdkIsMEJBQTBCLGFBS3hCLFdBQVc7UUFDWCxlQUFlO1FBQ2YsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLG1CQUFtQixhQWJyQiw4QkFBOEI7UUFDOUIsdUJBQXVCO1FBQ3ZCLDBCQUEwQjtrREFnQmYseUJBQXlCO2NBYnJDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsV0FBVztvQkFDWCxlQUFlO29CQUNmLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLG9CQUFvQjtvQkFDcEIsbUJBQW1CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7TWF0UmFkaW9Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7TWF0U2xpZGVUb2dnbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlLXRvZ2dsZSc7XG5pbXBvcnQge1xuICBTbGlkZVRvZ2dsZUNvbmZpZ3VyYWJsZUV4YW1wbGVcbn0gZnJvbSAnLi9zbGlkZS10b2dnbGUtY29uZmlndXJhYmxlL3NsaWRlLXRvZ2dsZS1jb25maWd1cmFibGUtZXhhbXBsZSc7XG5pbXBvcnQge1NsaWRlVG9nZ2xlRm9ybXNFeGFtcGxlfSBmcm9tICcuL3NsaWRlLXRvZ2dsZS1mb3Jtcy9zbGlkZS10b2dnbGUtZm9ybXMtZXhhbXBsZSc7XG5pbXBvcnQge1NsaWRlVG9nZ2xlT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3NsaWRlLXRvZ2dsZS1vdmVydmlldy9zbGlkZS10b2dnbGUtb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIFNsaWRlVG9nZ2xlQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgU2xpZGVUb2dnbGVGb3Jtc0V4YW1wbGUsXG4gIFNsaWRlVG9nZ2xlT3ZlcnZpZXdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFNsaWRlVG9nZ2xlQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgU2xpZGVUb2dnbGVGb3Jtc0V4YW1wbGUsXG4gIFNsaWRlVG9nZ2xlT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZVRvZ2dsZUV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==