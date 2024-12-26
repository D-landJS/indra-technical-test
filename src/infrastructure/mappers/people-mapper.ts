import { PeopleSWPResponseEN, PeopleSWPResponseES } from '../../domain';
import { translate, stringifyProperties, parseJsonProperties } from '../../utils';
import { spanishTranslationMap, jsonProperties } from '../../utils/constants/constants';

export class PeopleMapper {
	public static translateToSpanish(data: PeopleSWPResponseEN): PeopleSWPResponseES {
		return translate<PeopleSWPResponseES, PeopleSWPResponseEN>(data, spanishTranslationMap);
	}

	public static prepareForDatabase(data: PeopleSWPResponseEN): PeopleSWPResponseEN {
		return stringifyProperties(data, jsonProperties);
	}

	public static parseFromDatabase(data: PeopleSWPResponseES): PeopleSWPResponseES {
		const spanishJsonProps = jsonProperties.map((prop) => spanishTranslationMap[prop]);
		return parseJsonProperties(data, spanishJsonProps);
	}
}
