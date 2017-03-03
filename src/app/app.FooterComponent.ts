import { Component } from '@angular/core';
import {Logger} from './LoggerService';
@Component({

	selector:'footer',
	template:`
	<h2>Footer Component<h2>
	`
})
export class Footer{

	constructor(private logger:Logger){
		logger.getLog("This is Footer Log..");
	}
}