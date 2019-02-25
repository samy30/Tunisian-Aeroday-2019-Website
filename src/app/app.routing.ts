import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import {AeroChallengeComponent} from './examples/challenges/aero-challenge/aero-challenge.component';
import {HistoriqueComponent} from './components/historique/historique.component';
import {AeroModelismeComponent} from './examples/challenges/aero-modelisme/aero-modelisme.component';
import {AeroEntrepreneurComponent} from './examples/challenges/aero-entrepreneur/aero-entrepreneur.component';
import {ChallengeCaoComponent} from './examples/challenges/challenge-cao/challenge-cao.component';
import {ChallengeDevComponent} from './examples/challenges/challenge-dev/challenge-dev.component';
import {AirshowComponent} from './examples/axes/airshow/airshow.component';
import {AerospaceComponent} from './examples/axes/aerospace/aerospace.component';
import {AmbassadeursComponent} from './examples/axes/ambassadeurs/ambassadeurs.component';
import {ExpositionsComponent} from './examples/axes/expositions/expositions.component';
import {NovicesComponent} from './examples/axes/novices/novices.component';
import {SponsorsComponent} from './components/sponsors/sponsors.component';
import {InscriptionComponent} from './examples/inscription/inscription.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',                component: ComponentsComponent,
        children: [
            { path: 'sponsors', component: SponsorsComponent}
        ] },
    { path: 'aero-challenge',     component: AeroChallengeComponent },
    { path: 'aeroModelisme',     component: AeroModelismeComponent },
    { path: 'aeroEntrepreneur',     component: AeroEntrepreneurComponent },
    { path: 'challengeCAO',     component: ChallengeCaoComponent },
    { path: 'challengeDev',     component: ChallengeDevComponent },
    { path: 'Airshow',     component: AirshowComponent },
    { path: 'novices',     component: NovicesComponent },
    { path: 'Ambassadeurs',     component: AmbassadeursComponent },
    { path: 'expositionsAeronautiques',     component: ExpositionsComponent },
    { path: 'expositionsAerospatiales',     component: AerospaceComponent },
    { path: 'inscription',     component: InscriptionComponent },
    // { path: 'historique',     component: HistoriqueComponent }
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
