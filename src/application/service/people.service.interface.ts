import { PeopleSWPResponseES } from '../../domain/interfaces/people-response.es.interface';
import { CreatePersonDTO } from '../dto/create-person-dto';
import { GetSearchDto } from '../dto/get-search-dto';

export interface PeopleService {
	create(createRequest: CreatePersonDTO): Promise<PeopleSWPResponseES>;
	getByName(getParameters: GetSearchDto): Promise<PeopleSWPResponseES[]>;
}
