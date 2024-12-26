import { ValidationArguments } from 'class-validator';
import { TypeValidator } from '../validators/type-validator';

export const FIELD_VALIDATION_ERRORS = {
	REQUIRED: (fieldName: string): string => `El campo '${fieldName}' es requerido y no puede estar vacío.`,
	ARRAY_MIN_LENGTH: ({ property }: ValidationArguments): string => `El campo '${property}' debe contener al menos un elemento.`,
	STRING_LENGTH: ({ property }: ValidationArguments, min: number, max: number): string => `El campo '${property}' debe tener entre ${min} y ${max} caracteres.`,
	NOT_ARRAY: ({ property }: ValidationArguments): string => `El campo '${property}' debe ser un arreglo.`,
	NOT_STRING: ({ property, value }: ValidationArguments): string => `El campo '${property}' debe ser una cadena de texto, pero se recibió un valor de tipo '${TypeValidator.getTypeValue(value)}'.`,
};
