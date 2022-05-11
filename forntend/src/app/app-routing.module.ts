import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTimeHistoryComponent } from './employee-time-history/employee-time-history/employee-time-history.component';
import { EmployeeTimeTriggerComponent } from './employee-time-history/employee-time-history/employee-time-trigger/employee-time-trigger.component';
import { EmployeeComponent } from './employee/employee.component';

import { HomeComponent } from './home/home.component';
import { Employee } from './models/employee';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employee', component: EmployeeComponent, },
  { path: 'employee-history-time', component: EmployeeTimeHistoryComponent },
  { path: 'employee-time-trigger', component:EmployeeTimeTriggerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
