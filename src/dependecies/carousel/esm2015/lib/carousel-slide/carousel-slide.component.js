/**
 * @fileoverview added by tsickle
 * Generated from: lib/carousel-slide/carousel-slide.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class MatCarouselSlideComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.overlayColor = '#00000040';
        this.hideOverlay = false;
        this.ariaLabel = '';
        this.disabled = false; // implements ListKeyManagerOption
        // implements ListKeyManagerOption
        this.load = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.image) {
            this.image = this.sanitizer.bypassSecurityTrustStyle(`url("${this.image}")`);
        }
    }
}
MatCarouselSlideComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-carousel-slide',
                template: "<ng-template>\n  <div class=\"carousel-slide\" [style.background-image]=\"image\">\n    <div class=\"carousel-slide-content\"><ng-content></ng-content></div>\n    <div\n      *ngIf=\"!hideOverlay\"\n      class=\"carousel-slide-overlay\"\n      [attr.aria-label] = \"ariaLabel\"\n      [style.background-color]=\"overlayColor\"\n    ></div>\n  </div>\n</ng-template>\n",
                styles: [".carousel-slide{background-position:50%;background-repeat:no-repeat;background-size:contain}.carousel-slide,.carousel-slide-overlay{height:100%;position:absolute;width:100%;z-index:auto}.carousel-slide-content{height:100%;position:absolute;width:100%;z-index:1}"]
            }] }
];
/** @nocollapse */
MatCarouselSlideComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
MatCarouselSlideComponent.propDecorators = {
    image: [{ type: Input }],
    overlayColor: [{ type: Input }],
    hideOverlay: [{ type: Input }],
    ariaLabel: [{ type: Input }],
    disabled: [{ type: Input }],
    load: [{ type: Input }],
    templateRef: [{ type: ViewChild, args: [TemplateRef,] }]
};
if (false) {
    /** @type {?} */
    MatCarouselSlideComponent.prototype.image;
    /** @type {?} */
    MatCarouselSlideComponent.prototype.overlayColor;
    /** @type {?} */
    MatCarouselSlideComponent.prototype.hideOverlay;
    /** @type {?} */
    MatCarouselSlideComponent.prototype.ariaLabel;
    /** @type {?} */
    MatCarouselSlideComponent.prototype.disabled;
    /** @type {?} */
    MatCarouselSlideComponent.prototype.load;
    /** @type {?} */
    MatCarouselSlideComponent.prototype.templateRef;
    /** @type {?} */
    MatCarouselSlideComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtc2xpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2Nhcm91c2VsL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jYXJvdXNlbC1zbGlkZS9jYXJvdXNlbC1zbGlkZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCxXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQWEsTUFBTSwyQkFBMkIsQ0FBQztBQVNwRSxNQUFNLE9BQU8seUJBQXlCOzs7O0lBV3BDLFlBQW1CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFSMUIsaUJBQVksR0FBRyxXQUFXLENBQUM7UUFDM0IsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxrQ0FBa0M7O1FBQ3BELFNBQUksR0FBRyxLQUFLLENBQUM7SUFLN0IsQ0FBQzs7OztJQUVNLFFBQVE7UUFDYixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztTQUM5RTtJQUNILENBQUM7OztZQXZCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsNFhBQThDOzthQUUvQzs7OztZQVJRLFlBQVk7OztvQkFXbEIsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLO21CQUNMLEtBQUs7MEJBRUwsU0FBUyxTQUFDLFdBQVc7Ozs7SUFQdEIsMENBQWlDOztJQUNqQyxpREFBMkM7O0lBQzNDLGdEQUFvQzs7SUFDcEMsOENBQStCOztJQUMvQiw2Q0FBaUM7O0lBQ2pDLHlDQUE2Qjs7SUFFN0IsZ0RBQTZEOztJQUVqRCw4Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0S2V5TWFuYWdlck9wdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IE1hdENhcm91c2VsU2xpZGUgfSBmcm9tICcuL2Nhcm91c2VsLXNsaWRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LWNhcm91c2VsLXNsaWRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLXNsaWRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2Fyb3VzZWwtc2xpZGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRDYXJvdXNlbFNsaWRlQ29tcG9uZW50XG4gIGltcGxlbWVudHMgTGlzdEtleU1hbmFnZXJPcHRpb24sIE1hdENhcm91c2VsU2xpZGUsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBpbWFnZTogU2FmZVN0eWxlO1xuICBASW5wdXQoKSBwdWJsaWMgb3ZlcmxheUNvbG9yID0gJyMwMDAwMDA0MCc7XG4gIEBJbnB1dCgpIHB1YmxpYyBoaWRlT3ZlcmxheSA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgYXJpYUxhYmVsID0gJyc7XG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlOyAvLyBpbXBsZW1lbnRzIExpc3RLZXlNYW5hZ2VyT3B0aW9uXG4gIEBJbnB1dCgpIHB1YmxpYyBsb2FkID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgcHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmltYWdlKSB7XG4gICAgICB0aGlzLmltYWdlID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFN0eWxlKGB1cmwoXCIke3RoaXMuaW1hZ2V9XCIpYCk7XG4gICAgfVxuICB9XG59XG4iXX0=