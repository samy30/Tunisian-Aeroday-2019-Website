import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';

import { ExamplesComponent } from './examples.component';
import { AeroChallengeComponent } from './challenges/aero-challenge/aero-challenge.component';
import { AeroModelismeComponent } from './challenges/aero-modelisme/aero-modelisme.component';
import { ChallengeCaoComponent } from './challenges/challenge-cao/challenge-cao.component';
import { AeroEntrepreneurComponent } from './challenges/aero-entrepreneur/aero-entrepreneur.component';
import { ChallengeDevComponent } from './challenges/challenge-dev/challenge-dev.component';
import { AirshowComponent } from './axes/airshow/airshow.component';
import { NovicesComponent } from './axes/novices/novices.component';
import { ExpositionsComponent } from './axes/expositions/expositions.component';
import { AerospaceComponent } from './axes/aerospace/aerospace.component';
import { AmbassadeursComponent } from './axes/ambassadeurs/ambassadeurs.component';

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
        ExamplesComponent,
        AeroChallengeComponent,
        AeroModelismeComponent,
        ChallengeCaoComponent,
        AeroEntrepreneurComponent,
        ChallengeDevComponent,
        AirshowComponent,
        NovicesComponent,
        ExpositionsComponent,
        AerospaceComponent,
        AmbassadeursComponent
    ]
})
export class ExamplesModule { }
