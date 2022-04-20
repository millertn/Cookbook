import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';

const routes: Routes = [
  {
    path:'',
    component: RecipeListComponent,
    pathMatch:'full',
    data: {animation: 'Home'},
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
