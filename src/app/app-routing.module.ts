import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 
import { CreateEventComponent } from '../app/create-event/create-event.component';
import { ReconcileSpeakerProgramComponent } from '../app/reconcile-speaker-program/reconcile-speaker-program.component'; 
import { TrainingComponent } from './training/training.component'; 
import { AddVenueComponent} from './add-venue/add-venue.component'
import { InitiateTrainingComponent } from './initiate-training/initiate-training.component'; 
import { ManageSpkeakerContentComponent } from './manage-spkeaker-content/manage-spkeaker-content.component';
import { LoginComponent } from './login/login.component'


const routes: Routes = [
  { path: '', redirectTo: '/training', pathMatch: 'full' },  
  { path: 'create', component : CreateEventComponent },
  { path: 'reconcile-speaker-program', component : ReconcileSpeakerProgramComponent },
  { path: 'training', component: TrainingComponent},
  { path : 'add-venue', component: AddVenueComponent},
  { path: 'initiatetraining', component: InitiateTrainingComponent},
  { path: 'speaker-content', component: ManageSpkeakerContentComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent },
  
  
 
];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
