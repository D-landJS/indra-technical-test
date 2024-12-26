export enum HOST {
	SWAPI = 'https://swapi.py4e.com',
}

export enum ENV {
	DATABASE_MYSQL_HOST = 'DATABASE_MYSQL_HOST',
	MYSQL_ROOT_PASSWORD = 'MYSQL_ROOT_PASSWORD',
	DATABASE_MYSQL_NAME = 'DATABASE_MYSQL_NAME',
	DATABASE_MYSQL_USER = 'DATABASE_MYSQL_USER',
	DATABASE_MYSQL_PASSWORD = 'DATABASE_MYSQL_PASSWORD',
	DATABASE_MYSQL_PORT = 'DATABASE_MYSQL_PORT',
}

export enum HTTP {
	STATUS_CODE_201 = 201,
	STATUS_CODE_200 = 200,
	STATUS_CODE_400 = 400,
	STATUS_CODE_401 = 401,
	STATUS_CODE_403 = 403,
	STATUS_CODE_404 = 404,
	STATUS_CODE_409 = 409,
	STATUS_CODE_500 = 500,
}
export enum HEADERS {
	APPLICATION = 'Application',
	CONTENT_TYPE = 'Content-Type',
	USER_AGENT = 'User-Agent',
	ACCESS_CONTROL_ALLOW_HEADERS = 'Access-Control-Allow-Headers',
	ACCESS_CONTROL_ALLOW_ORIGIN = 'Access-Control-Allow-Origin',
	ACCESS_CONTROL_ALLOW_METHODS = 'Access-Control-Allow-Methods',
}
export enum HEADERS_VALUE {
	ALLOW = '*',
	APPLICATION_JSON = 'application/json',
}

export enum TIMEOUT {
	PROVIDER = 7001,
}

export enum NUM {
	ZERO = 0,
	ONE = 1,
}

export enum ERROR_OBJECT_TYPE {
	GENERAL_ERROR = 'general_error',
}

export enum ERROR_CATEGORY {
	INVALID_PARAMETER = 'invalid_parameter',
	API_FAILURE = 'api_failure',
	RESOURCE_NOT_FOUND = 'resource_not_found',
	CONFLICT_ERROR = 'conflict_error',
}
