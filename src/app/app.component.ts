import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ModalModule } from './shared/modal/modal.module';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, ModalModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent { }