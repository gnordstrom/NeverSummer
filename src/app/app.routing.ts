// FOR ROUTING, check Section 22 video 237, 238 how to setup child routes and lazy loading

import { RouterModule, Routes } from '@angular/router';

import { ApparelComponent } from './apparel/apparel.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { LongboardsComponent } from './longboards/longboards.component';
import { SnowboardsComponent } from './snowboards/snowboards.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'snowboards', component: SnowboardsComponent },
    { path: 'longboards', component: LongboardsComponent },
    { path: 'apparel', component: ApparelComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'company', component: CompanyComponent },
    // { path: '//', loadChildren: './users/user.module#UserModule'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);