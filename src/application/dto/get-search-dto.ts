import { IsDefined, IsString, Length, ValidationArguments } from 'class-validator';
import { MIN_WORD, MAX_WORD } from '../../utils/constants/constants';
import { FIELD_VALIDATION_ERRORS } from '../../utils/errors/field-validation-errors';

export class GetSearchDto {
	@IsDefined({
		message: ({ property }: ValidationArguments) => FIELD_VALIDATION_ERRORS.REQUIRED(property),
	})
	@Length(MIN_WORD, MAX_WORD, {
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.STRING_LENGTH(validationArguments, MIN_WORD, MAX_WORD),
	})
	@IsString({
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.NOT_STRING(validationArguments),
	})
	name: string;

	constructor(params: unknown) {
		Object.assign(this, params);
	}
}
