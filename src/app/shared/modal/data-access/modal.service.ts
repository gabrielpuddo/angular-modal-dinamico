import { EnvironmentInjector, Injectable, TemplateRef, createComponent } from '@angular/core';

import { ModalConfig } from './modal.model';
import { ModalComponent } from '../features/shell/modal.component';
import { BodyInjectorService } from '../../../core/body-injector.service';
import { ModalRef } from './modal-ref';

@Injectable()
export class ModalService {

    constructor(
        private _bodyInjectorService: BodyInjectorService,
        private _injector: EnvironmentInjector,
    ) { }

    open(component: TemplateRef<any>, config: ModalConfig): ModalRef {

        const componentRef = createComponent(ModalComponent, {
            environmentInjector: this._injector
        });

        componentRef.instance.component = component;
        componentRef.instance.config = config;

        this._bodyInjectorService.stackBeforeAppRoot(componentRef);

        const modalRef = new ModalRef(componentRef);

        componentRef.instance._modalRef = modalRef;

        return modalRef;

    }

}