/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkDragDropAxisLockExample } from './cdk-drag-drop-axis-lock/cdk-drag-drop-axis-lock-example';
import { CdkDragDropBoundaryExample } from './cdk-drag-drop-boundary/cdk-drag-drop-boundary-example';
import { CdkDragDropConnectedSortingGroupExample } from './cdk-drag-drop-connected-sorting-group/cdk-drag-drop-connected-sorting-group-example';
import { CdkDragDropConnectedSortingExample } from './cdk-drag-drop-connected-sorting/cdk-drag-drop-connected-sorting-example';
import { CdkDragDropCustomPlaceholderExample } from './cdk-drag-drop-custom-placeholder/cdk-drag-drop-custom-placeholder-example';
import { CdkDragDropCustomPreviewExample } from './cdk-drag-drop-custom-preview/cdk-drag-drop-custom-preview-example';
import { CdkDragDropDelayExample } from './cdk-drag-drop-delay/cdk-drag-drop-delay-example';
import { CdkDragDropDisabledSortingExample } from './cdk-drag-drop-disabled-sorting/cdk-drag-drop-disabled-sorting-example';
import { CdkDragDropDisabledExample } from './cdk-drag-drop-disabled/cdk-drag-drop-disabled-example';
import { CdkDragDropEnterPredicateExample } from './cdk-drag-drop-enter-predicate/cdk-drag-drop-enter-predicate-example';
import { CdkDragDropFreeDragPositionExample } from './cdk-drag-drop-free-drag-position/cdk-drag-drop-free-drag-position-example';
import { CdkDragDropHandleExample } from './cdk-drag-drop-handle/cdk-drag-drop-handle-example';
import { CdkDragDropHorizontalSortingExample } from './cdk-drag-drop-horizontal-sorting/cdk-drag-drop-horizontal-sorting-example';
import { CdkDragDropOverviewExample } from './cdk-drag-drop-overview/cdk-drag-drop-overview-example';
import { CdkDragDropRootElementExample } from './cdk-drag-drop-root-element/cdk-drag-drop-root-element-example';
import { CdkDragDropSortingExample } from './cdk-drag-drop-sorting/cdk-drag-drop-sorting-example';
import * as i0 from "@angular/core";
export { CdkDragDropAxisLockExample, CdkDragDropBoundaryExample, CdkDragDropConnectedSortingExample, CdkDragDropConnectedSortingGroupExample, CdkDragDropCustomPlaceholderExample, CdkDragDropCustomPreviewExample, CdkDragDropDelayExample, CdkDragDropDisabledExample, CdkDragDropDisabledSortingExample, CdkDragDropEnterPredicateExample, CdkDragDropFreeDragPositionExample, CdkDragDropHandleExample, CdkDragDropHorizontalSortingExample, CdkDragDropOverviewExample, CdkDragDropRootElementExample, CdkDragDropSortingExample, };
/** @type {?} */
const EXAMPLES = [
    CdkDragDropAxisLockExample,
    CdkDragDropBoundaryExample,
    CdkDragDropConnectedSortingExample,
    CdkDragDropConnectedSortingGroupExample,
    CdkDragDropCustomPlaceholderExample,
    CdkDragDropCustomPreviewExample,
    CdkDragDropDelayExample,
    CdkDragDropDisabledExample,
    CdkDragDropDisabledSortingExample,
    CdkDragDropEnterPredicateExample,
    CdkDragDropFreeDragPositionExample,
    CdkDragDropHandleExample,
    CdkDragDropHorizontalSortingExample,
    CdkDragDropOverviewExample,
    CdkDragDropRootElementExample,
    CdkDragDropSortingExample,
];
export class CdkDragDropExamplesModule {
}
CdkDragDropExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    DragDropModule,
                    OverlayModule,
                    CommonModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            },] },
];
/** @nocollapse */ CdkDragDropExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkDragDropExamplesModule });
/** @nocollapse */ CdkDragDropExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkDragDropExamplesModule_Factory(t) { return new (t || CdkDragDropExamplesModule)(); }, imports: [[
            DragDropModule,
            OverlayModule,
            CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkDragDropExamplesModule, { declarations: [CdkDragDropAxisLockExample,
        CdkDragDropBoundaryExample,
        CdkDragDropConnectedSortingExample,
        CdkDragDropConnectedSortingGroupExample,
        CdkDragDropCustomPlaceholderExample,
        CdkDragDropCustomPreviewExample,
        CdkDragDropDelayExample,
        CdkDragDropDisabledExample,
        CdkDragDropDisabledSortingExample,
        CdkDragDropEnterPredicateExample,
        CdkDragDropFreeDragPositionExample,
        CdkDragDropHandleExample,
        CdkDragDropHorizontalSortingExample,
        CdkDragDropOverviewExample,
        CdkDragDropRootElementExample,
        CdkDragDropSortingExample], imports: [DragDropModule,
        OverlayModule,
        CommonModule], exports: [CdkDragDropAxisLockExample,
        CdkDragDropBoundaryExample,
        CdkDragDropConnectedSortingExample,
        CdkDragDropConnectedSortingGroupExample,
        CdkDragDropCustomPlaceholderExample,
        CdkDragDropCustomPreviewExample,
        CdkDragDropDelayExample,
        CdkDragDropDisabledExample,
        CdkDragDropDisabledSortingExample,
        CdkDragDropEnterPredicateExample,
        CdkDragDropFreeDragPositionExample,
        CdkDragDropHandleExample,
        CdkDragDropHorizontalSortingExample,
        CdkDragDropOverviewExample,
        CdkDragDropRootElementExample,
        CdkDragDropSortingExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    DragDropModule,
                    OverlayModule,
                    CommonModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZHJhZy1kcm9wL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQ0wsMEJBQTBCLEVBQzNCLE1BQU0sMkRBQTJELENBQUM7QUFDbkUsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUNMLHVDQUF1QyxFQUN4QyxNQUFNLHVGQUF1RixDQUFDO0FBQy9GLE9BQU8sRUFDTCxrQ0FBa0MsRUFDbkMsTUFBTSwyRUFBMkUsQ0FBQztBQUNuRixPQUFPLEVBQ0wsbUNBQW1DLEVBQ3BDLE1BQU0sNkVBQTZFLENBQUM7QUFDckYsT0FBTyxFQUNMLCtCQUErQixFQUNoQyxNQUFNLHFFQUFxRSxDQUFDO0FBQzdFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzFGLE9BQU8sRUFDTCxpQ0FBaUMsRUFDbEMsTUFBTSx5RUFBeUUsQ0FBQztBQUNqRixPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUNuRyxPQUFPLEVBQ0wsZ0NBQWdDLEVBQ2pDLE1BQU0sdUVBQXVFLENBQUM7QUFDL0UsT0FBTyxFQUNMLGtDQUFrQyxFQUNuQyxNQUFNLDZFQUE2RSxDQUFDO0FBQ3JGLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQzdGLE9BQU8sRUFDTCxtQ0FBbUMsRUFDcEMsTUFBTSw2RUFBNkUsQ0FBQztBQUNyRixPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUNuRyxPQUFPLEVBQ0wsNkJBQTZCLEVBQzlCLE1BQU0saUVBQWlFLENBQUM7QUFDekUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sdURBQXVELENBQUM7O0FBRWhHLE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsMEJBQTBCLEVBQzFCLGtDQUFrQyxFQUNsQyx1Q0FBdUMsRUFDdkMsbUNBQW1DLEVBQ25DLCtCQUErQixFQUMvQix1QkFBdUIsRUFDdkIsMEJBQTBCLEVBQzFCLGlDQUFpQyxFQUNqQyxnQ0FBZ0MsRUFDaEMsa0NBQWtDLEVBQ2xDLHdCQUF3QixFQUN4QixtQ0FBbUMsRUFDbkMsMEJBQTBCLEVBQzFCLDZCQUE2QixFQUM3Qix5QkFBeUIsR0FDMUIsQ0FBQzs7TUFFSSxRQUFRLEdBQUc7SUFDZiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGtDQUFrQztJQUNsQyx1Q0FBdUM7SUFDdkMsbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDLHdCQUF3QjtJQUN4QixtQ0FBbUM7SUFDbkMsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3Qix5QkFBeUI7Q0FDMUI7QUFZRCxNQUFNLE9BQU8seUJBQXlCOzs7WUFWckMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLGFBQWE7b0JBQ2IsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCOzs2REFDWSx5QkFBeUI7aUlBQXpCLHlCQUF5QixrQkFUM0I7WUFDUCxjQUFjO1lBQ2QsYUFBYTtZQUNiLFlBQVk7U0FDYjt3RkFLVSx5QkFBeUIsbUJBNUJwQywwQkFBMEI7UUFDMUIsMEJBQTBCO1FBQzFCLGtDQUFrQztRQUNsQyx1Q0FBdUM7UUFDdkMsbUNBQW1DO1FBQ25DLCtCQUErQjtRQUMvQix1QkFBdUI7UUFDdkIsMEJBQTBCO1FBQzFCLGlDQUFpQztRQUNqQyxnQ0FBZ0M7UUFDaEMsa0NBQWtDO1FBQ2xDLHdCQUF3QjtRQUN4QixtQ0FBbUM7UUFDbkMsMEJBQTBCO1FBQzFCLDZCQUE2QjtRQUM3Qix5QkFBeUIsYUFLdkIsY0FBYztRQUNkLGFBQWE7UUFDYixZQUFZLGFBdEJkLDBCQUEwQjtRQUMxQiwwQkFBMEI7UUFDMUIsa0NBQWtDO1FBQ2xDLHVDQUF1QztRQUN2QyxtQ0FBbUM7UUFDbkMsK0JBQStCO1FBQy9CLHVCQUF1QjtRQUN2QiwwQkFBMEI7UUFDMUIsaUNBQWlDO1FBQ2pDLGdDQUFnQztRQUNoQyxrQ0FBa0M7UUFDbEMsd0JBQXdCO1FBQ3hCLG1DQUFtQztRQUNuQywwQkFBMEI7UUFDMUIsNkJBQTZCO1FBQzdCLHlCQUF5QjtrREFhZCx5QkFBeUI7Y0FWckMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLGFBQWE7b0JBQ2IsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEcmFnRHJvcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQge092ZXJsYXlNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcEF4aXNMb2NrRXhhbXBsZVxufSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtYXhpcy1sb2NrL2Nkay1kcmFnLWRyb3AtYXhpcy1sb2NrLWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcEJvdW5kYXJ5RXhhbXBsZX0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWJvdW5kYXJ5L2Nkay1kcmFnLWRyb3AtYm91bmRhcnktZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcENvbm5lY3RlZFNvcnRpbmdHcm91cEV4YW1wbGVcbn0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWNvbm5lY3RlZC1zb3J0aW5nLWdyb3VwL2Nkay1kcmFnLWRyb3AtY29ubmVjdGVkLXNvcnRpbmctZ3JvdXAtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcENvbm5lY3RlZFNvcnRpbmdFeGFtcGxlXG59IGZyb20gJy4vY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy9jZGstZHJhZy1kcm9wLWNvbm5lY3RlZC1zb3J0aW5nLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrRHJhZ0Ryb3BDdXN0b21QbGFjZWhvbGRlckV4YW1wbGVcbn0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWN1c3RvbS1wbGFjZWhvbGRlci9jZGstZHJhZy1kcm9wLWN1c3RvbS1wbGFjZWhvbGRlci1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka0RyYWdEcm9wQ3VzdG9tUHJldmlld0V4YW1wbGVcbn0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3L2Nkay1kcmFnLWRyb3AtY3VzdG9tLXByZXZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wRGVsYXlFeGFtcGxlfSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtZGVsYXkvY2RrLWRyYWctZHJvcC1kZWxheS1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka0RyYWdEcm9wRGlzYWJsZWRTb3J0aW5nRXhhbXBsZVxufSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQtc29ydGluZy9jZGstZHJhZy1kcm9wLWRpc2FibGVkLXNvcnRpbmctZXhhbXBsZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wRGlzYWJsZWRFeGFtcGxlfSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQvY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka0RyYWdEcm9wRW50ZXJQcmVkaWNhdGVFeGFtcGxlXG59IGZyb20gJy4vY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUvY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcEZyZWVEcmFnUG9zaXRpb25FeGFtcGxlXG59IGZyb20gJy4vY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24vY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24tZXhhbXBsZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wSGFuZGxlRXhhbXBsZX0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWhhbmRsZS9jZGstZHJhZy1kcm9wLWhhbmRsZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka0RyYWdEcm9wSG9yaXpvbnRhbFNvcnRpbmdFeGFtcGxlXG59IGZyb20gJy4vY2RrLWRyYWctZHJvcC1ob3Jpem9udGFsLXNvcnRpbmcvY2RrLWRyYWctZHJvcC1ob3Jpem9udGFsLXNvcnRpbmctZXhhbXBsZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2Nkay1kcmFnLWRyb3Atb3ZlcnZpZXcvY2RrLWRyYWctZHJvcC1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka0RyYWdEcm9wUm9vdEVsZW1lbnRFeGFtcGxlXG59IGZyb20gJy4vY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQvY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQtZXhhbXBsZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wU29ydGluZ0V4YW1wbGV9IGZyb20gJy4vY2RrLWRyYWctZHJvcC1zb3J0aW5nL2Nkay1kcmFnLWRyb3Atc29ydGluZy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQ2RrRHJhZ0Ryb3BBeGlzTG9ja0V4YW1wbGUsXG4gIENka0RyYWdEcm9wQm91bmRhcnlFeGFtcGxlLFxuICBDZGtEcmFnRHJvcENvbm5lY3RlZFNvcnRpbmdFeGFtcGxlLFxuICBDZGtEcmFnRHJvcENvbm5lY3RlZFNvcnRpbmdHcm91cEV4YW1wbGUsXG4gIENka0RyYWdEcm9wQ3VzdG9tUGxhY2Vob2xkZXJFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEN1c3RvbVByZXZpZXdFeGFtcGxlLFxuICBDZGtEcmFnRHJvcERlbGF5RXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BEaXNhYmxlZEV4YW1wbGUsXG4gIENka0RyYWdEcm9wRGlzYWJsZWRTb3J0aW5nRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BFbnRlclByZWRpY2F0ZUV4YW1wbGUsXG4gIENka0RyYWdEcm9wRnJlZURyYWdQb3NpdGlvbkV4YW1wbGUsXG4gIENka0RyYWdEcm9wSGFuZGxlRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BIb3Jpem9udGFsU29ydGluZ0V4YW1wbGUsXG4gIENka0RyYWdEcm9wT3ZlcnZpZXdFeGFtcGxlLFxuICBDZGtEcmFnRHJvcFJvb3RFbGVtZW50RXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BTb3J0aW5nRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtEcmFnRHJvcEF4aXNMb2NrRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BCb3VuZGFyeUV4YW1wbGUsXG4gIENka0RyYWdEcm9wQ29ubmVjdGVkU29ydGluZ0V4YW1wbGUsXG4gIENka0RyYWdEcm9wQ29ubmVjdGVkU29ydGluZ0dyb3VwRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BDdXN0b21QbGFjZWhvbGRlckV4YW1wbGUsXG4gIENka0RyYWdEcm9wQ3VzdG9tUHJldmlld0V4YW1wbGUsXG4gIENka0RyYWdEcm9wRGVsYXlFeGFtcGxlLFxuICBDZGtEcmFnRHJvcERpc2FibGVkRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BEaXNhYmxlZFNvcnRpbmdFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEVudGVyUHJlZGljYXRlRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BGcmVlRHJhZ1Bvc2l0aW9uRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BIYW5kbGVFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEhvcml6b250YWxTb3J0aW5nRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BPdmVydmlld0V4YW1wbGUsXG4gIENka0RyYWdEcm9wUm9vdEVsZW1lbnRFeGFtcGxlLFxuICBDZGtEcmFnRHJvcFNvcnRpbmdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIERyYWdEcm9wTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=