import { User } from "./user";

export interface UserAuthenticatedDto {
    token: string;
    user: User;
    expirationDate: number;
}

