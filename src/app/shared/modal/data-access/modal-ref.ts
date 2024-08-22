import { ComponentRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ModalComponent } from '../features/shell/modal.component';

export class ModalRef {
    
    private _afterOpened: Subject<boolean> = new Subject<boolean>();
    private _beforeClosed: Subject<any> = new Subject<any>();
    private _afterClosed: Subject<any> = new Subject<any>();

    constructor(
        private _componentRef: ComponentRef<ModalComponent>,
    ) { }

    private execBeforeClosed(result: any) {

        this._beforeClosed.next(result);
        this._beforeClosed.complete();

    }

    private execAfterClosed(result: any) {

        this._afterClosed.next(result);
        this._afterClosed.complete();

    }

    protected execAfterOpened() {

        this._afterOpened.next(true);
        this._afterOpened.complete();

    }

    close(result?: any): void {

        this.execBeforeClosed(result);

        this._componentRef.destroy();

        this.execAfterClosed(result);

    }

    beforeClosed(): Observable<any> {

        return this._beforeClosed.asObservable();

    }

    afterClosed(): Observable<any> {

        return this._afterClosed.asObservable();

    }

    afterOpened(): Observable<any> {

        return this._afterOpened.asObservable();

    }

}