import { Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { TreeComponent } from './components/tree/tree.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo:'/main', pathMatch:'full'},
  { path: 'table', component: TableComponent },
  { path: 'tree', component: TreeComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '**', redirectTo: '/main', pathMatch:'full' }
];
