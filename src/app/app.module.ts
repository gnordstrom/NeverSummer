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
import { CompanyContactComponent } from './company/company-contact/company-contact.component';
import { CompanyMotoComponent } from './company/company-moto/company-moto.component';
import { CompanyWarrantyComponent } from './company/company-warranty/company-warranty.component';
import { CompanyNewsComponent } from './company/company-news/company-news.component';
import { CompanyDealersComponent } from './company/company-dealers/company-dealers.component';
import { CompanyInternationalDealersComponent } from './company/company-international-dealers/company-international-dealers.component';
import { CompanyCalendarComponent } from './company/company-calendar/company-calendar.component';
import { ApparelShirtsComponent } from './apparel/apparel-shirts/apparel-shirts.component';

import { HttpService } from './apparel/http.service';
import { ApparelHoodiesComponent } from './apparel/apparel-hoodies/apparel-hoodies.component';
import { ApparelHatsComponent } from './apparel/apparel-hats/apparel-hats.component';
import { ApparelAccessoriesComponent } from './apparel/apparel-accessories/apparel-accessories.component';
import { ApparelMensComponent } from './apparel/apparel-mens/apparel-mens.component';
import { ApparelWomensComponent } from './apparel/apparel-womens/apparel-womens.component';
import { ApparelKidsComponent } from './apparel/apparel-kids/apparel-kids.component';

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
    CompanyContactComponent,
    CompanyMotoComponent,
    CompanyWarrantyComponent,
    CompanyNewsComponent,
    CompanyDealersComponent,
    CompanyInternationalDealersComponent,
    CompanyCalendarComponent,
    ApparelShirtsComponent,
    ApparelHoodiesComponent,
    ApparelHatsComponent,
    ApparelAccessoriesComponent,
    ApparelMensComponent,
    ApparelWomensComponent,
    ApparelKidsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
