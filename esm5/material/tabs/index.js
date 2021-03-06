import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { TabGroupAlignExample } from './tab-group-align/tab-group-align-example';
import { TabGroupAnimationsExample } from './tab-group-animations/tab-group-animations-example';
import { TabGroupAsyncExample } from './tab-group-async/tab-group-async-example';
import { TabGroupBasicExample } from './tab-group-basic/tab-group-basic-example';
import { TabGroupCustomLabelExample } from './tab-group-custom-label/tab-group-custom-label-example';
import { TabGroupDynamicHeightExample } from './tab-group-dynamic-height/tab-group-dynamic-height-example';
import { TabGroupDynamicExample } from './tab-group-dynamic/tab-group-dynamic-example';
import { TabGroupHeaderBelowExample } from './tab-group-header-below/tab-group-header-below-example';
import { TabGroupLazyLoadedExample } from './tab-group-lazy-loaded/tab-group-lazy-loaded-example';
import { TabGroupStretchedExample } from './tab-group-stretched/tab-group-stretched-example';
import { TabGroupThemeExample } from './tab-group-theme/tab-group-theme-example';
import { TabNavBarBasicExample } from './tab-nav-bar-basic/tab-nav-bar-basic-example';
import * as i0 from "@angular/core";
export { TabGroupAlignExample, TabGroupAnimationsExample, TabGroupAsyncExample, TabGroupBasicExample, TabGroupCustomLabelExample, TabGroupDynamicExample, TabGroupDynamicHeightExample, TabGroupHeaderBelowExample, TabGroupLazyLoadedExample, TabGroupStretchedExample, TabGroupThemeExample, TabNavBarBasicExample, };
var EXAMPLES = [
    TabGroupAlignExample,
    TabGroupAnimationsExample,
    TabGroupAsyncExample,
    TabGroupBasicExample,
    TabGroupCustomLabelExample,
    TabGroupDynamicExample,
    TabGroupDynamicHeightExample,
    TabGroupHeaderBelowExample,
    TabGroupLazyLoadedExample,
    TabGroupStretchedExample,
    TabGroupThemeExample,
    TabNavBarBasicExample,
];
var TabGroupExamplesModule = /** @class */ (function () {
    function TabGroupExamplesModule() {
    }
    TabGroupExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatButtonToggleModule,
                        MatCheckboxModule,
                        MatIconModule,
                        MatInputModule,
                        MatTabsModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    TabGroupExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: TabGroupExamplesModule });
    TabGroupExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TabGroupExamplesModule_Factory(t) { return new (t || TabGroupExamplesModule)(); }, imports: [[
                CommonModule,
                MatButtonModule,
                MatButtonToggleModule,
                MatCheckboxModule,
                MatIconModule,
                MatInputModule,
                MatTabsModule,
                ReactiveFormsModule,
            ]] });
    return TabGroupExamplesModule;
}());
export { TabGroupExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TabGroupExamplesModule, { declarations: [TabGroupAlignExample,
        TabGroupAnimationsExample,
        TabGroupAsyncExample,
        TabGroupBasicExample,
        TabGroupCustomLabelExample,
        TabGroupDynamicExample,
        TabGroupDynamicHeightExample,
        TabGroupHeaderBelowExample,
        TabGroupLazyLoadedExample,
        TabGroupStretchedExample,
        TabGroupThemeExample,
        TabNavBarBasicExample], imports: [CommonModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatTabsModule,
        ReactiveFormsModule], exports: [TabGroupAlignExample,
        TabGroupAnimationsExample,
        TabGroupAsyncExample,
        TabGroupBasicExample,
        TabGroupCustomLabelExample,
        TabGroupDynamicExample,
        TabGroupDynamicHeightExample,
        TabGroupHeaderBelowExample,
        TabGroupLazyLoadedExample,
        TabGroupStretchedExample,
        TabGroupThemeExample,
        TabNavBarBasicExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatInputModule,
                    MatTabsModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUM5RixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUNuRyxPQUFPLEVBQ0wsNEJBQTRCLEVBQzdCLE1BQU0sNkRBQTZELENBQUM7QUFDckUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDckYsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDaEcsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDM0YsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sK0NBQStDLENBQUM7O0FBRXBGLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIseUJBQXlCLEVBQ3pCLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsMEJBQTBCLEVBQzFCLHNCQUFzQixFQUN0Qiw0QkFBNEIsRUFDNUIsMEJBQTBCLEVBQzFCLHlCQUF5QixFQUN6Qix3QkFBd0IsRUFDeEIsb0JBQW9CLEVBQ3BCLHFCQUFxQixHQUN0QixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtDQUN0QixDQUFDO0FBRUY7SUFBQTtLQWdCQzs7Z0JBaEJBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLHFCQUFxQjt3QkFDckIsaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixtQkFBbUI7cUJBQ3BCO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLFFBQVE7aUJBQzFCOzs4REFDWSxzQkFBc0I7K0hBQXRCLHNCQUFzQixrQkFkeEI7Z0JBQ1AsWUFBWTtnQkFDWixlQUFlO2dCQUNmLHFCQUFxQjtnQkFDckIsaUJBQWlCO2dCQUNqQixhQUFhO2dCQUNiLGNBQWM7Z0JBQ2QsYUFBYTtnQkFDYixtQkFBbUI7YUFDcEI7aUNBaEVIO0NBc0VDLEFBaEJELElBZ0JDO1NBRFksc0JBQXNCO3dGQUF0QixzQkFBc0IsbUJBN0JqQyxvQkFBb0I7UUFDcEIseUJBQXlCO1FBQ3pCLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsMEJBQTBCO1FBQzFCLHNCQUFzQjtRQUN0Qiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLHFCQUFxQixhQUtuQixZQUFZO1FBQ1osZUFBZTtRQUNmLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLGNBQWM7UUFDZCxhQUFhO1FBQ2IsbUJBQW1CLGFBdkJyQixvQkFBb0I7UUFDcEIseUJBQXlCO1FBQ3pCLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsMEJBQTBCO1FBQzFCLHNCQUFzQjtRQUN0Qiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtrREFrQlYsc0JBQXNCO2NBZmxDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixlQUFlO29CQUNmLHFCQUFxQjtvQkFDckIsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixtQkFBbUI7aUJBQ3BCO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0QnV0dG9uVG9nZ2xlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24tdG9nZ2xlJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFRhYnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xuaW1wb3J0IHtUYWJHcm91cEFsaWduRXhhbXBsZX0gZnJvbSAnLi90YWItZ3JvdXAtYWxpZ24vdGFiLWdyb3VwLWFsaWduLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJHcm91cEFuaW1hdGlvbnNFeGFtcGxlfSBmcm9tICcuL3RhYi1ncm91cC1hbmltYXRpb25zL3RhYi1ncm91cC1hbmltYXRpb25zLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJHcm91cEFzeW5jRXhhbXBsZX0gZnJvbSAnLi90YWItZ3JvdXAtYXN5bmMvdGFiLWdyb3VwLWFzeW5jLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJHcm91cEJhc2ljRXhhbXBsZX0gZnJvbSAnLi90YWItZ3JvdXAtYmFzaWMvdGFiLWdyb3VwLWJhc2ljLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJHcm91cEN1c3RvbUxhYmVsRXhhbXBsZX0gZnJvbSAnLi90YWItZ3JvdXAtY3VzdG9tLWxhYmVsL3RhYi1ncm91cC1jdXN0b20tbGFiZWwtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBUYWJHcm91cER5bmFtaWNIZWlnaHRFeGFtcGxlXG59IGZyb20gJy4vdGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0L3RhYi1ncm91cC1keW5hbWljLWhlaWdodC1leGFtcGxlJztcbmltcG9ydCB7VGFiR3JvdXBEeW5hbWljRXhhbXBsZX0gZnJvbSAnLi90YWItZ3JvdXAtZHluYW1pYy90YWItZ3JvdXAtZHluYW1pYy1leGFtcGxlJztcbmltcG9ydCB7VGFiR3JvdXBIZWFkZXJCZWxvd0V4YW1wbGV9IGZyb20gJy4vdGFiLWdyb3VwLWhlYWRlci1iZWxvdy90YWItZ3JvdXAtaGVhZGVyLWJlbG93LWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJHcm91cExhenlMb2FkZWRFeGFtcGxlfSBmcm9tICcuL3RhYi1ncm91cC1sYXp5LWxvYWRlZC90YWItZ3JvdXAtbGF6eS1sb2FkZWQtZXhhbXBsZSc7XG5pbXBvcnQge1RhYkdyb3VwU3RyZXRjaGVkRXhhbXBsZX0gZnJvbSAnLi90YWItZ3JvdXAtc3RyZXRjaGVkL3RhYi1ncm91cC1zdHJldGNoZWQtZXhhbXBsZSc7XG5pbXBvcnQge1RhYkdyb3VwVGhlbWVFeGFtcGxlfSBmcm9tICcuL3RhYi1ncm91cC10aGVtZS90YWItZ3JvdXAtdGhlbWUtZXhhbXBsZSc7XG5pbXBvcnQge1RhYk5hdkJhckJhc2ljRXhhbXBsZX0gZnJvbSAnLi90YWItbmF2LWJhci1iYXNpYy90YWItbmF2LWJhci1iYXNpYy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgVGFiR3JvdXBBbGlnbkV4YW1wbGUsXG4gIFRhYkdyb3VwQW5pbWF0aW9uc0V4YW1wbGUsXG4gIFRhYkdyb3VwQXN5bmNFeGFtcGxlLFxuICBUYWJHcm91cEJhc2ljRXhhbXBsZSxcbiAgVGFiR3JvdXBDdXN0b21MYWJlbEV4YW1wbGUsXG4gIFRhYkdyb3VwRHluYW1pY0V4YW1wbGUsXG4gIFRhYkdyb3VwRHluYW1pY0hlaWdodEV4YW1wbGUsXG4gIFRhYkdyb3VwSGVhZGVyQmVsb3dFeGFtcGxlLFxuICBUYWJHcm91cExhenlMb2FkZWRFeGFtcGxlLFxuICBUYWJHcm91cFN0cmV0Y2hlZEV4YW1wbGUsXG4gIFRhYkdyb3VwVGhlbWVFeGFtcGxlLFxuICBUYWJOYXZCYXJCYXNpY0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgVGFiR3JvdXBBbGlnbkV4YW1wbGUsXG4gIFRhYkdyb3VwQW5pbWF0aW9uc0V4YW1wbGUsXG4gIFRhYkdyb3VwQXN5bmNFeGFtcGxlLFxuICBUYWJHcm91cEJhc2ljRXhhbXBsZSxcbiAgVGFiR3JvdXBDdXN0b21MYWJlbEV4YW1wbGUsXG4gIFRhYkdyb3VwRHluYW1pY0V4YW1wbGUsXG4gIFRhYkdyb3VwRHluYW1pY0hlaWdodEV4YW1wbGUsXG4gIFRhYkdyb3VwSGVhZGVyQmVsb3dFeGFtcGxlLFxuICBUYWJHcm91cExhenlMb2FkZWRFeGFtcGxlLFxuICBUYWJHcm91cFN0cmV0Y2hlZEV4YW1wbGUsXG4gIFRhYkdyb3VwVGhlbWVFeGFtcGxlLFxuICBUYWJOYXZCYXJCYXNpY0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRUYWJzTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==