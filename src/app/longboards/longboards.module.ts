// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { routing } from './../app.routing';
// Longboard Components - Main
import { LongboardsComponent } from './longboards.component';
import { LongboardsTeamComponent } from './longboards-team/longboards-team.component';
import { LongboardsTechComponent } from './longboards-tech/longboards-tech.component';
import { LongboardsVideosComponent } from './longboards-videos/longboards-videos.component';
// Longboard Components - Boards
import { LongboardsBoardAvalancheComponent } from './longboards-board-avalanche/longboards-board-avalanche.component';
import { LongboardsBoardClutchComponent } from './longboards-board-clutch/longboards-board-clutch.component';
import { LongboardsBoardCovertComponent } from './longboards-board-covert/longboards-board-covert.component';
import { LongboardsBoardDeviantComponent } from './longboards-board-deviant/longboards-board-deviant.component';
import { LongboardsBoardDimeComponent } from './longboards-board-dime/longboards-board-dime.component';
import { LongboardsBoardElJefeComponent } from './longboards-board-el-jefe/longboards-board-el-jefe.component';
import { LongboardsBoardHeistComponent } from './longboards-board-heist/longboards-board-heist.component';
import { LongboardsBoardReaperComponent } from './longboards-board-reaper/longboards-board-reaper.component';
import { LongboardsBoardSuperfreakComponent } from './longboards-board-superfreak/longboards-board-superfreak.component';
import { LongboardsBoardWingmanComponent } from './longboards-board-wingman/longboards-board-wingman.component';
// Longboard Components - Team Members
import { LongboardsTeamAlecOlguinComponent } from './longboards-team/longboards-team-alec-olguin/longboards-team-alec-olguin.component';
import { LongboardsTeamDaveMortonComponent } from './longboards-team/longboards-team-dave-morton/longboards-team-dave-morton.component';
import { LongboardsTeamLyleHansbergerComponent } from './longboards-team/longboards-team-lyle-hansberger/longboards-team-lyle-hansberger.component';
import { LongboardsTeamTyeDonnellyComponent } from './longboards-team/longboards-team-tye-donnelly/longboards-team-tye-donnelly.component';
import { LongboardsTeamZachBaileyComponent } from './longboards-team/longboards-team-zach-bailey/longboards-team-zach-bailey.component';

@NgModule({
    declarations: [
        LongboardsComponent,
        LongboardsTechComponent,
        LongboardsTeamComponent,
        LongboardsVideosComponent,
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
        LongboardsTeamAlecOlguinComponent,
        LongboardsTeamDaveMortonComponent,
        LongboardsTeamLyleHansbergerComponent,
        LongboardsTeamTyeDonnellyComponent,
        LongboardsTeamZachBaileyComponent
    ],
    imports: [CommonModule, routing]
})
export class LongboardsModule {}