
export interface MatchDto {
    id: number;
    matchNumber: number;
    groupStage: number;
    matchType: string;
    tournamentId: number;
    tournamentName: String;
    homeTeamId: number;
    homeTeamName: string;
    awayTeamId: number;
    awayTeamName: string;
    fieldNumber: number;
    startDate: Date;
    winnerTeamId: number;
    winnerTeamName: string;
    status: number;
    setNumber: number;
    adminId: number;
}