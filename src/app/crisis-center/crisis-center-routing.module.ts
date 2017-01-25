import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent } from './crisis-center-list.component';
import { CrisisDetailComponent } from './crisis-center-detail.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';

import { CanDeactivateGuard } from '../can-deactivate-guard.service';
import { CrisisDetailResolver } from './crisis-detail-resolver.service';

const crisesRoutes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            canDeactivate: [CanDeactivateGuard],
            component: CrisisDetailComponent,
            resolve: {
              crisis: CrisisDetailResolver
            }
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisesRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CrisisDetailResolver
  ]
})
export class CrisisCenterRoutingModule { }
