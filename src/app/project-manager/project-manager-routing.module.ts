import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectManagerWrapperComponent } from './project-manager-wrapper/project-manager-wrapper.component';

const projectManagerRoutes: Routes = [
    {
        path: '',
        component: ProjectManagerWrapperComponent,
    }
];

@NgModule( {
    imports: [
        RouterModule.forChild( projectManagerRoutes )
    ],
    exports: [
        RouterModule
    ]
} )

export class ProjectManagerRoutingModule { }