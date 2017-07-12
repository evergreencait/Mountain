import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { PassesComponent }   from './passes/passes.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
  path: 'about',
  component: AboutComponent
  },
  {
    path: 'passes',
    component: PassesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
