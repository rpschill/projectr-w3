import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectManagerWrapperComponent } from './project-manager-wrapper/project-manager-wrapper.component';
import { TodayComponent } from './today/today.component';
import { InboxComponent } from './inbox/inbox.component';
import { ProjectComponent } from './project/project.component';
import { FolderComponent } from './folder/folder.component';

const projectManagerRoutes: Routes = [
    {
        path: '',
        component: ProjectManagerWrapperComponent,
        children: [
            {
                path: 'inbox',
                component: InboxComponent,
            },
            {
                path: 'today',
                component: TodayComponent
            },
            {
                path: 'folder',
                component: FolderComponent
            },
            {
                path: 'project',
                component: ProjectComponent
            },
            {
                path: '',
                redirectTo: 'inbox',
                pathMatch: 'full'
            }
        ]
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