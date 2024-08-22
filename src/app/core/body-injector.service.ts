import { ApplicationRef, ComponentRef, EmbeddedViewRef, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class BodyInjectorService {

    constructor(
        private _appRef: ApplicationRef,
        @Inject(DOCUMENT) private _document: Document,
    ) { }

    stackBeforeAppRoot(componentRef: ComponentRef<any>): void {

        const domElement = this.createDomElement(componentRef);

        const appRoot = this._document.body.querySelector('app-root');

        this._document.body.insertBefore(domElement, appRoot);

    }

    private createDomElement(componentRef: ComponentRef<any>): HTMLElement {

        this._appRef.attachView(componentRef.hostView);

        const domElement: HTMLElement = (componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0];

        return domElement;

    }

}