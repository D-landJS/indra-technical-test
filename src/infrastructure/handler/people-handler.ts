import { inject, injectable } from 'inversify';
import { APIGatewayEvent } from 'aws-lambda';
import { ApiGatewayResponse } from '../api-gateway/api-gateway-response';
import { TYPES } from '../di/types';
import { HTTP } from '../../utils/constants/enum';
import { PeopleService, CreatePersonDTO, GetSearchDto } from '../../application';
import { ErrorHandler } from '../../utils/errors/error-handler';

@injectable()
export class PeopleHandler {
	constructor(@inject(TYPES.StarWarsService) private peopleService: PeopleService) {}

	async create(event: APIGatewayEvent): Promise<ApiGatewayResponse> {
		try {
			const body = JSON.parse(event?.body || '{}');
			const createReq: CreatePersonDTO = new CreatePersonDTO(body);
			const res = await this.peopleService.create(createReq);
			return new ApiGatewayResponse(HTTP.STATUS_CODE_201, res);
		} catch (e) {
			const handledError = ErrorHandler.handleKnownErrors(e);

			if (handledError === null) {
				return ErrorHandler.generateInternalServerErrorResponse(e);
			}

			return handledError;
		}
	}

	async get(event: APIGatewayEvent): Promise<ApiGatewayResponse> {
		try {
			const getSearchDto: GetSearchDto = new GetSearchDto((event.queryStringParameters as any) || {});
			const res = await this.peopleService.getByName(getSearchDto);
			return new ApiGatewayResponse(HTTP.STATUS_CODE_200, res);
		} catch (e) {
			if (ErrorHandler.handleKnownErrors(e)) return e.res;
			return ErrorHandler.generateInternalServerErrorResponse(e);
		}
	}
}
