// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { routing } from './../app.routing';
// Snowboard Components - Main
import { SnowboardsComponent } from './snowboards.component';
import { SnowboardsTeamComponent } from './snowboards-team/snowboards-team.component';
import { SnowboardsTechComponent } from './snowboards-tech/snowboards-tech.component';
import { SnowboardsVideosComponent } from './snowboards-videos/snowboards-videos.component';
// Snowboard Components - Board Filter
import { BoardsKidsComponent } from './boards-kids/boards-kids.component';
import { BoardsWomensComponent } from './boards-womens/boards-womens.component';
import { BoardsFreestyleComponent } from './boards-freestyle/boards-freestyle.component';
import { BoardsFreerideComponent } from './boards-freeride/boards-freeride.component';
import { BoardsAllMountainComponent } from './boards-all-mountain/boards-all-mountain.component';
// Snowboard Components - Snowboards
import { SnowboardsBoardAuraComponent } from './snowboards-board-aura/snowboards-board-aura.component';
import { SnowboardsBoardAuraSplitComponent } from './snowboards-board-aura-split/snowboards-board-aura-split.component';
import { SnowboardsBoardBantamComponent } from './snowboards-board-bantam/snowboards-board-bantam.component';
import { SnowboardsBoardChairmanComponent } from './snowboards-board-chairman/snowboards-board-chairman.component';
import { SnowboardsBoardFunslingerComponent } from './snowboards-board-funslinger/snowboards-board-funslinger.component';
import { SnowboardsBoardInfinityComponent } from './snowboards-board-infinity/snowboards-board-infinity.component';
import { SnowboardsBoardOnyxComponent } from './snowboards-board-onyx/snowboards-board-onyx.component';
import { SnowboardsBoardProspectorSplitComponent } from './snowboards-board-prospector-split/snowboards-board-prospector-split.component';
import { SnowboardsBoardProtoMiniComponent } from './snowboards-board-proto-mini/snowboards-board-proto-mini.component';
import { SnowboardsBoardProtoTypeTwoComponent } from './snowboards-board-proto-type-two/snowboards-board-proto-type-two.component';
import { SnowboardsBoardProtoTypeTwoWomensComponent } from './snowboards-board-proto-type-two-womens/snowboards-board-proto-type-two-womens.component';
import { SnowboardsBoardRipsawComponent } from './snowboards-board-ripsaw/snowboards-board-ripsaw.component';
import { SnowboardsBoardShredderComponent } from './snowboards-board-shredder/snowboards-board-shredder.component';
import { SnowboardsBoardSnowtrooperComponent } from './snowboards-board-snowtrooper/snowboards-board-snowtrooper.component';
import { SnowboardsBoardStarletComponent } from './snowboards-board-starlet/snowboards-board-starlet.component';
import { SnowboardsBoardSwiftComponent } from './snowboards-board-swift/snowboards-board-swift.component';
import { SnowboardsBoardTwentyFiveComponent } from './snowboards-board-twenty-five/snowboards-board-twenty-five.component';
import { SnowboardsBoardTwentyFiveSplitComponent } from './snowboards-board-twenty-five-split/snowboards-board-twenty-five-split.component';
import { SnowboardsBoardWarlockComponent } from './snowboards-board-warlock/snowboards-board-warlock.component';
import { SnowboardsBoardWestComponent } from './snowboards-board-west/snowboards-board-west.component';
import { SnowboardsBoardWestSplitComponent } from './snowboards-board-west-split/snowboards-board-west-split.component';
// Snowboard Components - Team Members
import { SnowboardsTeamAndrewBuerginComponent } from './snowboards-team/snowboards-team-andrew-buergin/snowboards-team-andrew-buergin.component';
import { SnowboardsTeamAustinGibneyComponent } from './snowboards-team/snowboards-team-austin-gibney/snowboards-team-austin-gibney.component';
import { SnowboardsTeamBillRodriguezComponent } from './snowboards-team/snowboards-team-bill-rodriguez/snowboards-team-bill-rodriguez.component';
import { SnowboardsTeamBradyFarrComponent } from './snowboards-team/snowboards-team-brady-farr/snowboards-team-brady-farr.component';
import { SnowboardsTeamBrockButterfieldComponent } from './snowboards-team/snowboards-team-brock-butterfield/snowboards-team-brock-butterfield.component';
import { SnowboardsTeamByronBagwellComponent } from './snowboards-team/snowboards-team-byron-bagwell/snowboards-team-byron-bagwell.component';
import { SnowboardsTeamCaseyLucasComponent } from './snowboards-team/snowboards-team-casey-lucas/snowboards-team-casey-lucas.component';
import { SnowboardsTeamCatherineEaglesComponent } from './snowboards-team/snowboards-team-catherine-eagles/snowboards-team-catherine-eagles.component';
import { SnowboardsTeamCharlieHochComponent } from './snowboards-team/snowboards-team-charlie-hoch/snowboards-team-charlie-hoch.component';
import { SnowboardsTeamChaseBlackwellComponent } from './snowboards-team/snowboards-team-chase-blackwell/snowboards-team-chase-blackwell.component';
import { SnowboardsTeamChrisCorningComponent } from './snowboards-team/snowboards-team-chris-corning/snowboards-team-chris-corning.component';
import { SnowboardsTeamChrisGalvinComponent } from './snowboards-team/snowboards-team-chris-galvin/snowboards-team-chris-galvin.component';
import { SnowboardsTeamChrisLynchComponent } from './snowboards-team/snowboards-team-chris-lynch/snowboards-team-chris-lynch.component';
import { SnowboardsTeamCooperSclarComponent } from './snowboards-team/snowboards-team-cooper-sclar/snowboards-team-cooper-sclar.component';
import { SnowboardsTeamDevinWhiteleyComponent } from './snowboards-team/snowboards-team-devin-whiteley/snowboards-team-devin-whiteley.component';
import { SnowboardsTeamEveretteSimmonsComponent } from './snowboards-team/snowboards-team-everette-simmons/snowboards-team-everette-simmons.component';
import { SnowboardsTeamIanSmithComponent } from './snowboards-team/snowboards-team-ian-smith/snowboards-team-ian-smith.component';
import { SnowboardsTeamJacobCareyComponent } from './snowboards-team/snowboards-team-jacob-carey/snowboards-team-jacob-carey.component';
import { SnowboardsTeamJakeWilliamsComponent } from './snowboards-team/snowboards-team-jake-williams/snowboards-team-jake-williams.component';
import { SnowboardsTeamJasonElmsComponent } from './snowboards-team/snowboards-team-jason-elms/snowboards-team-jason-elms.component';
import { SnowboardsTeamJasonHindmanComponent } from './snowboards-team/snowboards-team-jason-hindman/snowboards-team-jason-hindman.component';
import { SnowboardsTeamJustinHeniginComponent } from './snowboards-team/snowboards-team-justin-henigin/snowboards-team-justin-henigin.component';
import { SnowboardsTeamKevinBlueComponent } from './snowboards-team/snowboards-team-kevin-blue/snowboards-team-kevin-blue.component';
import { SnowboardsTeamMaryBoddingtonComponent } from './snowboards-team/snowboards-team-mary-boddington/snowboards-team-mary-boddington.component';
import { SnowboardsTeamMikeHoodComponent } from './snowboards-team/snowboards-team-mike-hood/snowboards-team-mike-hood.component';
import { SnowboardsTeamMikeyMarohnComponent } from './snowboards-team/snowboards-team-mikey-marohn/snowboards-team-mikey-marohn.component';
import { SnowboardsTeamNateSheehanComponent } from './snowboards-team/snowboards-team-nate-sheehan/snowboards-team-nate-sheehan.component';
import { SnowboardsTeamNickDeciccoComponent } from './snowboards-team/snowboards-team-nick-decicco/snowboards-team-nick-decicco.component';
import { SnowboardsTeamNickLarsonComponent } from './snowboards-team/snowboards-team-nick-larson/snowboards-team-nick-larson.component';
import { SnowboardsTeamRajatBhyaniComponent } from './snowboards-team/snowboards-team-rajat-bhyani/snowboards-team-rajat-bhyani.component';
import { SnowboardsTeamRickRodriguezComponent } from './snowboards-team/snowboards-team-rick-rodriguez/snowboards-team-rick-rodriguez.component';
import { SnowboardsTeamSeanFithianComponent } from './snowboards-team/snowboards-team-sean-fithian/snowboards-team-sean-fithian.component';
import { SnowboardsTeamTaylorPfaffComponent } from './snowboards-team/snowboards-team-taylor-pfaff/snowboards-team-taylor-pfaff.component';
import { SnowboardsTeamTomFloccoComponent } from './snowboards-team/snowboards-team-tom-flocco/snowboards-team-tom-flocco.component';
import { SnowboardsTeamTonyPavlantosComponent } from './snowboards-team/snowboards-team-tony-pavlantos/snowboards-team-tony-pavlantos.component';

@NgModule({
    declarations: [
        BoardsAllMountainComponent,
        BoardsFreerideComponent,
        BoardsFreestyleComponent,
        BoardsWomensComponent,
        BoardsKidsComponent,
        SnowboardsComponent,
        SnowboardsVideosComponent,
        SnowboardsTechComponent,
        SnowboardsTeamComponent,
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
        SnowboardsTeamTonyPavlantosComponent
    ],
    imports: [CommonModule, routing]
})

export class SnowboardsModule {}