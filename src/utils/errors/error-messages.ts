import { ERROR_OBJECT_TYPE, ERROR_CATEGORY } from '../constants/enum';

export const ERROR_MESSAGES = {
	INTERNAL_SERVER_ERROR: {
		object: ERROR_OBJECT_TYPE.GENERAL_ERROR,
		type: ERROR_CATEGORY.API_FAILURE,
		message: `Se produjo un error inesperado en el servidor.`,
	},
	DATABASE_RECORD_NOT_FOUND: {
		object: ERROR_OBJECT_TYPE.GENERAL_ERROR,
		type: ERROR_CATEGORY.RESOURCE_NOT_FOUND,
		message: `No se hallaron registros en la base de datos.`,
	},
	PROVIDER_NOT_FOUND: {
		object: ERROR_OBJECT_TYPE.GENERAL_ERROR,
		type: ERROR_CATEGORY.RESOURCE_NOT_FOUND,
		message: `El proveedor no devolvió ningún resultado.`,
	},
	BAD_REQUEST: {
		object: ERROR_OBJECT_TYPE.GENERAL_ERROR,
		type: ERROR_CATEGORY.INVALID_PARAMETER,
		message: `La solicitud contiene parámetros incorrectos.`,
	},
	RECORD_ALREADY_EXISTS: (name: string): object => ({
		object: ERROR_OBJECT_TYPE.GENERAL_ERROR,
		type: ERROR_CATEGORY.CONFLICT_ERROR,
		message: `El registro '${name}' ya existe en el sistema.`,
	}),
	PATH_NOT_FOUND: {
		object: ERROR_OBJECT_TYPE.GENERAL_ERROR,
		type: ERROR_CATEGORY.API_FAILURE,
		message: `No se encontró la ruta especificada.`,
	},
};
