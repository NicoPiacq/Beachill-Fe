import { Time } from "@angular/common";
import { ReservationPlaceDto } from "./reservations-place";
import { FieldDto } from "./field";

export interface ReservationDto {
    id: number;
    fieldDto: FieldDto;
    userId: number;
    date: Date;
    start: Time;
    end: Time;
}