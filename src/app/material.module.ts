import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatBadgeModule, MatCardModule,
  MatStepperModule, MatTableModule,
  MatInputModule, MatSelectModule,
  MatButtonModule, MatProgressBarModule,
  MatNativeDateModule, MatDatepickerModule,
  MatCheckboxModule, MatRadioModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatIconModule,  MatRadioModule, MatCheckboxModule, MatBadgeModule, MatStepperModule, MatTableModule , MatProgressBarModule,  MatInputModule, MatSelectModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule
  ],
  exports: [
    MatCardModule, MatIconModule,  MatRadioModule, MatCheckboxModule,  MatBadgeModule, MatStepperModule, MatTableModule, MatProgressBarModule,  MatInputModule, MatSelectModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule
  ]
})
export class AppMaterialModule { };
