import { User } from "./user";

export interface TournamentAdminDto {
    id?: number;
    tournamentName: string;
    startDate: Date;
    endDate: Date;
    tournamentTypeName: string;
    place: string;
    status: number;
    userDto: User | null;
}