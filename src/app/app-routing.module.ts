import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'manager',
                loadChildren: 'app/project-manager/project-manager.module#ProjectManagerModule'
            },
            {
                path: '',
                redirectTo: 'manager',
                pathMatch: 'full'
            }
        ]
    }
]

@NgModule( {
    imports: [
        RouterModule.forRoot( appRoutes )
    ],
    exports: [
        RouterModule
    ],
    declarations: []
} )
export class AppRoutingModule { }