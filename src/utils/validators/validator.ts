import { validate, ValidationError } from 'class-validator';
import { NUM } from '../constants/enum';
import { BodyBadRequestException } from '../errors/exceptions';

export class Validator {
	public static async validate(dto: object): Promise<void> {
		const validationErrors: ValidationError[] = await validate(dto, {
			stopAtFirstError: true,
		});

		if (validationErrors.length >= NUM.ONE) {
			const errorMessages = validationErrors.flatMap((error: ValidationError) => {
				const messages: string[] = error.constraints ? Object.values(error.constraints) : [];

				const nestedMessages =
					error.children?.flatMap((childError) => {
						const childMessages = childError.constraints ? Object.values(childError.constraints) : [];

						return childMessages.concat(childError.children?.flatMap((grandChild) => Object.values(grandChild.constraints) || []));
					}) || [];

				return [
					{
						campo: error.property,
						valor: error.value,
						mensajes: [...messages, ...nestedMessages],
					},
				];
			});

			throw new BodyBadRequestException('Bad Request - Validation Errors', errorMessages);
		}
	}
}
