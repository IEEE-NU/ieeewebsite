import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EducateComponent } from './educate/educate.component';
import { ExploreComponent } from './explore/explore.component';
import { EngageComponent } from './engage/engage.component';

import { routing } from './app.routing';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducateComponent,
    ExploreComponent,
    EngageComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
