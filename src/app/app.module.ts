import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBootstrapModule } from './bootstrap.module'
import { AppMaterialModule } from '../app/material.module'; 
import { AppRoutingModule } from './app-routing.module'; 

import { AppComponent } from './app.component'; 
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';   
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material'; 
import { CreateEventComponent } from './create-event/create-event.component';
import { InitiateTrainingComponent, DialogDateExampleDialog } from './initiate-training/initiate-training.component'; 
import { TrainingComponent, DialogDataExampleDialog } from './training/training.component'; 
import { ReconcileSpeakerProgramComponent } from './reconcile-speaker-program/reconcile-speaker-program.component';  
import { AddVenueComponent} from './add-venue/add-venue.component';
import { LoginComponent, LoginDialog } from './login/login.component'
import { ManageSpkeakerContentComponent, speakerUpload } from './manage-spkeaker-content/manage-spkeaker-content.component'


@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent, 
    CreateEventComponent, TrainingComponent, InitiateTrainingComponent,DialogDateExampleDialog, 
    DialogDataExampleDialog,  
    ReconcileSpeakerProgramComponent,
    AddVenueComponent,
    LoginComponent,LoginDialog,
    ManageSpkeakerContentComponent, speakerUpload 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule, 
    BrowserAnimationsModule,
    AppBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogDataExampleDialog, DialogDateExampleDialog, LoginDialog, speakerUpload]
})
export class AppModule { }
