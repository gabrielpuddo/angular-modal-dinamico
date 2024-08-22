import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FocusTrapDirective } from './features/focus-trap.directive';
import { FocusBackDirective } from './features/focus-back.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FocusTrapDirective,
        FocusBackDirective
    ],
    exports: [
        FocusTrapDirective,
        FocusBackDirective
    ]
})
export class DirectivesModule { }