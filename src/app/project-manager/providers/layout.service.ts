import { Observable, Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class LayoutService {

    isSidebarVisible: boolean = false;

    sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();

    constructor() {
        this.sidebarVisibilityChange.subscribe(( value ) => {
            this.isSidebarVisible = value;
        } );
    }

    toggleSidebarVisibility() {
        this.sidebarVisibilityChange.next( !this.isSidebarVisible );
    }

}
