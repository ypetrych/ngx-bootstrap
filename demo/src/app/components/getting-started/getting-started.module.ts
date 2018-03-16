import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DocsModule } from '../../docs';
import { GettingStartedComponent } from './getting-started.component';
import { routes } from './getting-started.routes';

@NgModule({
  declarations: [
    GettingStartedComponent
  ],
  imports: [
    DocsModule,
    RouterModule.forChild(routes)
  ],
  exports: [GettingStartedComponent]
})
export class GettingStartedModule {}
