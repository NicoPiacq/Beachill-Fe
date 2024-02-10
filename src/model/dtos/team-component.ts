import { TeamDto } from "./team";

export interface TeamComponentDto {
    id: number;
    teamDto: TeamDto;
    playerId: number;
    playerName: string;
    playerSurname: string;
    status: number;
}