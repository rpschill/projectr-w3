import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutService } from './providers/layout.service';

import { ProjectManagerWrapperComponent } from './project-manager-wrapper/project-manager-wrapper.component';

import { ProjectManagerRoutingModule } from './project-manager-routing.module';
import { SidebarFoldersComponent } from './sidebar-folders/sidebar-folders.component';
import { TodayComponent } from './today/today.component';
import { InboxComponent } from './inbox/inbox.component';
import { ProjectComponent } from './project/project.component';
import { FolderComponent } from './folder/folder.component';
import { ContentEditableDirective } from '../content-editable.directive';


@NgModule( {
    imports: [
        CommonModule,
        ProjectManagerRoutingModule
    ],
    declarations: [
        ProjectManagerWrapperComponent,
        SidebarFoldersComponent,
        TodayComponent,
        InboxComponent,
        ProjectComponent,
        FolderComponent,
        ContentEditableDirective
    ],
    providers: [
        LayoutService
    ]
} )
export class ProjectManagerModule { }
