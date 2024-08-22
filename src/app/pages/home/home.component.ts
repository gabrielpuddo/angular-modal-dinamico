import { Component, TemplateRef, ViewChild, viewChild } from '@angular/core';
import { ModalService } from '../../shared/modal/data-access/modal.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
})
export class HomeComponent {

    @ViewChild('template1') template1: TemplateRef<any>;
    @ViewChild('template2') template2: TemplateRef<any>;

    modalTemplateRef: TemplateRef<any>;

    constructor(
        private _modalService: ModalService,
    ) { }

    openModal(template1: boolean): void {

        let aa = template1 ? this.template1 : this.template2;

        const modalRef = this._modalService.open(aa, {
            title: 'Modal'
        });

        modalRef.afterOpened()
            .subscribe(() => {

                console.log('abriu')

            });

        modalRef.beforeClosed()
            .subscribe(res => {

                console.log('vai fechar')

            });
        
        modalRef.afterClosed()
            .subscribe(res => {

                console.log('fechou')

            });

    }

}