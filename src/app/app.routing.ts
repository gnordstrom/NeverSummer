import { Ns25GreyComponent } from './store/special-edition/ns25-grey/ns25-grey.component';
import { Ns25GloveComponent } from './store/special-edition/ns25-glove/ns25-glove.component';
import { Ns25MittComponent } from './store/special-edition/ns25-mitt/ns25-mitt.component';
import { Ns25KnifeComponent } from './store/special-edition/ns25-knife/ns25-knife.component';
import { Ns25CamoflaugeComponent } from './store/special-edition/ns25-camoflauge/ns25-camoflauge.component';
import { SpecialEditionComponent } from './store/special-edition/special-edition.component';
import { SnowboardsBoardWestSplitComponent } from './snowboards/snowboards-board-west-split/snowboards-board-west-split.component';
import { SnowboardsBoardWestComponent } from './snowboards/snowboards-board-west/snowboards-board-west.component';
import { SnowboardsBoardWarlockComponent } from './snowboards/snowboards-board-warlock/snowboards-board-warlock.component';
import { SnowboardsBoardTwentyFiveSplitComponent } from './snowboards/snowboards-board-twenty-five-split/snowboards-board-twenty-five-split.component';
import { SnowboardsBoardTwentyFiveComponent } from './snowboards/snowboards-board-twenty-five/snowboards-board-twenty-five.component';
import { SnowboardsBoardSwiftComponent } from './snowboards/snowboards-board-swift/snowboards-board-swift.component';
import { SnowboardsBoardStarletComponent } from './snowboards/snowboards-board-starlet/snowboards-board-starlet.component';
import { SnowboardsBoardSnowtrooperComponent } from './snowboards/snowboards-board-snowtrooper/snowboards-board-snowtrooper.component';
import { SnowboardsBoardShredderComponent } from './snowboards/snowboards-board-shredder/snowboards-board-shredder.component';
import { SnowboardsBoardRipsawComponent } from './snowboards/snowboards-board-ripsaw/snowboards-board-ripsaw.component';
import { SnowboardsBoardProtoTypeTwoWomensComponent } from './snowboards/snowboards-board-proto-type-two-womens/snowboards-board-proto-type-two-womens.component';
import { SnowboardsBoardProtoTypeTwoComponent } from './snowboards/snowboards-board-proto-type-two/snowboards-board-proto-type-two.component';
import { SnowboardsBoardProtoMiniComponent } from './snowboards/snowboards-board-proto-mini/snowboards-board-proto-mini.component';
import { SnowboardsBoardProspectorSplitComponent } from './snowboards/snowboards-board-prospector-split/snowboards-board-prospector-split.component';
import { SnowboardsBoardOnyxComponent } from './snowboards/snowboards-board-onyx/snowboards-board-onyx.component';
import { SnowboardsBoardInfinityComponent } from './snowboards/snowboards-board-infinity/snowboards-board-infinity.component';
import { SnowboardsBoardFunslingerComponent } from './snowboards/snowboards-board-funslinger/snowboards-board-funslinger.component';
import { SnowboardsBoardChairmanComponent } from './snowboards/snowboards-board-chairman/snowboards-board-chairman.component';
import { SnowboardsBoardBantamComponent } from './snowboards/snowboards-board-bantam/snowboards-board-bantam.component';
import { SnowboardsBoardAuraSplitComponent } from './snowboards/snowboards-board-aura-split/snowboards-board-aura-split.component';
import { SnowboardsBoardAuraComponent } from './snowboards/snowboards-board-aura/snowboards-board-aura.component';
import { LongboardsBoardCovertComponent } from './longboards/longboards-board-covert/longboards-board-covert.component';
import { LongboardsBoardDeviantComponent } from './longboards/longboards-board-deviant/longboards-board-deviant.component';
import { LongboardsBoardDimeComponent } from './longboards/longboards-board-dime/longboards-board-dime.component';
import { LongboardsBoardElJefeComponent } from './longboards/longboards-board-el-jefe/longboards-board-el-jefe.component';
import { LongboardsBoardHeistComponent } from './longboards/longboards-board-heist/longboards-board-heist.component';
import { LongboardsBoardReaperComponent } from './longboards/longboards-board-reaper/longboards-board-reaper.component';
import { LongboardsBoardSuperfreakComponent } from './longboards/longboards-board-superfreak/longboards-board-superfreak.component';
import { LongboardsBoardWingmanComponent } from './longboards/longboards-board-wingman/longboards-board-wingman.component';
import { LongboardsBoardClutchComponent } from './longboards/longboards-board-clutch/longboards-board-clutch.component';
import { LongboardsBoardAvalancheComponent } from './longboards/longboards-board-avalanche/longboards-board-avalanche.component';
import { ApparelKidsComponent } from './store/apparel-kids/apparel-kids.component';
import { ApparelWomensComponent } from './store/apparel-womens/apparel-womens.component';
import { ApparelMensComponent } from './store/apparel-mens/apparel-mens.component';
import { ApparelAccessoriesComponent } from './store/apparel-accessories/apparel-accessories.component';
import { ApparelHatsComponent } from './store/apparel-hats/apparel-hats.component';
import { ApparelHoodiesComponent } from './store/apparel-hoodies/apparel-hoodies.component';
import { ApparelShirtsComponent } from './store/apparel-shirts/apparel-shirts.component';
// FOR ROUTING, check Section 22 video 237, 238 how to setup child routes and lazy loading

import { RouterModule, Routes } from '@angular/router';

import { ApparelComponent } from './store/apparel.component';
import { CompanyComponent } from './company/company.component';
import { CompanyCalendarComponent } from './company/company-calendar/company-calendar.component';
import { CompanyContactComponent } from './company/company-contact/company-contact.component';
import { CompanyDealersComponent } from './company/company-dealers/company-dealers.component';
import { CompanyInternationalDealersComponent } from './company/company-international-dealers/company-international-dealers.component';
import { CompanyMotoComponent } from './company/company-moto/company-moto.component';
import { CompanyNewsComponent } from './company/company-news/company-news.component';
import { CompanyWarrantyComponent } from './company/company-warranty/company-warranty.component';
import { HomeComponent } from './home/home.component';
import { LongboardsComponent } from './longboards/longboards.component';
import { LongboardsVideosComponent } from './longboards/longboards-videos/longboards-videos.component';
import { LongboardsTechComponent } from './longboards/longboards-tech/longboards-tech.component';
import { LongboardsTeamComponent } from './longboards/longboards-team/longboards-team.component';
import { SnowboardsComponent } from './snowboards/snowboards.component';
import { SnowboardsVideosComponent } from './snowboards/snowboards-videos/snowboards-videos.component';
import { SnowboardsTechComponent } from './snowboards/snowboards-tech/snowboards-tech.component';
import { SnowboardsTeamComponent } from './snowboards/snowboards-team/snowboards-team.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'company', component: CompanyComponent },
    { path: 'company/calendar', component: CompanyCalendarComponent },
    { path: 'company/contact', component: CompanyContactComponent },
    { path: 'company/dealers', component: CompanyDealersComponent },
    { path: 'company/international-dealers', component: CompanyInternationalDealersComponent },
    { path: 'company/moto', component: CompanyMotoComponent },
    { path: 'company/news', component: CompanyNewsComponent },
    { path: 'company/warranty', component: CompanyWarrantyComponent },
    { path: 'longboards', component: LongboardsComponent },
    { path: 'longboards/board/avalanche', component: LongboardsBoardAvalancheComponent },
    { path: 'longboards/board/clutch', component: LongboardsBoardClutchComponent },
    { path: 'longboards/board/covert', component: LongboardsBoardCovertComponent },
    { path: 'longboards/board/deviant', component: LongboardsBoardDeviantComponent },
    { path: 'longboards/board/dime', component: LongboardsBoardDimeComponent },
    { path: 'longboards/board/el-jefe', component: LongboardsBoardElJefeComponent },
    { path: 'longboards/board/heist', component: LongboardsBoardHeistComponent },
    { path: 'longboards/board/reaper', component: LongboardsBoardReaperComponent },
    { path: 'longboards/board/superfreak', component: LongboardsBoardSuperfreakComponent },
    { path: 'longboards/board/wingman', component: LongboardsBoardWingmanComponent },
    { path: 'longboards/videos', component: LongboardsVideosComponent },
    { path: 'longboards/tech', component: LongboardsTechComponent },
    { path: 'longboards/team', component: LongboardsTeamComponent },
    { path: 'snowboards', component: SnowboardsComponent },
    { path: 'snowboards/board/aura', component: SnowboardsBoardAuraComponent },
    { path: 'snowboards/board/aura-split', component: SnowboardsBoardAuraSplitComponent },
    { path: 'snowboards/board/bantam', component: SnowboardsBoardBantamComponent },
    { path: 'snowboards/board/chairman', component: SnowboardsBoardChairmanComponent },
    { path: 'snowboards/board/funslinger', component: SnowboardsBoardFunslingerComponent },
    { path: 'snowboards/board/infinity', component: SnowboardsBoardInfinityComponent },
    { path: 'snowboards/board/onyx', component: SnowboardsBoardOnyxComponent },
    { path: 'snowboards/board/prospector-split', component: SnowboardsBoardProspectorSplitComponent },
    { path: 'snowboards/board/proto-mini', component: SnowboardsBoardProtoMiniComponent },
    { path: 'snowboards/board/proto-type-two', component: SnowboardsBoardProtoTypeTwoComponent },
    { path: 'snowboards/board/proto-type-two-womens', component: SnowboardsBoardProtoTypeTwoWomensComponent },
    { path: 'snowboards/board/ripsaw', component: SnowboardsBoardRipsawComponent },
    { path: 'snowboards/board/shredder', component: SnowboardsBoardShredderComponent },
    { path: 'snowboards/board/snowtrooper', component: SnowboardsBoardSnowtrooperComponent },
    { path: 'snowboards/board/starlet', component: SnowboardsBoardStarletComponent },
    { path: 'snowboards/board/swift', component: SnowboardsBoardSwiftComponent },
    { path: 'snowboards/board/twenty-five', component: SnowboardsBoardTwentyFiveComponent },
    { path: 'snowboards/board/twenty-five-split', component: SnowboardsBoardTwentyFiveSplitComponent },
    { path: 'snowboards/board/warlock', component: SnowboardsBoardWarlockComponent },
    { path: 'snowboards/board/west', component: SnowboardsBoardWestComponent },
    { path: 'snowboards/board/west-split', component: SnowboardsBoardWestSplitComponent },
    { path: 'snowboards/videos', component: SnowboardsVideosComponent },
    { path: 'snowboards/tech', component: SnowboardsTechComponent },
    { path: 'snowboards/team', component: SnowboardsTeamComponent },
    { path: 'store/apparel', component: ApparelComponent },
    { path: 'store/apparel/shirts', component: ApparelShirtsComponent },
    { path: 'store/apparel/hoodies', component: ApparelHoodiesComponent },
    { path: 'store/apparel/hats', component: ApparelHatsComponent },
    { path: 'store/apparel/accessories', component: ApparelAccessoriesComponent },
    { path: 'store/apparel/mens', component: ApparelMensComponent },
    { path: 'store/apparel/womens', component: ApparelWomensComponent },
    { path: 'store/apparel/kids', component: ApparelKidsComponent },
    { path: 'store/special-edition', component: SpecialEditionComponent },
    { path: 'store/special-edition/camoflauge', component: Ns25CamoflaugeComponent },
    { path: 'store/special-edition/grey', component: Ns25GreyComponent },
    { path: 'store/special-edition/glove', component: Ns25GloveComponent },
    { path: 'store/special-edition/mitt', component: Ns25MittComponent },
    { path: 'store/special-edition/knifes', component: Ns25KnifeComponent },
    // { path: '//', loadChildren: './users/user.module#UserModule'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);