import { IsDefined, ValidationArguments, Length, IsString, ArrayMinSize, IsArray } from 'class-validator';
import { PeopleSWPResponseEN } from '../../domain';
import { MIN_WORD, MAX_WORD } from '../../utils/constants/constants';
import { NUM } from '../../utils/constants/enum';
import { FIELD_VALIDATION_ERRORS } from '../../utils/errors/field-validation-errors';

export class CreatePersonDTO implements PeopleSWPResponseEN {
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

	@IsDefined({
		message: ({ property }: ValidationArguments) => FIELD_VALIDATION_ERRORS.REQUIRED(property),
	})
	@Length(MIN_WORD, MAX_WORD, {
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.STRING_LENGTH(validationArguments, MIN_WORD, MAX_WORD),
	})
	@IsString({
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.NOT_STRING(validationArguments),
	})
	height: string;

	@IsDefined({
		message: ({ property }: ValidationArguments) => FIELD_VALIDATION_ERRORS.REQUIRED(property),
	})
	@Length(MIN_WORD, MAX_WORD, {
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.STRING_LENGTH(validationArguments, MIN_WORD, MAX_WORD),
	})
	@IsString({
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.NOT_STRING(validationArguments),
	})
	mass: string;

	@IsDefined({
		message: ({ property }: ValidationArguments) => FIELD_VALIDATION_ERRORS.REQUIRED(property),
	})
	@Length(MIN_WORD, MAX_WORD, {
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.STRING_LENGTH(validationArguments, MIN_WORD, MAX_WORD),
	})
	@IsString({
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.NOT_STRING(validationArguments),
	})
	hair_color: string;

	@IsDefined({
		message: ({ property }: ValidationArguments) => FIELD_VALIDATION_ERRORS.REQUIRED(property),
	})
	@Length(MIN_WORD, MAX_WORD, {
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.STRING_LENGTH(validationArguments, MIN_WORD, MAX_WORD),
	})
	@IsString({
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.NOT_STRING(validationArguments),
	})
	skin_color: string;

	@IsDefined({
		message: ({ property }: ValidationArguments) => FIELD_VALIDATION_ERRORS.REQUIRED(property),
	})
	@Length(MIN_WORD, MAX_WORD, {
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.STRING_LENGTH(validationArguments, MIN_WORD, MAX_WORD),
	})
	@IsString({
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.NOT_STRING(validationArguments),
	})
	eye_color: string;

	@IsDefined({
		message: ({ property }: ValidationArguments) => FIELD_VALIDATION_ERRORS.REQUIRED(property),
	})
	@Length(MIN_WORD, MAX_WORD, {
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.STRING_LENGTH(validationArguments, MIN_WORD, MAX_WORD),
	})
	@IsString({
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.NOT_STRING(validationArguments),
	})
	birth_year: string;

	@IsDefined({
		message: ({ property }: ValidationArguments) => FIELD_VALIDATION_ERRORS.REQUIRED(property),
	})
	@Length(MIN_WORD, MAX_WORD, {
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.STRING_LENGTH(validationArguments, MIN_WORD, MAX_WORD),
	})
	@IsString({
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.NOT_STRING(validationArguments),
	})
	gender: string;

	@IsDefined({
		message: ({ property }: ValidationArguments) => FIELD_VALIDATION_ERRORS.REQUIRED(property),
	})
	@Length(MIN_WORD, MAX_WORD, {
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.STRING_LENGTH(validationArguments, MIN_WORD, MAX_WORD),
	})
	@IsString({
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.NOT_STRING(validationArguments),
	})
	homeworld: string;

	@ArrayMinSize(NUM.ONE, {
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.ARRAY_MIN_LENGTH(validationArguments),
	})
	@Length(MIN_WORD, MAX_WORD, {
		each: true,
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.STRING_LENGTH(validationArguments, MIN_WORD, MAX_WORD),
	})
	@IsArray({
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.NOT_ARRAY(validationArguments),
	})
	@IsString({
		each: true,
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.NOT_STRING(validationArguments),
	})
	films: string[] | object;

	@ArrayMinSize(NUM.ONE, {
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.ARRAY_MIN_LENGTH(validationArguments),
	})
	@Length(MIN_WORD, MAX_WORD, {
		each: true,
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.STRING_LENGTH(validationArguments, MIN_WORD, MAX_WORD),
	})
	@IsArray({
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.NOT_ARRAY(validationArguments),
	})
	@IsString({
		each: true,
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.NOT_STRING(validationArguments),
	})
	species: string[] | object;

	@ArrayMinSize(NUM.ONE, {
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.ARRAY_MIN_LENGTH(validationArguments),
	})
	@Length(MIN_WORD, MAX_WORD, {
		each: true,
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.STRING_LENGTH(validationArguments, MIN_WORD, MAX_WORD),
	})
	@IsArray({
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.NOT_ARRAY(validationArguments),
	})
	@IsString({
		each: true,
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.NOT_STRING(validationArguments),
	})
	vehicles: string[] | object;

	@ArrayMinSize(NUM.ONE, {
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.ARRAY_MIN_LENGTH(validationArguments),
	})
	@Length(MIN_WORD, MAX_WORD, {
		each: true,
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.STRING_LENGTH(validationArguments, MIN_WORD, MAX_WORD),
	})
	@IsArray({
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.NOT_ARRAY(validationArguments),
	})
	@IsString({
		each: true,
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.NOT_STRING(validationArguments),
	})
	starships: string[] | object;

	@IsDefined({
		message: ({ property }: ValidationArguments) => FIELD_VALIDATION_ERRORS.REQUIRED(property),
	})
	@Length(MIN_WORD, MAX_WORD, {
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.STRING_LENGTH(validationArguments, MIN_WORD, MAX_WORD),
	})
	@IsString({
		message: (validationArguments: ValidationArguments) => FIELD_VALIDATION_ERRORS.NOT_STRING(validationArguments),
	})
	url: string;

	created?: Date = new Date();

	edited?: Date = new Date();

	constructor(params: PeopleSWPResponseEN) {
		Object.assign(this, params);
		if (typeof params.name === 'string') {
			this.name = params?.name?.toLowerCase().trim();
		}
	}
}
