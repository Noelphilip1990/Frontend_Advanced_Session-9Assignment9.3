import { Component } from '@angular/core';
import {Home} from './app.HomeComponent';
import {Logger} from './LoggerService'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})

export class AppComponent {
	title = 'AppComponent 1';

	constructor(private logger:Logger)
	{
		logger.getLog("This is App1 Log..");
	}
	
}
