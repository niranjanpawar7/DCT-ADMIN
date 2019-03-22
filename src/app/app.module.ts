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
import { ReconcileSpeakerProgramComponent, RecSpeakComp, UploadFileModal } from './reconcile-speaker-program/reconcile-speaker-program.component';   
import { AddVenueComponent} from './add-venue/add-venue.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginComponent, LoginDialog } from './login/login.component'
import { EventDetailsComponent, ViewAuditPopup, ProgramStatusPopup, TravelInfoPopup, HotelInfoPopup, AddAttendeePopup } from './event-details/event-details.component';
import { ManageSpkeakerContentComponent, speakerUpload } from './manage-spkeaker-content/manage-spkeaker-content.component';
import { SpeakerComponent, SpeakerPopupUpload } from './speaker/speaker.component';
import { UploadReferancesComponent, upoadRefPopup } from './upload-referances/upload-referances.component';
import { TaskFilterComponent } from './task-filter/task-filter.component';
import { AttendeeListComponent } from './attendee-list/attendee-list.component';
import { UpcomingFilterComponent } from './upcoming-filter/upcoming-filter.component';


@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent, 
    CreateEventComponent,
    RecSpeakComp,   
    UploadFileModal, 
    createEventPopup,
    TrainingComponent, InitiateTrainingComponent,DialogDateExampleDialog, 
    DialogDataExampleDialog,  
    ReconcileSpeakerProgramComponent,
    AddVenueComponent,
    ManageSpkeakerContentComponent, speakerUpload,
    DashboardComponent, LoginComponent,
    LoginDialog,
    EventDetailsComponent,
    SpeakerComponent, SpeakerPopupUpload,
    UploadReferancesComponent, upoadRefPopup,
    TaskFilterComponent,
    AttendeeListComponent,
    ViewAuditPopup,
    ProgramStatusPopup,
    TravelInfoPopup,
    HotelInfoPopup,
    AddAttendeePopup,
    UpcomingFilterComponent

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
  entryComponents: [
    DialogDataExampleDialog, 
    createEventPopup, 
    DialogDateExampleDialog, 
    speakerUpload, 
    LoginDialog, 
    RecSpeakComp, 
    UploadFileModal, 
    SpeakerPopupUpload, 
    ViewAuditPopup,
    ProgramStatusPopup,
    TravelInfoPopup,
    HotelInfoPopup,
    AddAttendeePopup,
    upoadRefPopup
  ]
})
export class AppModule { }
