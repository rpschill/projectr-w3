import { Component, OnInit, Input } from '@angular/core';
import { afTasksService } from '../../providers/afTasks.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component( {
    templateUrl: './inbox.component.html',
    styleUrls: [ './inbox.component.css' ]
} )
export class InboxComponent implements OnInit {

    private allTasks: FirebaseListObservable<any[]>;
    public values;
    public defaultText = 'Enter a new task';

    constructor(private afTasks: afTasksService) { }

    ngOnInit() {
        this.allTasks = this.afTasks.getInboxTasks();
    }

    createNewTask() {
        this.afTasks.createNewTask();
    }

    onTaskChange( ev, task ) {
        this.afTasks.updateTaskTitle( task.$key, ev );
    }

    onKey( ev ) {
        this.values = ev.key;
    }

}
