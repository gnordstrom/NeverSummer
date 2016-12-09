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
import { Ns25GreyComponent } from './store/special-edition/ns25-grey/ns25-grey.component';
import { Ns25GloveComponent } from './store/special-edition/ns25-glove/ns25-glove.component';
import { Ns25MittComponent } from './store/special-edition/ns25-mitt/ns25-mitt.component';
import { Ns25KnifeComponent } from './store/special-edition/ns25-knife/ns25-knife.component';
import { LongboardsTeamAlecOlguinComponent } from './longboards/longboards-team/longboards-team-alec-olguin/longboards-team-alec-olguin.component';
import { LongboardsTeamDaveMortonComponent } from './longboards/longboards-team/longboards-team-dave-morton/longboards-team-dave-morton.component';
import { LongboardsTeamLyleHansbergerComponent } from './longboards/longboards-team/longboards-team-lyle-hansberger/longboards-team-lyle-hansberger.component';
import { LongboardsTeamTyeDonnellyComponent } from './longboards/longboards-team/longboards-team-tye-donnelly/longboards-team-tye-donnelly.component';
import { LongboardsTeamZachBaileyComponent } from './longboards/longboards-team/longboards-team-zach-bailey/longboards-team-zach-bailey.component';
import { SnowboardsTeamAndrewBuerginComponent } from './snowboards/snowboards-team/snowboards-team-andrew-buergin/snowboards-team-andrew-buergin.component';
import { SnowboardsTeamAustinGibneyComponent } from './snowboards/snowboards-team/snowboards-team-austin-gibney/snowboards-team-austin-gibney.component';
import { SnowboardsTeamBillRodriguezComponent } from './snowboards/snowboards-team/snowboards-team-bill-rodriguez/snowboards-team-bill-rodriguez.component';
import { SnowboardsTeamBradyFarrComponent } from './snowboards/snowboards-team/snowboards-team-brady-farr/snowboards-team-brady-farr.component';
import { SnowboardsTeamBrockButterfieldComponent } from './snowboards/snowboards-team/snowboards-team-brock-butterfield/snowboards-team-brock-butterfield.component';
import { SnowboardsTeamByronBagwellComponent } from './snowboards/snowboards-team/snowboards-team-byron-bagwell/snowboards-team-byron-bagwell.component';
import { SnowboardsTeamCaseyLucasComponent } from './snowboards/snowboards-team/snowboards-team-casey-lucas/snowboards-team-casey-lucas.component';
import { SnowboardsTeamCatherineEaglesComponent } from './snowboards/snowboards-team/snowboards-team-catherine-eagles/snowboards-team-catherine-eagles.component';
import { SnowboardsTeamCharlieHochComponent } from './snowboards/snowboards-team/snowboards-team-charlie-hoch/snowboards-team-charlie-hoch.component';
import { SnowboardsTeamChaseBlackwellComponent } from './snowboards/snowboards-team/snowboards-team-chase-blackwell/snowboards-team-chase-blackwell.component';
import { SnowboardsTeamChrisCorningComponent } from './snowboards/snowboards-team/snowboards-team-chris-corning/snowboards-team-chris-corning.component';
import { SnowboardsTeamChrisGalvinComponent } from './snowboards/snowboards-team/snowboards-team-chris-galvin/snowboards-team-chris-galvin.component';
import { SnowboardsTeamChrisLynchComponent } from './snowboards/snowboards-team/snowboards-team-chris-lynch/snowboards-team-chris-lynch.component';
import { SnowboardsTeamCooperSclarComponent } from './snowboards/snowboards-team/snowboards-team-cooper-sclar/snowboards-team-cooper-sclar.component';
import { SnowboardsTeamDevinWhiteleyComponent } from './snowboards/snowboards-team/snowboards-team-devin-whiteley/snowboards-team-devin-whiteley.component';
import { SnowboardsTeamEveretteSimmonsComponent } from './snowboards/snowboards-team/snowboards-team-everette-simmons/snowboards-team-everette-simmons.component';
import { SnowboardsTeamIanSmithComponent } from './snowboards/snowboards-team/snowboards-team-ian-smith/snowboards-team-ian-smith.component';
import { SnowboardsTeamJacobCareyComponent } from './snowboards/snowboards-team/snowboards-team-jacob-carey/snowboards-team-jacob-carey.component';
import { SnowboardsTeamJakeWilliamsComponent } from './snowboards/snowboards-team/snowboards-team-jake-williams/snowboards-team-jake-williams.component';
import { SnowboardsTeamJasonElmsComponent } from './snowboards/snowboards-team/snowboards-team-jason-elms/snowboards-team-jason-elms.component';
import { SnowboardsTeamJasonHindmanComponent } from './snowboards/snowboards-team/snowboards-team-jason-hindman/snowboards-team-jason-hindman.component';
import { SnowboardsTeamJustinHeniginComponent } from './snowboards/snowboards-team/snowboards-team-justin-henigin/snowboards-team-justin-henigin.component';
import { SnowboardsTeamKevinBlueComponent } from './snowboards/snowboards-team/snowboards-team-kevin-blue/snowboards-team-kevin-blue.component';
import { SnowboardsTeamMaryBoddingtonComponent } from './snowboards/snowboards-team/snowboards-team-mary-boddington/snowboards-team-mary-boddington.component';
import { SnowboardsTeamMikeHoodComponent } from './snowboards/snowboards-team/snowboards-team-mike-hood/snowboards-team-mike-hood.component';
import { SnowboardsTeamMikeyMarohnComponent } from './snowboards/snowboards-team/snowboards-team-mikey-marohn/snowboards-team-mikey-marohn.component';
import { SnowboardsTeamNateSheehanComponent } from './snowboards/snowboards-team/snowboards-team-nate-sheehan/snowboards-team-nate-sheehan.component';
import { SnowboardsTeamNickDeciccoComponent } from './snowboards/snowboards-team/snowboards-team-nick-decicco/snowboards-team-nick-decicco.component';
import { SnowboardsTeamNickLarsonComponent } from './snowboards/snowboards-team/snowboards-team-nick-larson/snowboards-team-nick-larson.component';
import { SnowboardsTeamRajatBhyaniComponent } from './snowboards/snowboards-team/snowboards-team-rajat-bhyani/snowboards-team-rajat-bhyani.component';
import { SnowboardsTeamRickRodriguezComponent } from './snowboards/snowboards-team/snowboards-team-rick-rodriguez/snowboards-team-rick-rodriguez.component';
import { SnowboardsTeamSeanFithianComponent } from './snowboards/snowboards-team/snowboards-team-sean-fithian/snowboards-team-sean-fithian.component';
import { SnowboardsTeamTaylorPfaffComponent } from './snowboards/snowboards-team/snowboards-team-taylor-pfaff/snowboards-team-taylor-pfaff.component';
import { SnowboardsTeamTomFloccoComponent } from './snowboards/snowboards-team/snowboards-team-tom-flocco/snowboards-team-tom-flocco.component';
import { SnowboardsTeamTonyPavlantosComponent } from './snowboards/snowboards-team/snowboards-team-tony-pavlantos/snowboards-team-tony-pavlantos.component';
import { ApparelShirtsBoltsLongsleeveComponent } from './store/apparel-shirts/apparel-shirts-bolts-longsleeve/apparel-shirts-bolts-longsleeve.component';
import { ApparelShirtsBoltsTeeComponent } from './store/apparel-shirts/apparel-shirts-bolts-tee/apparel-shirts-bolts-tee.component';
import { ApparelShirtsBulletEagleRaglanComponent } from './store/apparel-shirts/apparel-shirts-bullet-eagle-raglan/apparel-shirts-bullet-eagle-raglan.component';
import { ApparelShirtsBulletEagleTeeComponent } from './store/apparel-shirts/apparel-shirts-bullet-eagle-tee/apparel-shirts-bullet-eagle-tee.component';
import { ApparelShirtsColoradoEagleLongsleeveComponent } from './store/apparel-shirts/apparel-shirts-colorado-eagle-longsleeve/apparel-shirts-colorado-eagle-longsleeve.component';
import { ApparelShirtsColoradoEagleTeeComponent } from './store/apparel-shirts/apparel-shirts-colorado-eagle-tee/apparel-shirts-colorado-eagle-tee.component';
import { ApparelShirtsEagleMountainFillTeeComponent } from './store/apparel-shirts/apparel-shirts-eagle-mountain-fill-tee/apparel-shirts-eagle-mountain-fill-tee.component';
import { ApparelShirtsEagleTeeComponent } from './store/apparel-shirts/apparel-shirts-eagle-tee/apparel-shirts-eagle-tee.component';
import { ApparelShirtsNvrSmrStormLongsleeveComponent } from './store/apparel-shirts/apparel-shirts-nvr-smr-storm-longsleeve/apparel-shirts-nvr-smr-storm-longsleeve.component';
import { ApparelShirtsNvrSmrStormTeeComponent } from './store/apparel-shirts/apparel-shirts-nvr-smr-storm-tee/apparel-shirts-nvr-smr-storm-tee.component';
import { ApparelShirtsPremiumArrowsTeeComponent } from './store/apparel-shirts/apparel-shirts-premium-arrows-tee/apparel-shirts-premium-arrows-tee.component';
import { ApparelShirtsPremiumCorporateTeeComponent } from './store/apparel-shirts/apparel-shirts-premium-corporate-tee/apparel-shirts-premium-corporate-tee.component';
import { ApparelShirtsRipsawRaglanTeeComponent } from './store/apparel-shirts/apparel-shirts-ripsaw-raglan-tee/apparel-shirts-ripsaw-raglan-tee.component';
import { ApparelShirtsRipsawTeeComponent } from './store/apparel-shirts/apparel-shirts-ripsaw-tee/apparel-shirts-ripsaw-tee.component';
import { ApparelShirtsUsaPocketTeeComponent } from './store/apparel-shirts/apparel-shirts-usa-pocket-tee/apparel-shirts-usa-pocket-tee.component';
import { ApparelShirtsWomensArrowsLongsleeveComponent } from './store/apparel-shirts/apparel-shirts-womens-arrows-longsleeve/apparel-shirts-womens-arrows-longsleeve.component';
import { ApparelShirtsWomensColoradoEagleTeeComponent } from './store/apparel-shirts/apparel-shirts-womens-colorado-eagle-tee/apparel-shirts-womens-colorado-eagle-tee.component';
import { ApparelShirtsWomensScriptTeeComponent } from './store/apparel-shirts/apparel-shirts-womens-script-tee/apparel-shirts-womens-script-tee.component';
import { ApparelShirtsWomensProtoRaglanComponent } from './store/apparel-shirts/apparel-shirts-womens-proto-raglan/apparel-shirts-womens-proto-raglan.component';
import { ApparelShirtsBoysBulletEagleTeeComponent } from './store/apparel-shirts/apparel-shirts-boys-bullet-eagle-tee/apparel-shirts-boys-bullet-eagle-tee.component';
import { ApparelShirtsBoysColoradoEagleTeeComponent } from './store/apparel-shirts/apparel-shirts-boys-colorado-eagle-tee/apparel-shirts-boys-colorado-eagle-tee.component';

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
    Ns25GreyComponent,
    Ns25GloveComponent,
    Ns25MittComponent,
    Ns25KnifeComponent,
    LongboardsTeamAlecOlguinComponent,
    LongboardsTeamDaveMortonComponent,
    LongboardsTeamLyleHansbergerComponent,
    LongboardsTeamTyeDonnellyComponent,
    LongboardsTeamZachBaileyComponent,
    SnowboardsTeamAndrewBuerginComponent,
    SnowboardsTeamAustinGibneyComponent,
    SnowboardsTeamBillRodriguezComponent,
    SnowboardsTeamBradyFarrComponent,
    SnowboardsTeamBrockButterfieldComponent,
    SnowboardsTeamByronBagwellComponent,
    SnowboardsTeamCaseyLucasComponent,
    SnowboardsTeamCatherineEaglesComponent,
    SnowboardsTeamCharlieHochComponent,
    SnowboardsTeamChaseBlackwellComponent,
    SnowboardsTeamChrisCorningComponent,
    SnowboardsTeamChrisGalvinComponent,
    SnowboardsTeamChrisLynchComponent,
    SnowboardsTeamCooperSclarComponent,
    SnowboardsTeamDevinWhiteleyComponent,
    SnowboardsTeamEveretteSimmonsComponent,
    SnowboardsTeamIanSmithComponent,
    SnowboardsTeamJacobCareyComponent,
    SnowboardsTeamJakeWilliamsComponent,
    SnowboardsTeamJasonElmsComponent,
    SnowboardsTeamJasonHindmanComponent,
    SnowboardsTeamJustinHeniginComponent,
    SnowboardsTeamKevinBlueComponent,
    SnowboardsTeamMaryBoddingtonComponent,
    SnowboardsTeamMikeHoodComponent,
    SnowboardsTeamMikeyMarohnComponent,
    SnowboardsTeamNateSheehanComponent,
    SnowboardsTeamNickDeciccoComponent,
    SnowboardsTeamNickLarsonComponent,
    SnowboardsTeamRajatBhyaniComponent,
    SnowboardsTeamRickRodriguezComponent,
    SnowboardsTeamSeanFithianComponent,
    SnowboardsTeamTaylorPfaffComponent,
    SnowboardsTeamTomFloccoComponent,
    SnowboardsTeamTonyPavlantosComponent,
    ApparelShirtsBoltsLongsleeveComponent,
    ApparelShirtsBoltsTeeComponent,
    ApparelShirtsBulletEagleRaglanComponent,
    ApparelShirtsBulletEagleTeeComponent,
    ApparelShirtsColoradoEagleLongsleeveComponent,
    ApparelShirtsColoradoEagleTeeComponent,
    ApparelShirtsEagleMountainFillTeeComponent,
    ApparelShirtsEagleTeeComponent,
    ApparelShirtsNvrSmrStormLongsleeveComponent,
    ApparelShirtsNvrSmrStormTeeComponent,
    ApparelShirtsPremiumArrowsTeeComponent,
    ApparelShirtsPremiumCorporateTeeComponent,
    ApparelShirtsRipsawRaglanTeeComponent,
    ApparelShirtsRipsawTeeComponent,
    ApparelShirtsUsaPocketTeeComponent,
    ApparelShirtsWomensArrowsLongsleeveComponent,
    ApparelShirtsWomensColoradoEagleTeeComponent,
    ApparelShirtsWomensScriptTeeComponent,
    ApparelShirtsWomensProtoRaglanComponent,
    ApparelShirtsBoysBulletEagleTeeComponent,
    ApparelShirtsBoysColoradoEagleTeeComponent,
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
