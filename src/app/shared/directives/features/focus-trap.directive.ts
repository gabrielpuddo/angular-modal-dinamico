import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject } from '@angular/core';

@Directive({
    selector: '[focusTrap]'
})
export class FocusTrapDirective {

    private firstElement: HTMLElement;
    private lastElement: HTMLElement;

    constructor(
        private _elementRef: ElementRef<any>,
        @Inject(DOCUMENT) private _document: Document,
    ) { }

    ngAfterViewInit() {

        const focusableElements = this._elementRef.nativeElement.querySelectorAll(`
            [tabindex]:not([tabindex="-1"]),
            a[href]:not([disabled]),
            button:not([disabled]),
            textarea:not([disabled]),
            input:not([disabled]),
            select:not([disabled])
        `) as HTMLElement[];

        this.firstElement = focusableElements[0];
        this.lastElement = focusableElements[focusableElements.length - 1];

        this.firstElement.focus();

    }

    @HostListener('keydown', ['$event'])
    tabTrap(event: KeyboardEvent) {

        if (event.key != 'Tab') {
            return;
        }

        // SHIFT + TAB
        // do primeiro PARA o ultimo
        if (event.shiftKey && this._document.activeElement == this.firstElement) {

            this.lastElement.focus();

            // não deixar o tab executar
            event.preventDefault();

        } else if (!event.shiftKey && this._document.activeElement == this.lastElement) {
            // TAB
            // do ultimo PARA o primeiro

            this.firstElement.focus();

            // não deixar o tab executar
            event.preventDefault();

        }

    }

}