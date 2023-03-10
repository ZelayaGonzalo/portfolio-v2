import { ListKeyManagerOption } from '@angular/cdk/a11y';
import { OnInit, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { MatCarouselSlide } from './carousel-slide';
import * as ɵngcc0 from '@angular/core';
export declare class MatCarouselSlideComponent implements ListKeyManagerOption, MatCarouselSlide, OnInit {
    sanitizer: DomSanitizer;
    image: SafeStyle;
    overlayColor: string;
    hideOverlay: boolean;
    ariaLabel: string;
    disabled: boolean;
    load: boolean;
    templateRef: TemplateRef<any>;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MatCarouselSlideComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MatCarouselSlideComponent, "mat-carousel-slide", never, { "overlayColor": "overlayColor"; "hideOverlay": "hideOverlay"; "ariaLabel": "ariaLabel"; "disabled": "disabled"; "load": "load"; "image": "image"; }, {}, never, ["*"], false, never>;
}

//# sourceMappingURL=carousel-slide.component.d.ts.map