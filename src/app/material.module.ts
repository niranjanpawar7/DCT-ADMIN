import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatBadgeModule, MatCardModule,
  MatStepperModule, MatTableModule,
  MatInputModule, MatSelectModule,
  MatButtonModule, MatProgressBarModule,
  MatNativeDateModule, MatDatepickerModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatBadgeModule, MatStepperModule, MatTableModule , MatProgressBarModule,  MatInputModule, MatSelectModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule
  ],
  exports: [
    MatCardModule, MatBadgeModule, MatStepperModule, MatTableModule, MatProgressBarModule,  MatInputModule, MatSelectModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule
  ]
})
export class AppMaterialModule { };
