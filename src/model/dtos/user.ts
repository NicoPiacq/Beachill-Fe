import { Player } from "./player";

export interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    registrationDate: Date;
    lastLogin: Date;
    player: Player;
    role: string;
}