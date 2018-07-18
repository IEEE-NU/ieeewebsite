import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EducateComponent } from './educate/educate.component';
import { ExploreComponent } from './explore/explore.component';
import { EngageComponent } from './engage/engage.component';

const appRoutes: Routes = [

    // Site routes goes here
            { path: '', component: HomeComponent},
            { path: 'educate', component: EducateComponent },
            { path: 'explore', component: ExploreComponent },
            { path: 'engage', component: EngageComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
