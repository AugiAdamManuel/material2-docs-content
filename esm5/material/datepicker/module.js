import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DatepickerApiExample } from './datepicker-api/datepicker-api-example';
import { DatepickerColorExample } from './datepicker-color/datepicker-color-example';
import { DatepickerCustomHeaderExample, ExampleHeader } from './datepicker-custom-header/datepicker-custom-header-example';
import { DatepickerCustomIconExample } from './datepicker-custom-icon/datepicker-custom-icon-example';
import { DatepickerDateClassExample } from './datepicker-date-class/datepicker-date-class-example';
import { DatepickerDisabledExample } from './datepicker-disabled/datepicker-disabled-example';
import { DatepickerEventsExample } from './datepicker-events/datepicker-events-example';
import { DatepickerFilterExample } from './datepicker-filter/datepicker-filter-example';
import { DatepickerFormatsExample } from './datepicker-formats/datepicker-formats-example';
import { DatepickerLocaleExample } from './datepicker-locale/datepicker-locale-example';
import { DatepickerMinMaxExample } from './datepicker-min-max/datepicker-min-max-example';
import { DatepickerMomentExample } from './datepicker-moment/datepicker-moment-example';
import { DatepickerOverviewExample } from './datepicker-overview/datepicker-overview-example';
import { DatepickerStartViewExample } from './datepicker-start-view/datepicker-start-view-example';
import { DatepickerTouchExample } from './datepicker-touch/datepicker-touch-example';
import { DatepickerValueExample } from './datepicker-value/datepicker-value-example';
import { DatepickerViewsSelectionExample } from './datepicker-views-selection/datepicker-views-selection-example';
var EXAMPLES = [
    DatepickerApiExample,
    DatepickerColorExample,
    DatepickerCustomHeaderExample,
    DatepickerCustomIconExample,
    DatepickerDateClassExample,
    DatepickerDisabledExample,
    DatepickerEventsExample,
    DatepickerFilterExample,
    DatepickerFormatsExample,
    DatepickerLocaleExample,
    DatepickerMinMaxExample,
    DatepickerMomentExample,
    DatepickerOverviewExample,
    DatepickerStartViewExample,
    DatepickerTouchExample,
    DatepickerValueExample,
    DatepickerViewsSelectionExample,
    ExampleHeader,
];
var DatepickerExamplesModule = /** @class */ (function () {
    function DatepickerExamplesModule() {
    }
    DatepickerExamplesModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                MatButtonModule,
                MatDatepickerModule,
                MatInputModule,
                MatIconModule,
                MatNativeDateModule,
                ReactiveFormsModule,
            ],
            declarations: EXAMPLES,
            exports: EXAMPLES,
        })
    ], DatepickerExamplesModule);
    return DatepickerExamplesModule;
}());
export { DatepickerExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQ0wsNkJBQTZCLEVBQzdCLGFBQWEsRUFDZCxNQUFNLDZEQUE2RCxDQUFDO0FBQ3JFLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQ3BHLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ2pHLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3RGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3RGLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3RGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3RGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ2pHLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFDTCwrQkFBK0IsRUFDaEMsTUFBTSxpRUFBaUUsQ0FBQztBQUV6RSxJQUFNLFFBQVEsR0FBRztJQUNmLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0IsYUFBYTtDQUNkLENBQUM7QUFlRjtJQUFBO0lBQ0EsQ0FBQztJQURZLHdCQUF3QjtRQWJwQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixlQUFlO2dCQUNmLG1CQUFtQjtnQkFDbkIsY0FBYztnQkFDZCxhQUFhO2dCQUNiLG1CQUFtQjtnQkFDbkIsbUJBQW1CO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFLFFBQVE7WUFDdEIsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQztPQUNXLHdCQUF3QixDQUNwQztJQUFELCtCQUFDO0NBQUEsQUFERCxJQUNDO1NBRFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdE5hdGl2ZURhdGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXREYXRlcGlja2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5cbmltcG9ydCB7RGF0ZXBpY2tlckFwaUV4YW1wbGV9IGZyb20gJy4vZGF0ZXBpY2tlci1hcGkvZGF0ZXBpY2tlci1hcGktZXhhbXBsZSc7XG5pbXBvcnQge0RhdGVwaWNrZXJDb2xvckV4YW1wbGV9IGZyb20gJy4vZGF0ZXBpY2tlci1jb2xvci9kYXRlcGlja2VyLWNvbG9yLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgRGF0ZXBpY2tlckN1c3RvbUhlYWRlckV4YW1wbGUsXG4gIEV4YW1wbGVIZWFkZXJcbn0gZnJvbSAnLi9kYXRlcGlja2VyLWN1c3RvbS1oZWFkZXIvZGF0ZXBpY2tlci1jdXN0b20taGVhZGVyLWV4YW1wbGUnO1xuaW1wb3J0IHtEYXRlcGlja2VyQ3VzdG9tSWNvbkV4YW1wbGV9IGZyb20gJy4vZGF0ZXBpY2tlci1jdXN0b20taWNvbi9kYXRlcGlja2VyLWN1c3RvbS1pY29uLWV4YW1wbGUnO1xuaW1wb3J0IHtEYXRlcGlja2VyRGF0ZUNsYXNzRXhhbXBsZX0gZnJvbSAnLi9kYXRlcGlja2VyLWRhdGUtY2xhc3MvZGF0ZXBpY2tlci1kYXRlLWNsYXNzLWV4YW1wbGUnO1xuaW1wb3J0IHtEYXRlcGlja2VyRGlzYWJsZWRFeGFtcGxlfSBmcm9tICcuL2RhdGVwaWNrZXItZGlzYWJsZWQvZGF0ZXBpY2tlci1kaXNhYmxlZC1leGFtcGxlJztcbmltcG9ydCB7RGF0ZXBpY2tlckV2ZW50c0V4YW1wbGV9IGZyb20gJy4vZGF0ZXBpY2tlci1ldmVudHMvZGF0ZXBpY2tlci1ldmVudHMtZXhhbXBsZSc7XG5pbXBvcnQge0RhdGVwaWNrZXJGaWx0ZXJFeGFtcGxlfSBmcm9tICcuL2RhdGVwaWNrZXItZmlsdGVyL2RhdGVwaWNrZXItZmlsdGVyLWV4YW1wbGUnO1xuaW1wb3J0IHtEYXRlcGlja2VyRm9ybWF0c0V4YW1wbGV9IGZyb20gJy4vZGF0ZXBpY2tlci1mb3JtYXRzL2RhdGVwaWNrZXItZm9ybWF0cy1leGFtcGxlJztcbmltcG9ydCB7RGF0ZXBpY2tlckxvY2FsZUV4YW1wbGV9IGZyb20gJy4vZGF0ZXBpY2tlci1sb2NhbGUvZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZSc7XG5pbXBvcnQge0RhdGVwaWNrZXJNaW5NYXhFeGFtcGxlfSBmcm9tICcuL2RhdGVwaWNrZXItbWluLW1heC9kYXRlcGlja2VyLW1pbi1tYXgtZXhhbXBsZSc7XG5pbXBvcnQge0RhdGVwaWNrZXJNb21lbnRFeGFtcGxlfSBmcm9tICcuL2RhdGVwaWNrZXItbW9tZW50L2RhdGVwaWNrZXItbW9tZW50LWV4YW1wbGUnO1xuaW1wb3J0IHtEYXRlcGlja2VyT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2RhdGVwaWNrZXItb3ZlcnZpZXcvZGF0ZXBpY2tlci1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7RGF0ZXBpY2tlclN0YXJ0Vmlld0V4YW1wbGV9IGZyb20gJy4vZGF0ZXBpY2tlci1zdGFydC12aWV3L2RhdGVwaWNrZXItc3RhcnQtdmlldy1leGFtcGxlJztcbmltcG9ydCB7RGF0ZXBpY2tlclRvdWNoRXhhbXBsZX0gZnJvbSAnLi9kYXRlcGlja2VyLXRvdWNoL2RhdGVwaWNrZXItdG91Y2gtZXhhbXBsZSc7XG5pbXBvcnQge0RhdGVwaWNrZXJWYWx1ZUV4YW1wbGV9IGZyb20gJy4vZGF0ZXBpY2tlci12YWx1ZS9kYXRlcGlja2VyLXZhbHVlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgRGF0ZXBpY2tlclZpZXdzU2VsZWN0aW9uRXhhbXBsZVxufSBmcm9tICcuL2RhdGVwaWNrZXItdmlld3Mtc2VsZWN0aW9uL2RhdGVwaWNrZXItdmlld3Mtc2VsZWN0aW9uLWV4YW1wbGUnO1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgRGF0ZXBpY2tlckFwaUV4YW1wbGUsXG4gIERhdGVwaWNrZXJDb2xvckV4YW1wbGUsXG4gIERhdGVwaWNrZXJDdXN0b21IZWFkZXJFeGFtcGxlLFxuICBEYXRlcGlja2VyQ3VzdG9tSWNvbkV4YW1wbGUsXG4gIERhdGVwaWNrZXJEYXRlQ2xhc3NFeGFtcGxlLFxuICBEYXRlcGlja2VyRGlzYWJsZWRFeGFtcGxlLFxuICBEYXRlcGlja2VyRXZlbnRzRXhhbXBsZSxcbiAgRGF0ZXBpY2tlckZpbHRlckV4YW1wbGUsXG4gIERhdGVwaWNrZXJGb3JtYXRzRXhhbXBsZSxcbiAgRGF0ZXBpY2tlckxvY2FsZUV4YW1wbGUsXG4gIERhdGVwaWNrZXJNaW5NYXhFeGFtcGxlLFxuICBEYXRlcGlja2VyTW9tZW50RXhhbXBsZSxcbiAgRGF0ZXBpY2tlck92ZXJ2aWV3RXhhbXBsZSxcbiAgRGF0ZXBpY2tlclN0YXJ0Vmlld0V4YW1wbGUsXG4gIERhdGVwaWNrZXJUb3VjaEV4YW1wbGUsXG4gIERhdGVwaWNrZXJWYWx1ZUV4YW1wbGUsXG4gIERhdGVwaWNrZXJWaWV3c1NlbGVjdGlvbkV4YW1wbGUsXG4gIEV4YW1wbGVIZWFkZXIsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==