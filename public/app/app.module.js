import {NgModule}      from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {HttpModule, Http}    from '@angular/http';

import {AppComponent}   from './app.component';

import {Login} from 'app/pages/login/login';

import {routing} from 'app/routes';

@NgModule({
	imports: [
		BrowserModule, 
		FormsModule, 
		routing,
		HttpModule,
	],
	declarations: [
		AppComponent,
		Login		
	],
	providers: [
		{provide: APP_BASE_HREF, useValue : '/' }
	],
	bootstrap: [AppComponent]
})
export class AppModule {}