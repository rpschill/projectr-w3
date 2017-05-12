import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

import { afAuth } from '../providers/afAuth';

@Component({
  selector: 'pr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    user: Observable<any>;

    constructor( public auth: afAuth, private router: Router ) { }

    login() {
        this.auth.login()
            .then( data => {
                this.user = data;
                this.router.navigate( [ 'manager' ] );
            } );
    }

}
