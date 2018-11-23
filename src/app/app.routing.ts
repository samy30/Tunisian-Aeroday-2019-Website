import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
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

const routes: Routes =[
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/login',       component: LoginComponent },
    { path: 'examples/profile',     component: ProfileComponent },
    { path: 'examples/Challenges/aero-challenge',     component: AeroChallengeComponent },
    { path: 'examples/Challenges/aeroModelisme',     component: AeroModelismeComponent },
    { path: 'examples/Challenges/aeroEntrepreneur',     component: AeroEntrepreneurComponent },
    { path: 'examples/Challenges/challengeCAO',     component: ChallengeCaoComponent },
    { path: 'examples/Challenges/challengeDev',     component: ChallengeDevComponent },
    { path: 'examples/axes/Airshow',     component: AirshowComponent },
    { path: 'examples/axes/novices',     component: NovicesComponent },
    { path: 'examples/axes/Ambassadeurs',     component: AmbassadeursComponent },
    { path: 'examples/axes/expositionsAeronautiques',     component: ExpositionsComponent },
    { path: 'examples/axes/expositionsAerospatiales',     component: AerospaceComponent },
    { path: 'historique',     component: HistoriqueComponent }
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
