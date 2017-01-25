import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent }    from './crisis-center-list.component';
import { CrisisDetailComponent }  from './crisis-center-detail.component';
import { CrisisCenterComponent }  from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';

import { CanDeactivateGuard }    from '../can-deactivate-guard.service';

const crisesRoutes: Routes = [
  {  path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            canDeactivate : [ CanDeactivateGuard ],
            component: CrisisDetailComponent
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
  ]
})
export class CrisisCenterRoutingModule { }
