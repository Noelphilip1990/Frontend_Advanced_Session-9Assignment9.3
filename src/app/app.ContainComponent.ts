import { Component } from '@angular/core';
import {Logger} from './LoggerService';
@Component({

	selector:'contain',
	template:`
	<h2>Contain Component<h2>
	`
})
export class Contain{

	constructor(private logger:Logger){
		logger.getLog("This is Container Log..");
	}
}