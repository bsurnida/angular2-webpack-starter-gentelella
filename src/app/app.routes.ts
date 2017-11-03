import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { Content } from './content/content.component';
import { Inbox } from './content/inbox.component';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  //{ path: '',      component: HomeComponent },
  { path: '',      component: Content },
  { path: 'inbox',  component: Inbox },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
