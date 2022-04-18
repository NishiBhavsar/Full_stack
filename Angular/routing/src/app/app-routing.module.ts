import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { DeshBoardComponent } from './desh-board/desh-board.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DeshBoardComponent,
    children: [],
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
