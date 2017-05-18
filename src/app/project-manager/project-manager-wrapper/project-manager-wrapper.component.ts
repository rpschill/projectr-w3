import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../providers/layout.service';

@Component( {
    templateUrl: './project-manager-wrapper.component.html',
    styleUrls: [ './project-manager-wrapper.component.css' ]
} )
export class ProjectManagerWrapperComponent implements OnInit {

    sidebarOpen: boolean;

    constructor( private sidebar: LayoutService ) { }

    openResponsiveNavbar() {
        if ( document.getElementById( "global-sidebar" ).style.display === "block" ) {
            document.getElementById( "global-sidebar" ).style.display = "none";
        }
        else {
            document.getElementById( "global-sidebar" ).style.display = "block";
        }
    }

    closeResponsiveNavbar() {
        document.getElementById( "global-sidebar" ).style.display = "none";
    }

    getSidebarVisibility(): boolean {
        return this.sidebar.isSidebarVisible;
    }

    toggleSidebar() {
        this.sidebar.toggleSidebarVisibility();
        console.log( this.sidebarOpen );
    }

    ngOnInit() {
        this.sidebar.sidebarVisibilityChange
            .subscribe( value => {
                this.sidebarOpen = value;
            } );
    }

}
