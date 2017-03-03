import { Component } from '@angular/core';
import {Logger } from './LoggerService';

@Component({
  selector: 'sec-root',
  template: `
 <div class="container">
<h1>
  {{title}}
</h1>
<h3>App component 2 is loaded..</h3>  
  <div class="container-fluid">
<div class="jumbotron">
<h2>App Componenet 2</h2>
<h4><i>Count of Logs is: </i>{{counter}}</h4>
</div>
</div>
</div>`,
  
 
})

export class AppComponent2 {
	title = 'AppComponent 2';
	 counter:number;
	constructor(private logger:Logger)
	{
		logger.getLog("This is App2 Log..");	
		this.counter=logger.getCounter();
	}
	
}
