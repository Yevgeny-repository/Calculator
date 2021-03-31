// NG
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxNotifierModule } from 'ngx-notifier';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// APP
import { CalculatePageComponent } from './calculate-page.component';

@NgModule({
	declarations: [CalculatePageComponent],
	exports: [CalculatePageComponent],
	imports: [
        CommonModule,
		FormsModule,
		BrowserAnimationsModule,
		HttpClientModule,
		NgxNotifierModule,
		ReactiveFormsModule,
		RouterModule 
	],
})
export class CalculatePageModule {
}
