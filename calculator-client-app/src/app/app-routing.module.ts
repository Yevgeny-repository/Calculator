// NG
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// APP
import { CalculatePageComponent } from '@features/components/calculate-page/calculate-page.component';
import { HomePageComponent } from '@features/components/home-page/home-page.component';


const routes: Routes = [
  { 
    path: 'home-page',
    component: HomePageComponent,
  },
  { 
    path: 'calculate-page',
    component: CalculatePageComponent,
  },
  { path: '',   redirectTo: '/home-page', pathMatch: 'full' }, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
