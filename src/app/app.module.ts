import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home/home.component';
import { SnowboardsComponent } from './snowboards/snowboards.component';
import { LongboardsComponent } from './longboards/longboards.component';
import { ApparelComponent } from './apparel/apparel.component';
import { CompanyComponent } from './company/company.component';
import { SnowboardsVideosComponent } from './snowboards/snowboards-videos/snowboards-videos.component';
import { SnowboardsTechComponent } from './snowboards/snowboards-tech/snowboards-tech.component';
import { SnowboardsTeamComponent } from './snowboards/snowboards-team/snowboards-team.component';
import { LongboardsVideosComponent } from './longboards/longboards-videos/longboards-videos.component';
import { LongboardsTechComponent } from './longboards/longboards-tech/longboards-tech.component';
import { LongboardsTeamComponent } from './longboards/longboards-team/longboards-team.component';
import { ContactComponent } from './company/contact/contact.component';
import { CompanyContactComponent } from './company/company-contact/company-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SnowboardsComponent,
    LongboardsComponent,
    ApparelComponent,
    CompanyComponent,
    SnowboardsVideosComponent,
    SnowboardsTechComponent,
    SnowboardsTeamComponent,
    LongboardsVideosComponent,
    LongboardsTechComponent,
    LongboardsTeamComponent,
    ContactComponent,
    CompanyContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
