import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ModalService } from './data-access/modal.service';
import { ModalComponent } from './features/shell/modal.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
    imports: [
        CommonModule,
        DirectivesModule
    ],
    declarations: [
        ModalComponent
    ],
    exports: [
        ModalComponent
    ],
    providers: [
        ModalService
    ]
})
export class ModalModule { }