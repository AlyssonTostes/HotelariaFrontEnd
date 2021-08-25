import { GuestsModel } from "./guests.model";

export class CheckinModel{
    id: number |undefined;
    guest: GuestsModel | undefined;
    entryDate: Date | undefined;
    departureDate: Date | undefined;
}