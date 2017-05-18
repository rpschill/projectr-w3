import { Component, OnInit } from '@angular/core';
import { afFolders } from '../../providers/afFolders.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Subscription } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { LayoutService } from '../providers/layout.service';

@Component( {
    selector: 'pr-sidebar-folders',
    templateUrl: './sidebar-folders.component.html',
    styleUrls: [ './sidebar-folders.component.css' ]
} )
export class SidebarFoldersComponent implements OnInit {

    private folderAndProjects: FirebaseListObservable<any[]>;
    private folders: FirebaseListObservable<any[]>;
    private isSidebarVisible: boolean;

    constructor( private afFolders: afFolders, private sidebar: LayoutService ) {
        this.folders = this.afFolders.folders;
    }

    toggleSidebar() {
        this.sidebar.toggleSidebarVisibility();
    }

    expandFolder( folder ) {
        let x = document.getElementById( "folder" );
        if ( x.className.indexOf( "w3-show" ) == -1 ) {
            x.className += " w3-show";
            x.previousElementSibling.className += " w3-green";
        }
        else {
            x.className = x.className.replace( " w3-show", "" );
            x.previousElementSibling.className = x.previousElementSibling.className.replace( " w3-green", "" );
        }
    }

    getFoldersAndProjects() {
        this.afFolders.getFoldersAndProjects()
            .subscribe( data => {
                this.folderAndProjects = data;
                console.log( 'folderAndProjects: ', this.folderAndProjects );
            } );
    }

    checkForProjects( folder ) {
        if ( folder.projectDetails.length > 0 ) {
            return true;
        }
        else {
            return false;
        }
    }

    ngOnInit() {
        this.sidebar.sidebarVisibilityChange
            .subscribe(( value ) => {
                this.isSidebarVisible = value;
            } );
        
        this.getFoldersAndProjects();
    }

}
