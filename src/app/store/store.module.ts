// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { routing } from './../app.routing';
// Store Components
import { ApparelComponent } from './apparel.component';
import { ApparelAccessoriesComponent } from './apparel-accessories/apparel-accessories.component';
import { ApparelHatsComponent } from './apparel-hats/apparel-hats.component';
import { ApparelHoodiesComponent } from './apparel-hoodies/apparel-hoodies.component';
import { ApparelKidsComponent } from './apparel-kids/apparel-kids.component';
import { ApparelMensComponent } from './apparel-mens/apparel-mens.component';
import { ApparelShirtsComponent } from './apparel-shirts/apparel-shirts.component';
import { ApparelWomensComponent } from './apparel-womens/apparel-womens.component';
import { SpecialEditionComponent } from './special-edition/special-edition.component';
import { Ns25CamoflaugeComponent } from './special-edition/ns25-camoflauge/ns25-camoflauge.component';
import { Ns25GreyComponent } from './special-edition/ns25-grey/ns25-grey.component';
import { Ns25GloveComponent } from './special-edition/ns25-glove/ns25-glove.component';
import { Ns25KnifeComponent } from './special-edition/ns25-knife/ns25-knife.component';
import { Ns25MittComponent } from './special-edition/ns25-mitt/ns25-mitt.component';

@NgModule({
    declarations: [
        ApparelComponent,
        ApparelAccessoriesComponent,
        ApparelHatsComponent,
        ApparelHoodiesComponent,
        ApparelKidsComponent,
        ApparelMensComponent,
        ApparelShirtsComponent,
        ApparelWomensComponent,
        SpecialEditionComponent,
        Ns25CamoflaugeComponent,
        Ns25GreyComponent,
        Ns25GloveComponent,
        Ns25KnifeComponent,
        Ns25MittComponent,
    ],
    imports: [CommonModule, routing]
})
export class StoreModule {}