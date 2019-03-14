import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 
import { CreateEventComponent } from '../app/create-event/create-event.component';
import { ReconcileSpeakerProgramComponent } from '../app/reconcile-speaker-program/reconcile-speaker-program.component'; 
import { TrainingComponent } from './training/training.component'; 

const routes: Routes = [
  { path: '', redirectTo: '/training', pathMatch: 'full' },  
  { path: 'create', component : CreateEventComponent },
  { path: 'reconcile-speaker-program', component : ReconcileSpeakerProgramComponent },
  { path: 'training', component: TrainingComponent},
  { path: '**', component: PageNotFoundComponent },
  
 
];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
