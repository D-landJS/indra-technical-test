import { HttpResponse } from './http-response.interface';
import { PeopleApiResponse } from './people-api-response.interface';
import { PeopleSWPResponseEN } from './people-response.en.interface';

export interface PeopleProvider {
	searchPeople(word: string): Promise<HttpResponse<PeopleApiResponse<PeopleSWPResponseEN>>>;
}
