import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatBadgeModule, MatCardModule,
  MatStepperModule, MatTableModule,
  MatInputModule, MatSelectModule,
  MatButtonModule, MatProgressBarModule,
  MatNativeDateModule, MatDatepickerModule,
  MatCheckboxModule, MatRadioModule,
  MatIconModule, MatDialogModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatDialogModule, MatIconModule,  MatRadioModule, MatCheckboxModule, MatBadgeModule, MatStepperModule, MatTableModule , MatProgressBarModule,  MatInputModule, MatSelectModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule
  ],
  exports: [
    MatCardModule, MatDialogModule, MatIconModule,  MatRadioModule, MatCheckboxModule,  MatBadgeModule, MatStepperModule, MatTableModule, MatProgressBarModule,  MatInputModule, MatSelectModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule
  ]
})
export class AppMaterialModule { };
