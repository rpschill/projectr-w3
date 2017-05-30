import { Component } from '@angular/core';
import { OfflineService } from './providers/offline.service';

@Component({
  selector: 'pr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    

    constructor( private offline: OfflineService ) {
        
    }
}
