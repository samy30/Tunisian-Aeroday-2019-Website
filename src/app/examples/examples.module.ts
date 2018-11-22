import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ExamplesComponent } from './examples.component';
import { AeroChallengeComponent } from './challenges/aero-challenge/aero-challenge.component';
import { AeroModelismeComponent } from './challenges/aero-modelisme/aero-modelisme.component';
import { ChallengeCaoComponent } from './challenges/challenge-cao/challenge-cao.component';
import { AeroEntrepreneurComponent } from './challenges/aero-entrepreneur/aero-entrepreneur.component';
import { ChallengeDevComponent } from './challenges/challenge-dev/challenge-dev.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        JWBootstrapSwitchModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        })
    ],
    declarations: [
        LandingComponent,
        LoginComponent,
        ExamplesComponent,
        ProfileComponent,
        AeroChallengeComponent,
        AeroModelismeComponent,
        ChallengeCaoComponent,
        AeroEntrepreneurComponent,
        ChallengeDevComponent
    ]
})
export class ExamplesModule { }
