import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 
import { CreateEventComponent } from '../app/create-event/create-event.component'; 
import { TrainingComponent } from './training/training.component'; 
import { InitiateTrainingComponent } from './initiate-training/initiate-training.component'; 

const routes: Routes = [
  { path: '', redirectTo: '/training', pathMatch: 'full' },  
  { path: 'create', component : CreateEventComponent },
  { path: 'training', component: TrainingComponent},
  { path: 'initiatetraining', component: InitiateTrainingComponent},
  { path: '**', component: PageNotFoundComponent },
  
 
];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
