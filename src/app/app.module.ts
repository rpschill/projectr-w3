import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { afAuth } from './providers/afAuth';
import { afFolders } from './providers/afFolders.service';

@NgModule( {
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        AngularFireModule.initializeApp( environment.firebase ),
        AngularFireAuthModule,
        AngularFireDatabaseModule
    ],
    providers: [
        afAuth,
        afFolders
    ],
    bootstrap: [ AppComponent ]
} )
export class AppModule { }
