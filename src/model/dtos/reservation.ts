import { Time } from "@angular/common";

export interface ReservationDto {
    id: number;
    fieldId: number;
    userId: number;
    date: Date;
    start: Time;
    end: Time;
}