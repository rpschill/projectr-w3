import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { OfflineService } from './offline.service';

@Injectable()
export class afTasksService {

    public inboxTasks: FirebaseListObservable<any[]>;

    constructor( public afTasks: AngularFireDatabase, private offline: OfflineService ) { }
    
    getInboxTasks() {
        this.inboxTasks = this.afTasks.list( '/inbox', {
            query: {
                orderByChild: 'createdAt'
            }
        } );

        this.inboxTasks
            .map(( tasks ) => {
                for ( let task of tasks ) {
                    if ( task.title === '' ) {

                    }
                }
            } )

        return this.inboxTasks;
    }

    createNewTask( ) {
        let newTask = this.inboxTasks.push( {
            title: '',
            createdAt: firebase.database.ServerValue.TIMESTAMP
        } );
        newTask
            .then(( result ) => {
                console.log( 'Task created successfully: ', result.key );
            } )
            .catch(( error ) => console.log( error, 'No dice on the new task' ) );
    }

    updateTaskTitle( itemId, itemTitle ) {
        let item;
        item = this.afTasks.object( '/tasks' + itemId );
        item
            .map( result => {
                item = result;
                return item;
            } );
        item
            .update( {
                title: itemTitle,
                modifiedAt: firebase.database.ServerValue.TIMESTAMP   
            } );
    }

}
