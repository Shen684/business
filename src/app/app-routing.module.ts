import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main-page/main/main.component';
import { FavoritComponent } from './main-page/main/favorit/favorit.component';
import { TechnologiesComponent } from './main-page/main/technologies/technologies.component';
import { ReviewsComponent } from './main-page/main/reviews/reviews.component';
import { FormComponent } from './main-page/main/form/form.component';

const routes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'about', component: FavoritComponent},
  {path: 'technologies', component: TechnologiesComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'blocks', component: FormComponent}
  // {path: '**', }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling : 'enabled' 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
