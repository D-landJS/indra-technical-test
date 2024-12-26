export interface PeopleApiResponse<T> {
	count: number;
	next: any;
	previous: any;
	results: T[];
}
