import { ApparelMensComponent } from './apparel/apparel-mens/apparel-mens.component';
import { ApparelAccessoriesComponent } from './apparel/apparel-accessories/apparel-accessories.component';
import { ApparelHatsComponent } from './apparel/apparel-hats/apparel-hats.component';
import { ApparelHoodiesComponent } from './apparel/apparel-hoodies/apparel-hoodies.component';
import { ApparelShirtsComponent } from './apparel/apparel-shirts/apparel-shirts.component';
// FOR ROUTING, check Section 22 video 237, 238 how to setup child routes and lazy loading

import { RouterModule, Routes } from '@angular/router';

import { ApparelComponent } from './apparel/apparel.component';
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
    { path: 'apparel', component: ApparelComponent },
    { path: 'apparel/shirts', component: ApparelShirtsComponent },
    { path: 'apparel/hoodies', component: ApparelHoodiesComponent },
    { path: 'apparel/hats', component: ApparelHatsComponent },
    { path: 'apparel/accessories', component: ApparelAccessoriesComponent },
    { path: 'apparel/mens', component: ApparelMensComponent },
    { path: 'company', component: CompanyComponent },
    { path: 'company/calendar', component: CompanyCalendarComponent },
    { path: 'company/contact', component: CompanyContactComponent },
    { path: 'company/dealers', component: CompanyDealersComponent },
    { path: 'company/international-dealers', component: CompanyInternationalDealersComponent },
    { path: 'company/moto', component: CompanyMotoComponent },
    { path: 'company/news', component: CompanyNewsComponent },
    { path: 'company/warranty', component: CompanyWarrantyComponent },
    { path: 'longboards', component: LongboardsComponent },
    { path: 'longboards/videos', component: LongboardsVideosComponent },
    { path: 'longboards/tech', component: LongboardsTechComponent },
    { path: 'longboards/team', component: LongboardsTeamComponent },
    { path: 'snowboards', component: SnowboardsComponent },
    { path: 'snowboards/videos', component: SnowboardsVideosComponent },
    { path: 'snowboards/tech', component: SnowboardsTechComponent },
    { path: 'snowboards/team', component: SnowboardsTeamComponent },
    // { path: '//', loadChildren: './users/user.module#UserModule'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);