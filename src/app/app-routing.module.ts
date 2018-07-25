import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './components/inbox/inbox.component';
import { DataAccessComponent } from './components/data-access/data-access.component';
import { AppIntegrationsComponent } from './components/app-integrations/app-integrations.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/inbox',
        pathMatch: 'full'
    },
    {
        path: 'inbox',
        component: InboxComponent
    },
    {
        path: 'data-access',
        component: DataAccessComponent
    },
    {
        path: 'app-integrations',
        component: AppIntegrationsComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
