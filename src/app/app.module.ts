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
import { CreateEventComponent, createEventPopup } from './create-event/create-event.component';
import { InitiateTrainingComponent, DialogDateExampleDialog } from './initiate-training/initiate-training.component'; 
import { TrainingComponent, DialogDataExampleDialog } from './training/training.component'; 
<<<<<<< HEAD
import { ReconcileSpeakerProgramComponent, RecSpeakComp, UploadFileModal } from './reconcile-speaker-program/reconcile-speaker-program.component';  
=======
import { ReconcileSpeakerProgramComponent } from './reconcile-speaker-program/reconcile-speaker-program.component';  
import { AddVenueComponent} from './add-venue/add-venue.component';
import { ManageSpkeakerContentComponent, speakerUpload } from './manage-spkeaker-content/manage-spkeaker-content.component'
>>>>>>> 3a181a61b389a9e2b4768d93dc7a8f87ba875f5d


@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent, 
<<<<<<< HEAD
    CreateEventComponent, TrainingComponent, InitiateTrainingComponent, 
    DialogDataExampleDialog,
    RecSpeakComp,  
    ReconcileSpeakerProgramComponent, 
    UploadFileModal 
=======
    CreateEventComponent, createEventPopup,
    TrainingComponent, InitiateTrainingComponent,DialogDateExampleDialog, 
    DialogDataExampleDialog,  
    ReconcileSpeakerProgramComponent,
    AddVenueComponent,
    ManageSpkeakerContentComponent, speakerUpload 
>>>>>>> 3a181a61b389a9e2b4768d93dc7a8f87ba875f5d
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
<<<<<<< HEAD
  entryComponents: [DialogDataExampleDialog, RecSpeakComp, UploadFileModal]
=======
  entryComponents: [DialogDataExampleDialog, createEventPopup, DialogDateExampleDialog, speakerUpload]
>>>>>>> 3a181a61b389a9e2b4768d93dc7a8f87ba875f5d
})
export class AppModule { }
