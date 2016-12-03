// FOR ROUTING, check Section 22 video 237, 238 how to setup child routes and lazy loading

import { RouterModule, Routes } from '@angular/router';


const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: '//', loadChildren: './users/user.module#UserModule'}
]

export const routing = RouterModule.forRoot(ROUTES);