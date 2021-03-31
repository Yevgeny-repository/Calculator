// NG
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// APP
import { CalculatePageModule } from './components/calculate-page/calculate-page.module';
import { HomePageModule } from './components/home-page/home-page.module';


@NgModule({
	imports: [
		CommonModule,
	],
	exports: [
		CalculatePageModule,
		HomePageModule,
	],
	declarations: []
})
export class FeatureModule {
}
