import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreateReservationComponent, EditReservationComponent, ScheduleComponent]
})
export class AppointmentModule { }
