import { LandingComponent } from './common/landing/landing.component';
import { DemoSectionComponent } from './docs';
import { childRoutes } from './components/components.routing';

export const routes = [
  {
    path: '',
    data: ['Landing page'],
    component: LandingComponent
  },
  {
    path: 'docs',
    data: ['docs'],
    component: DemoSectionComponent,
    children: childRoutes
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
