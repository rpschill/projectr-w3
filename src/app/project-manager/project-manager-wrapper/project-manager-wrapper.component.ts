import { Component, OnInit } from '@angular/core';

@Component( {
    templateUrl: './project-manager-wrapper.component.html',
    styleUrls: [ './project-manager-wrapper.component.css' ]
} )
export class ProjectManagerWrapperComponent implements OnInit {

    private sidebarOpen: Boolean = false;

    constructor() { }

    w3_open() {
        this.sidebarOpen = true;
    }

    w3_close() {
        this.sidebarOpen = false;
    }

    ngOnInit() {
    }

}
