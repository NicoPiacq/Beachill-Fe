import { PlayerDto } from "./player";

export interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    registrationDate: Date;
    lastLogin: Date;
    player: PlayerDto;
    role: string;
}