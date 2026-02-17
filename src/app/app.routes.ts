import { Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { TreeComponent } from './components/tree/tree.component';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';

export const routes: Routes = [
  { path: '', redirectTo:'/main', pathMatch:'full'},
  { path: 'table', component: TableComponent },
  { path: 'tree', component: TreeComponent},
  { path: 'drag-and-drop', component: DragAndDropComponent},
  { path: '**', redirectTo: '/main', pathMatch:'full' }
];
