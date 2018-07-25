import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { DataAccessComponent } from './components/data-access/data-access.component';
import { AppIntegrationsComponent } from './components/app-integrations/app-integrations.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    InboxComponent,
    DataAccessComponent,
    AppIntegrationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
