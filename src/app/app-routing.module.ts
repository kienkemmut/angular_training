import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { ListComponent } from './user/list/list.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { ScheduleComponent } from './appointment/schedule/schedule.component';
import { MainSettingComponent } from './shared/main-setting/main-setting.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

import {CommonModule} from '@angular/common';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users/login', component: LoginComponent },
    { path: 'users', component: ListComponent },
    { path: 'users/list', component: ListComponent },
    { path: 'users/add', component: AddUserComponent },
    { path: 'users/edit/[id]', component: EditUserComponent },
    { path: 'appointments', component: ScheduleComponent },
    { path: 'settings', component: MainSettingComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes),
        CommonModule],
    declarations: [
        HomeComponent,
        LoginComponent,
        ListComponent,
        AddUserComponent,
        EditUserComponent,
        ScheduleComponent,
        MainSettingComponent,
        PageNotFoundComponent
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
