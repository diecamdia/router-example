import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

// import { CrisisListComponent }    from './crisis-center-list.component';
// import { CrisisDetailComponent }  from './crisis-center-detail.component';
// import { CrisisCenterComponent }  from './crisis-center.component';
// import { CrisisCenterHomeComponent } from './crisis-center-home.component';

import { CRISIS_COMPONENTS } from './index';

import { CrisisService } from './crisis-center.service';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule
  ],
  declarations: [
    // CrisisListComponent,
    // CrisisDetailComponent,
    // CrisisCenterComponent,
    // CrisisCenterHomeComponent
    CRISIS_COMPONENTS
  ],
  providers: [
    CrisisService
  ]
})
export class CrisisCenterModule {}
