import { GuestsModel } from './guests.model';

export class CheckinsModel{
	id: number | undefined;
	guest: GuestsModel | undefined;
	additional_vehicle: boolean | undefined;
	departure_date: Date | undefined;
	entry_date: Date | undefined;
	total_cost: number | undefined;
}