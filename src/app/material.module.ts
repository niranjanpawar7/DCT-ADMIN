import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatBadgeModule, MatCardModule,
  MatStepperModule, MatTableModule,
  MatInputModule, MatSelectModule,
  MatButtonModule, MatProgressBarModule,
  MatNativeDateModule, MatDatepickerModule,
  MatCheckboxModule, MatRadioModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatRadioModule, MatCheckboxModule, MatBadgeModule, MatStepperModule, MatTableModule , MatProgressBarModule,  MatInputModule, MatSelectModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule
  ],
  exports: [
    MatCardModule, MatRadioModule, MatCheckboxModule,  MatBadgeModule, MatStepperModule, MatTableModule, MatProgressBarModule,  MatInputModule, MatSelectModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule
  ]
})
export class AppMaterialModule { };
