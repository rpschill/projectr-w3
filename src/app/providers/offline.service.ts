import { Injectable, HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class OfflineService {

    private isConnected: Boolean;

    constructor( ) {}

    watchConnection() {
        let connectedRef = firebase.database().ref( '.info/connected' );
        connectedRef
            .on( 'value', function ( snap ) {
                if ( snap.val() === true ) {
                    this.isConnected = true;
            }
        })
    }

}
