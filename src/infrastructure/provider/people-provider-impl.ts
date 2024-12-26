import { inject, injectable, named } from 'inversify';
import { TYPES } from '../di/types';
import { HttpResponse, PeopleApiResponse, PeopleSWPResponseEN } from '../../domain';
import { PeopleProvider } from '../../domain/interfaces/people-provider.interface';
import { TAG } from '../../utils/constants/constants';
import { HttpConnector } from '../../utils/http/http-connector';

@injectable()
export class PeopleProdiverImpl implements PeopleProvider {
	constructor(
		@inject(TYPES.HttpConnector)
		@named(TAG.SWAPI_PROD)
		private httpConnector: HttpConnector
	) {}

	public async searchPeople(word: string): Promise<HttpResponse<PeopleApiResponse<PeopleSWPResponseEN>>> {
		const endpoint: string = `/api/people/?search=${word}`;
		const { statusCode, body }: HttpResponse<PeopleApiResponse<PeopleSWPResponseEN>> = await this.httpConnector.get(endpoint);
		return { statusCode, body };
	}
}
