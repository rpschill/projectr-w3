import { Injectable, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
    

@Injectable()
export class OfflineService {

    private isOnline: Boolean;

    constructor() { }

    @HostListener('onOffline', ['$event'])
    checkOnline($event: any) {
        this.isOnline = window.navigator.onLine;
        return this.isOnline;
    }

}
