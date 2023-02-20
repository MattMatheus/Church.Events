import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapboxComponent } from './mapbox/mapbox.component';
import { FootertextComponent } from './footertext/footertext.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { EventlistComponent } from './eventlist/eventlist.component';

@NgModule({
  declarations: [
    AppComponent,
    MapboxComponent,
    FootertextComponent,
    NavigationComponent,
    SearchboxComponent,
    EventlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
