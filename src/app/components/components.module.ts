import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { MembersComponent } from './members/members.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JWBootstrapSwitchModule
      ],
    declarations: [
        ComponentsComponent,
        IntroductionComponent,
        MembersComponent,
        SponsorsComponent
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
