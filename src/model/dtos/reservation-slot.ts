import { Time } from "@angular/common";

export interface ReservationSlotDto {

    fieldId: number;
    startTime: Time;
    endTime: Time;
    reserved: boolean;
    reservationDate: Date;
    userName: string;
    userSurname: string;
    userId: number;

}