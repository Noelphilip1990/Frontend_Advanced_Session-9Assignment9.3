import {Injectable} from '@angular/core';
@Injectable()
export class Logger
{
	log :string[]=[];
	public count:number=0;
	constructor()
	{
		console.log("Array of Logs:");
		console.log(this.log);
		
	}
	getLog(logs:string)
	{
		this.count++;
		this.log.push(logs);
		console.log(logs);
	}
	getCounter():number
	{
		return this.count;
	}
}
