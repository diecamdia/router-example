import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { HeroesModule } from './heros/heroes.module';
import { PageNotFoundComponent } from './not-found.component';
import { ComposeMessageComponent } from './compose-message.component';
// import { AdminModule } from './admin/admin.module';
import { LoginRoutingModule }      from './login-routing.module';
import { LoginComponent }          from './login.component';
import { DialogService }           from './dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesModule,
    // AdminModule,
    // CrisisCenterModule,  
    LoginRoutingModule,  
    AppRoutingModule
  ],
  providers: [ DialogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
