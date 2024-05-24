import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollectionsComponent } from './collections/collections.component';
import { LawyersComponent } from './lawyers/lawyers.component';
import { AlertsComponent } from './alerts/alerts.component';
import { TermsComponent } from './terms/terms.component';
import { ControlpanelComponent } from './controlpanel/controlpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopbarComponent,
    TopbarComponent,
    NavbarComponent,
    CollectionsComponent,
    LawyersComponent,
    AlertsComponent,
    TermsComponent,
    ControlpanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }                                