import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { PropertyTypeComponent } from './page/property-type/property-type.component';
import { LayoutComponent } from './page/layout/layout.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path:'login',
       component: LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children: [
            {
                path:'dashboard',
                component: DashboardComponent
            },
            {
                path:'property-type',
                component: PropertyTypeComponent
            },
          
        ]
    },
];
