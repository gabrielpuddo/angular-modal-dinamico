import { Component, HostBinding, TemplateRef } from '@angular/core';
import { ModalConfig } from '../../data-access/modal.model';
import { ModalRef } from '../../data-access/modal-ref';
import { fade } from '../../../animations/fade';

@Component({
    selector: 'app-modal',
    templateUrl: 'modal.component.html',
    styleUrl: 'modal.component.scss',
    animations: [fade]
})
export class ModalComponent {

    @HostBinding('@fade') fade = true;

    _modalRef: ModalRef;
    
    component: TemplateRef<any>;
    config: ModalConfig;

    constructor() { }

    ngOnInit() {

        if (this._modalRef) {
            this._modalRef['execAfterOpened']();
        }

    }

    close(): void {

        this._modalRef.close();

    }

    ok(): void {

        this._modalRef.close();

    }

}