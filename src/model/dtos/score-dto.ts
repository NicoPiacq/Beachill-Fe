export interface ScoreDto {
    id: number;
    score: number;
    scoreType: string;
    matchWin: number;
    matchLose: number;
    pointScored: number;
    pointConceded: number;
    playerId: number;
}