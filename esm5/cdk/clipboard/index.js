import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CdkClipboardOverviewExample } from './cdk-clipboard-overview/cdk-clipboard-overview-example';
import * as i0 from "@angular/core";
export { CdkClipboardOverviewExample };
var EXAMPLES = [CdkClipboardOverviewExample];
var CdkClipboardExamplesModule = /** @class */ (function () {
    function CdkClipboardExamplesModule() {
    }
    CdkClipboardExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [ClipboardModule, FormsModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    CdkClipboardExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkClipboardExamplesModule });
    CdkClipboardExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkClipboardExamplesModule_Factory(t) { return new (t || CdkClipboardExamplesModule)(); }, imports: [[ClipboardModule, FormsModule]] });
    return CdkClipboardExamplesModule;
}());
export { CdkClipboardExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkClipboardExamplesModule, { declarations: [CdkClipboardOverviewExample], imports: [ClipboardModule, FormsModule], exports: [CdkClipboardOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkClipboardExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [ClipboardModule, FormsModule],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvY2xpcGJvYXJkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQzs7QUFFcEcsT0FBTyxFQUFDLDJCQUEyQixFQUFDLENBQUM7QUFFckMsSUFBTSxRQUFRLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBRS9DO0lBQUE7S0FPQzs7Z0JBUEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxXQUFXLENBQUM7b0JBQ3ZDLFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLFFBQVE7aUJBQzFCOztrRUFDWSwwQkFBMEI7dUlBQTFCLDBCQUEwQixrQkFMNUIsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDO3FDQVZ6QztDQWdCQyxBQVBELElBT0M7U0FEWSwwQkFBMEI7d0ZBQTFCLDBCQUEwQixtQkFSckIsMkJBQTJCLGFBR2pDLGVBQWUsRUFBRSxXQUFXLGFBSHRCLDJCQUEyQjtrREFRaEMsMEJBQTBCO2NBTnRDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDO2dCQUN2QyxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NsaXBib2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NsaXBib2FyZCc7XG5pbXBvcnQge0Nka0NsaXBib2FyZE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9jZGstY2xpcGJvYXJkLW92ZXJ2aWV3L2Nkay1jbGlwYm9hcmQtb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmV4cG9ydCB7Q2RrQ2xpcGJvYXJkT3ZlcnZpZXdFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbQ2RrQ2xpcGJvYXJkT3ZlcnZpZXdFeGFtcGxlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NsaXBib2FyZE1vZHVsZSwgRm9ybXNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrQ2xpcGJvYXJkRXhhbXBsZXNNb2R1bGUge1xufVxuIl19