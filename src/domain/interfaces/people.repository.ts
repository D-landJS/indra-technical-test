import { PeopleSWPResponseEN } from './people-response.en.interface';

export interface PeopleRepository {
	createPerson(peopleSPResponse: PeopleSWPResponseEN): Promise<number>;
	doesPersonExist(name: string): Promise<boolean>;
	findByName(name: string): Promise<PeopleSWPResponseEN[]>;
}
