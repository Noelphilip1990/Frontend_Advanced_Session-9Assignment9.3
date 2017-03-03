import { Component } from '@angular/core';
import {Logger} from './LoggerService'
@Component({

	selector:'header',
	template:`
	<h2>Header Component<h2>
	`
})
export class Header{

	constructor(private logger:Logger){
		logger.getLog("This is Header Log..");
	}
}