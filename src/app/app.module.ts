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
import { ApparelComponent } from './store/apparel.component';
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
import { ApparelShirtsComponent } from './store/apparel-shirts/apparel-shirts.component';

import { HttpService } from './store/http.service';
import { ApparelHoodiesComponent } from './store/apparel-hoodies/apparel-hoodies.component';
import { ApparelHatsComponent } from './store/apparel-hats/apparel-hats.component';
import { ApparelAccessoriesComponent } from './store/apparel-accessories/apparel-accessories.component';
import { ApparelMensComponent } from './store/apparel-mens/apparel-mens.component';
import { ApparelWomensComponent } from './store/apparel-womens/apparel-womens.component';
import { ApparelKidsComponent } from './store/apparel-kids/apparel-kids.component';
import { LongboardsBoardAvalancheComponent } from './longboards/longboards-board-avalanche/longboards-board-avalanche.component';
import { LongboardsBoardClutchComponent } from './longboards/longboards-board-clutch/longboards-board-clutch.component';
import { LongboardsBoardCovertComponent } from './longboards/longboards-board-covert/longboards-board-covert.component';
import { LongboardsBoardDeviantComponent } from './longboards/longboards-board-deviant/longboards-board-deviant.component';
import { LongboardsBoardDimeComponent } from './longboards/longboards-board-dime/longboards-board-dime.component';
import { LongboardsBoardElJefeComponent } from './longboards/longboards-board-el-jefe/longboards-board-el-jefe.component';
import { LongboardsBoardHeistComponent } from './longboards/longboards-board-heist/longboards-board-heist.component';
import { LongboardsBoardReaperComponent } from './longboards/longboards-board-reaper/longboards-board-reaper.component';
import { LongboardsBoardSuperfreakComponent } from './longboards/longboards-board-superfreak/longboards-board-superfreak.component';
import { LongboardsBoardWingmanComponent } from './longboards/longboards-board-wingman/longboards-board-wingman.component';
import { SnowboardsBoardAuraComponent } from './snowboards/snowboards-board-aura/snowboards-board-aura.component';
import { SnowboardsBoardAuraSplitComponent } from './snowboards/snowboards-board-aura-split/snowboards-board-aura-split.component';
import { SnowboardsBoardBantamComponent } from './snowboards/snowboards-board-bantam/snowboards-board-bantam.component';
import { SnowboardsBoardChairmanComponent } from './snowboards/snowboards-board-chairman/snowboards-board-chairman.component';
import { SnowboardsBoardFunslingerComponent } from './snowboards/snowboards-board-funslinger/snowboards-board-funslinger.component';
import { SnowboardsBoardInfinityComponent } from './snowboards/snowboards-board-infinity/snowboards-board-infinity.component';
import { SnowboardsBoardOnyxComponent } from './snowboards/snowboards-board-onyx/snowboards-board-onyx.component';
import { SnowboardsBoardProspectorSplitComponent } from './snowboards/snowboards-board-prospector-split/snowboards-board-prospector-split.component';
import { SnowboardsBoardProtoMiniComponent } from './snowboards/snowboards-board-proto-mini/snowboards-board-proto-mini.component';
import { SnowboardsBoardProtoTypeTwoComponent } from './snowboards/snowboards-board-proto-type-two/snowboards-board-proto-type-two.component';
import { SnowboardsBoardRipsawComponent } from './snowboards/snowboards-board-ripsaw/snowboards-board-ripsaw.component';
import { SnowboardsBoardShredderComponent } from './snowboards/snowboards-board-shredder/snowboards-board-shredder.component';
import { SnowboardsBoardSnowtrooperComponent } from './snowboards/snowboards-board-snowtrooper/snowboards-board-snowtrooper.component';
import { SnowboardsBoardStarletComponent } from './snowboards/snowboards-board-starlet/snowboards-board-starlet.component';
import { SnowboardsBoardSwiftComponent } from './snowboards/snowboards-board-swift/snowboards-board-swift.component';
import { SnowboardsBoardTwentyFiveSplitComponent } from './snowboards/snowboards-board-twenty-five-split/snowboards-board-twenty-five-split.component';
import { SnowboardsBoardTwentyFiveComponent } from './snowboards/snowboards-board-twenty-five/snowboards-board-twenty-five.component';
import { SnowboardsBoardWarlockComponent } from './snowboards/snowboards-board-warlock/snowboards-board-warlock.component';
import { SnowboardsBoardWestComponent } from './snowboards/snowboards-board-west/snowboards-board-west.component';
import { SnowboardsBoardWestSplitComponent } from './snowboards/snowboards-board-west-split/snowboards-board-west-split.component';
import { SnowboardsBoardProtoTypeTwoWomensComponent } from './snowboards/snowboards-board-proto-type-two-womens/snowboards-board-proto-type-two-womens.component';
import { SpecialEditionComponent } from './store/special-edition/special-edition.component';
import { Ns25CamoflaugeComponent } from './store/special-edition/ns25-camoflauge/ns25-camoflauge.component';

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
    LongboardsBoardAvalancheComponent,
    LongboardsBoardClutchComponent,
    LongboardsBoardCovertComponent,
    LongboardsBoardDeviantComponent,
    LongboardsBoardDimeComponent,
    LongboardsBoardElJefeComponent,
    LongboardsBoardHeistComponent,
    LongboardsBoardReaperComponent,
    LongboardsBoardSuperfreakComponent,
    LongboardsBoardWingmanComponent,
    SnowboardsBoardAuraComponent,
    SnowboardsBoardAuraSplitComponent,
    SnowboardsBoardBantamComponent,
    SnowboardsBoardChairmanComponent,
    SnowboardsBoardFunslingerComponent,
    SnowboardsBoardInfinityComponent,
    SnowboardsBoardOnyxComponent,
    SnowboardsBoardProspectorSplitComponent,
    SnowboardsBoardProtoMiniComponent,
    SnowboardsBoardProtoTypeTwoComponent,
    SnowboardsBoardRipsawComponent,
    SnowboardsBoardShredderComponent,
    SnowboardsBoardSnowtrooperComponent,
    SnowboardsBoardStarletComponent,
    SnowboardsBoardSwiftComponent,
    SnowboardsBoardTwentyFiveSplitComponent,
    SnowboardsBoardTwentyFiveComponent,
    SnowboardsBoardWarlockComponent,
    SnowboardsBoardWestComponent,
    SnowboardsBoardWestSplitComponent,
    SnowboardsBoardProtoTypeTwoWomensComponent,
    SpecialEditionComponent,
    Ns25CamoflaugeComponent,
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
