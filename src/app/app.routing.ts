// FOR ROUTING, check Section 22 video 237, 238 how to setup child routes and lazy loading

import { RouterModule, Routes } from '@angular/router';

import { ApparelComponent } from './apparel/apparel.component';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { LongboardsComponent } from './longboards/longboards.component';
import { SnowboardsComponent } from './snowboards/snowboards.component';
import { SnowboardsVideosComponent } from './snowboards/snowboards-videos/snowboards-videos.component';
import { SnowboardsTeamComponent } from './snowboards/snowboards-team/snowboards-team.component';
import { SnowboardsTechComponent } from './snowboards/snowboards-tech/snowboards-tech.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'apparel', component: ApparelComponent },
    { path: 'company', component: CompanyComponent },
    { path: 'longboards', component: LongboardsComponent },
    { path: 'snowboards', component: SnowboardsComponent },
    { path: 'snowboards/videos', component: SnowboardsVideosComponent },
    { path: 'snowboards/tech', component: SnowboardsTechComponent },
    { path: 'snowboards/team', component: SnowboardsTeamComponent },
    // { path: '//', loadChildren: './users/user.module#UserModule'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);