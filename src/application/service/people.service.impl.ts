import { inject, injectable } from 'inversify';

import { PeopleService } from './people.service.interface';
import { TYPES } from '../../infrastructure/di/types';

import { Validator } from '../../utils/validators/validator';
import { NUM, HTTP } from '../../utils/constants/enum';
import { PeopleProvider, PeopleRepository, PeopleSWPResponseEN, PeopleSWPResponseES } from '../../domain';
import { PeopleMapper } from '../../infrastructure';
import { CreatePersonDTO, GetSearchDto } from '..';
import { ResourceExistsException, BadRequestException, NotFoundProviderException } from '../../utils/errors/exceptions';

@injectable()
export class PeopleServiceImpl implements PeopleService {
	constructor(
		@inject(TYPES.DatabaseRepository)
		private peopleRepository: PeopleRepository,
		@inject(TYPES.PeopleProvider)
		private peopleProvider: PeopleProvider
	) {}

	public async create(createPersonDto: CreatePersonDTO): Promise<PeopleSWPResponseES> {
		await Validator.validate(createPersonDto);

		const exists: boolean = await this.peopleRepository.doesPersonExist(createPersonDto.name);

		if (exists) {
			throw new ResourceExistsException(`El registro '${createPersonDto.name}' existe.`, createPersonDto.name);
		} else {
			await this.peopleRepository.createPerson(PeopleMapper.prepareForDatabase(createPersonDto));
		}

		return PeopleMapper.translateToSpanish(createPersonDto);
	}

	public async getByName(getSearchDto: GetSearchDto): Promise<PeopleSWPResponseES[]> {
		await Validator.validate(getSearchDto);

		const peopleDatabaseResponses: PeopleSWPResponseEN[] = await this.peopleRepository.findByName(getSearchDto.name);

		if (peopleDatabaseResponses.length >= NUM.ONE) {
			const translatedResponses: PeopleSWPResponseES[] = peopleDatabaseResponses.map(PeopleMapper.translateToSpanish);
			return translatedResponses;
		}

		const peopleApiResponses: PeopleSWPResponseEN[] = await this.searchPeopleByWord(getSearchDto.name);

		return peopleApiResponses.map(PeopleMapper.translateToSpanish);
	}

	private async searchPeopleByWord(word: string): Promise<PeopleSWPResponseEN[]> {
		const { statusCode, body } = await this.peopleProvider.searchPeople(word);

		if (statusCode !== HTTP.STATUS_CODE_200) {
			throw new BadRequestException(`bad request value: ${word}`);
		}
		if (body.count === NUM.ZERO) {
			throw new NotFoundProviderException(`Not found value: ${word}`);
		}
		return body.results;
	}
}
