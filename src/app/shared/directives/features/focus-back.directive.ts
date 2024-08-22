import { DOCUMENT } from '@angular/common';
import { Directive, Inject } from '@angular/core';

@Directive({
    selector: '[focusBack]'
})
export class FocusBackDirective {

    private lastFocusedElement: Element;

    constructor(
        @Inject(DOCUMENT) private _document: Document,
    ) { }

    ngOnInit() {

        if (this._document.activeElement) {

            this.lastFocusedElement = this._document.activeElement;

        }

    }

    ngOnDestroy() {

        if (this.lastFocusedElement) {

            (this.lastFocusedElement as HTMLElement).focus();

        }

    }

}