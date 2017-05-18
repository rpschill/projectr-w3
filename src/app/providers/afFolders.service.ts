import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class afFolders {
    
    public folders: FirebaseListObservable<any[]>;

    constructor( public afFolders: AngularFireDatabase ) {
        this.folders = this.afFolders.list( '/folders' );
    }


    // Retrieve project list from folder    
    getProjectsOfFolder( folderId ) {
        let result = this.afFolders.list( '/folders/' + folderId + '/projects' )
            .map( items => {
                for ( let project of items ) {
                    this.afFolders.object( '/projects/' + project.$key )
                        .subscribe( data => {
                            project.details = data;
                        } );
                }
                return items;    
            } )
        return result;
    }

    // Retrieve all folders with project lists
    getFoldersAndProjects() {
        let result = this.afFolders.list( '/folders' )
            .map( items => {
                for ( let folder of items ) {
                    this.getProjectsOfFolder( folder.$key )
                        .subscribe( data => {
                            folder.projectDetails = data;
                        } )
                }
                return items;    
            } )
        return result;
    }
}