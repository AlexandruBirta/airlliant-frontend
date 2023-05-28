import {Flight} from "./flight.interface";
import {User} from "./user.interface";

export interface Ticket {
    id: number;
    seatRow: string;
    seatNumber: string;
    gate: string;
    flight: Flight;
    user: User;
    insertedDate: string;
    updatedDate: string;
}
