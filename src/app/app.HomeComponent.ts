import {Component} from '@angular/core';
import {Header} from './app.HeaderComponent'
import {Contain} from './app.ContainComponent'
import {Footer} from './app.FooterComponent'
import {Logger} from './LoggerService'
@Component({
selector:'home',
template:`
<h2>Home component:</h2>
<header></header>
<contain></contain>
<footer></footer>
`
})
export class Home
{

	constructor(private logger:Logger){
	logger.getLog("This is log is in home");
	}
}