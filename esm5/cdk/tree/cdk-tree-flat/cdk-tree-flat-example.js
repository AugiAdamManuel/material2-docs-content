import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
function CdkTreeFlatExample_cdk_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cdk-tree-node", 3);
    i0.ɵɵelement(1, "button", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var node_r2 = ctx.$implicit;
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("display", ctx_r0.shouldRender(node_r2) ? "flex" : "none");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", node_r2.name, " ");
} }
function CdkTreeFlatExample_cdk_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cdk-tree-node", 3);
    i0.ɵɵelementStart(1, "button", 5);
    i0.ɵɵlistener("click", function CdkTreeFlatExample_cdk_tree_node_2_Template_button_click_1_listener() { var node_r3 = ctx.$implicit; return node_r3.isExpanded = !node_r3.isExpanded; });
    i0.ɵɵelementStart(2, "mat-icon", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var node_r3 = ctx.$implicit;
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("display", ctx_r1.shouldRender(node_r3) ? "flex" : "none");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("visibility", node_r3.expandable ? "visible" : "hidden");
    i0.ɵɵattribute("aria-label", "toggle " + node_r3.filename);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.treeControl.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", node_r3.name, " ");
} }
var TREE_DATA = [
    {
        name: 'Fruit',
        expandable: true,
        level: 0,
    }, {
        name: 'Apple',
        expandable: false,
        level: 1,
    }, {
        name: 'Banana',
        expandable: false,
        level: 1,
    }, {
        name: 'Fruit loops',
        expandable: false,
        level: 1,
    }, {
        name: 'Vegetables',
        expandable: true,
        level: 0,
    }, {
        name: 'Green',
        expandable: true,
        level: 1,
    }, {
        name: 'Broccoli',
        expandable: false,
        level: 2,
    }, {
        name: 'Brussels sprouts',
        expandable: false,
        level: 2,
    }, {
        name: 'Orange',
        expandable: true,
        level: 1,
    }, {
        name: 'Pumpkins',
        expandable: false,
        level: 2,
    }, {
        name: 'Carrots',
        expandable: false,
        level: 2,
    }
];
/**
 * @title Tree with flat nodes
 */
var CdkTreeFlatExample = /** @class */ (function () {
    function CdkTreeFlatExample() {
        this.treeControl = new FlatTreeControl(function (node) { return node.level; }, function (node) { return node.expandable; });
        this.dataSource = new ArrayDataSource(TREE_DATA);
        this.hasChild = function (_, node) { return node.expandable; };
    }
    CdkTreeFlatExample.prototype.getParentNode = function (node) {
        var nodeIndex = TREE_DATA.indexOf(node);
        for (var i = nodeIndex - 1; i >= 0; i--) {
            if (TREE_DATA[i].level === node.level - 1) {
                return TREE_DATA[i];
            }
        }
        return null;
    };
    CdkTreeFlatExample.prototype.shouldRender = function (node) {
        var parent = this.getParentNode(node);
        return !parent || parent.isExpanded;
    };
    CdkTreeFlatExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-tree-flat-example',
                    templateUrl: 'cdk-tree-flat-example.html',
                    styleUrls: ['cdk-tree-flat-example.css'],
                },] },
    ];
    CdkTreeFlatExample.ɵfac = function CdkTreeFlatExample_Factory(t) { return new (t || CdkTreeFlatExample)(); };
    CdkTreeFlatExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkTreeFlatExample, selectors: [["cdk-tree-flat-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["cdkTreeNodePadding", "", "class", "example-tree-node", 3, "display", 4, "cdkTreeNodeDef"], ["cdkTreeNodePadding", "", "class", "example-tree-node", 3, "display", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], ["cdkTreeNodePadding", "", 1, "example-tree-node"], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "cdkTreeNodeToggle", "", 3, "click"], [1, "mat-icon-rtl-mirror"]], template: function CdkTreeFlatExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "cdk-tree", 0);
            i0.ɵɵtemplate(1, CdkTreeFlatExample_cdk_tree_node_1_Template, 3, 3, "cdk-tree-node", 1);
            i0.ɵɵtemplate(2, CdkTreeFlatExample_cdk_tree_node_2_Template, 5, 7, "cdk-tree-node", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("cdkTreeNodeDefWhen", ctx.hasChild);
        } }, directives: [i1.CdkTree, i1.CdkTreeNodeDef, i1.CdkTreeNode, i1.CdkTreeNodePadding, i2.MatButton, i1.CdkTreeNodeToggle, i3.MatIcon], styles: [".example-tree-node[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}"] });
    return CdkTreeFlatExample;
}());
export { CdkTreeFlatExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkTreeFlatExample, [{
        type: Component,
        args: [{
                selector: 'cdk-tree-flat-example',
                templateUrl: 'cdk-tree-flat-example.html',
                styleUrls: ['cdk-tree-flat-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRyZWUtZmxhdC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3RyZWUvY2RrLXRyZWUtZmxhdC9jZGstdHJlZS1mbGF0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9jZGstdHJlZS1mbGF0L2Nkay10cmVlLWZsYXQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDQXRDLHdDQUdFO0lBQ0EsNEJBQTBDO0lBQzFDLFlBQ0Y7SUFBQSxpQkFBZ0I7Ozs7SUFMRCx5RUFBc0Q7SUFJbkUsZUFDRjtJQURFLDZDQUNGOzs7SUFFQSx3Q0FHRTtJQUFBLGlDQUlFO0lBRk0sd0xBQTRDO0lBRWxELG1DQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFXO0lBQ2IsaUJBQVM7SUFDVCxZQUNGO0lBQUEsaUJBQWdCOzs7O0lBWEQseUVBQXNEO0lBSzNELGVBQTJEO0lBQTNELHVFQUEyRDtJQUYzRCwwREFBNkM7SUFJakQsZUFDRjtJQURFLHlHQUNGO0lBRUYsZUFDRjtJQURFLDZDQUNGOztBRGpCRixJQUFNLFNBQVMsR0FBc0I7SUFDbkM7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLEtBQUssRUFBRSxDQUFDO0tBQ1QsRUFBRTtRQUNELElBQUksRUFBRSxPQUFPO1FBQ2IsVUFBVSxFQUFFLEtBQUs7UUFDakIsS0FBSyxFQUFFLENBQUM7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bnRlbnQiOlsiaW1wb3J0IHtBcnJheURhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0ZsYXRUcmVlQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbmNvbnN0IFRSRUVfREFUQTogRXhhbXBsZUZsYXROb2RlW10gPSBbXG4gIHtcbiAgICBuYW1lOiAnRnJ1aXQnLFxuICAgIGV4cGFuZGFibGU6IHRydWUsXG4gICAgbGV2ZWw6IDAsXG4gIH0sIHtcbiAgICBuYW1lOiAnQXBwbGUnLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGxldmVsOiAxLFxuICB9LCB7XG4gICAgbmFtZTogJ0JhbmFuYScsXG4gICAgZXhwYW5kYWJsZTogZmFsc2UsXG4gICAgbGV2ZWw6IDEsXG4gIH0sIHtcbiAgICBuYW1lOiAnRnJ1aXQgbG9vcHMnLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGxldmVsOiAxLFxuICB9LCB7XG4gICAgbmFtZTogJ1ZlZ2V0YWJsZXMnLFxuICAgIGV4cGFuZGFibGU6IHRydWUsXG4gICAgbGV2ZWw6IDAsXG4gIH0sIHtcbiAgICBuYW1lOiAnR3JlZW4nLFxuICAgIGV4cGFuZGFibGU6IHRydWUsXG4gICAgbGV2ZWw6IDEsXG4gIH0sIHtcbiAgICBuYW1lOiAnQnJvY2NvbGknLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGxldmVsOiAyLFxuICB9LCB7XG4gICAgbmFtZTogJ0JydXNzZWxzIHNwcm91dHMnLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGxldmVsOiAyLFxuICB9LCB7XG4gICAgbmFtZTogJ09yYW5nZScsXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICBsZXZlbDogMSxcbiAgfSwge1xuICAgIG5hbWU6ICdQdW1wa2lucycsXG4gICAgZXhwYW5kYWJsZTogZmFsc2UsXG4gICAgbGV2ZWw6IDIsXG4gIH0sIHtcbiAgICBuYW1lOiAnQ2Fycm90cycsXG4gICAgZXhwYW5kYWJsZTogZmFsc2UsXG4gICAgbGV2ZWw6IDIsXG4gIH1cbl07XG5cbi8qKiBGbGF0IG5vZGUgd2l0aCBleHBhbmRhYmxlIGFuZCBsZXZlbCBpbmZvcm1hdGlvbiAqL1xuaW50ZXJmYWNlIEV4YW1wbGVGbGF0Tm9kZSB7XG4gIGV4cGFuZGFibGU6IGJvb2xlYW47XG4gIG5hbWU6IHN0cmluZztcbiAgbGV2ZWw6IG51bWJlcjtcbiAgaXNFeHBhbmRlZD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQHRpdGxlIFRyZWUgd2l0aCBmbGF0IG5vZGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay10cmVlLWZsYXQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXRyZWUtZmxhdC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLXRyZWUtZmxhdC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtUcmVlRmxhdEV4YW1wbGUge1xuICB0cmVlQ29udHJvbCA9IG5ldyBGbGF0VHJlZUNvbnRyb2w8RXhhbXBsZUZsYXROb2RlPihcbiAgICAgIG5vZGUgPT4gbm9kZS5sZXZlbCwgbm9kZSA9PiBub2RlLmV4cGFuZGFibGUpO1xuXG4gIGRhdGFTb3VyY2UgPSBuZXcgQXJyYXlEYXRhU291cmNlKFRSRUVfREFUQSk7XG5cbiAgaGFzQ2hpbGQgPSAoXzogbnVtYmVyLCBub2RlOiBFeGFtcGxlRmxhdE5vZGUpID0+IG5vZGUuZXhwYW5kYWJsZTtcblxuICBnZXRQYXJlbnROb2RlKG5vZGU6IEV4YW1wbGVGbGF0Tm9kZSkge1xuICAgIGNvbnN0IG5vZGVJbmRleCA9IFRSRUVfREFUQS5pbmRleE9mKG5vZGUpO1xuXG4gICAgZm9yIChsZXQgaSA9IG5vZGVJbmRleCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAoVFJFRV9EQVRBW2ldLmxldmVsID09PSBub2RlLmxldmVsIC0gMSkge1xuICAgICAgICByZXR1cm4gVFJFRV9EQVRBW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc2hvdWxkUmVuZGVyKG5vZGU6IEV4YW1wbGVGbGF0Tm9kZSkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50Tm9kZShub2RlKTtcbiAgICByZXR1cm4gIXBhcmVudCB8fCBwYXJlbnQuaXNFeHBhbmRlZDtcbiAgfVxufVxuIiwiPGNkay10cmVlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbdHJlZUNvbnRyb2xdPVwidHJlZUNvbnRyb2xcIj5cbiAgPCEtLSBUaGlzIGlzIHRoZSB0cmVlIG5vZGUgdGVtcGxhdGUgZm9yIGxlYWYgbm9kZXMgLS0+XG4gIDxjZGstdHJlZS1ub2RlICpjZGtUcmVlTm9kZURlZj1cImxldCBub2RlXCIgY2RrVHJlZU5vZGVQYWRkaW5nXG4gICAgICAgICAgICAgICAgIFtzdHlsZS5kaXNwbGF5XT1cInNob3VsZFJlbmRlcihub2RlKSA/ICdmbGV4JyA6ICdub25lJ1wiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS10cmVlLW5vZGVcIj5cbiAgICA8IS0tIHVzZSBhIGRpc2FibGVkIGJ1dHRvbiB0byBwcm92aWRlIHBhZGRpbmcgZm9yIHRyZWUgbGVhZiAtLT5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBkaXNhYmxlZD48L2J1dHRvbj5cbiAgICB7e25vZGUubmFtZX19XG4gIDwvY2RrLXRyZWUtbm9kZT5cbiAgPCEtLSBUaGlzIGlzIHRoZSB0cmVlIG5vZGUgdGVtcGxhdGUgZm9yIGV4cGFuZGFibGUgbm9kZXMgLS0+XG4gIDxjZGstdHJlZS1ub2RlICpjZGtUcmVlTm9kZURlZj1cImxldCBub2RlOyB3aGVuOiBoYXNDaGlsZFwiIGNka1RyZWVOb2RlUGFkZGluZ1xuICAgICAgICAgICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJzaG91bGRSZW5kZXIobm9kZSkgPyAnZmxleCcgOiAnbm9uZSdcIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtdHJlZS1ub2RlXCI+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2RrVHJlZU5vZGVUb2dnbGVcbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ3RvZ2dsZSAnICsgbm9kZS5maWxlbmFtZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwibm9kZS5pc0V4cGFuZGVkID0gIW5vZGUuaXNFeHBhbmRlZFwiXG4gICAgICAgICAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJub2RlLmV4cGFuZGFibGUgPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiPlxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwibWF0LWljb24tcnRsLW1pcnJvclwiPlxuICAgICAgICB7e3RyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSkgPyAnZXhwYW5kX21vcmUnIDogJ2NoZXZyb25fcmlnaHQnfX1cbiAgICAgIDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAge3tub2RlLm5hbWV9fVxuICA8L2Nkay10cmVlLW5vZGU+XG48L2Nkay10cmVlPlxuIl19