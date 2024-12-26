import { HEADERS, HEADERS_VALUE } from './enum';

export const READERS_RESPONSE = {
	[HEADERS.CONTENT_TYPE]: HEADERS_VALUE.APPLICATION_JSON,
	[HEADERS.ACCESS_CONTROL_ALLOW_HEADERS]: HEADERS_VALUE.ALLOW,
	[HEADERS.ACCESS_CONTROL_ALLOW_ORIGIN]: HEADERS_VALUE.ALLOW,
	[HEADERS.ACCESS_CONTROL_ALLOW_METHODS]: HEADERS_VALUE.ALLOW,
};
export const MIN_WORD = 1;
export const MAX_WORD = 50;

export const TAG = {
	SWAPI_PROD: 'SWAPI_PROD',
};

export const spanishTranslationMap: Record<string, string> = {
	name: 'nombre',
	height: 'altura',
	mass: 'masa',
	hair_color: 'color_del_cabello',
	skin_color: 'color_de_piel',
	eye_color: 'color_de_ojos',
	birth_year: 'fecha_de_nacimiento',
	gender: 'genero',
	homeworld: 'planeta_origen',
	films: 'peliculas',
	species: 'especies',
	vehicles: 'vehiculos',
	starships: 'naves',
	created: 'creado',
	edited: 'editado',
	url: 'url',
};

export const jsonProperties = ['films', 'species', 'vehicles', 'starships'];
