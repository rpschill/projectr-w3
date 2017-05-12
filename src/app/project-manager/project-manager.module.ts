import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProjectManagerWrapperComponent } from './project-manager-wrapper/project-manager-wrapper.component';

import { ProjectManagerRoutingModule } from './project-manager-routing.module';

@NgModule( {
    imports: [
        CommonModule,
        ProjectManagerRoutingModule
    ],
    declarations: [
        ProjectManagerWrapperComponent
    ]
} )
export class ProjectManagerModule { }
