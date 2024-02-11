import { Time } from "@angular/common";

export interface ReservationRequestDto {
    fieldId: number;
    date: Date;
    start: Time;
    end: Time;
}