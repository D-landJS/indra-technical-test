import { ApiGatewayResponse } from '../../../infrastructure/api-gateway/api-gateway-response';
import { HTTP } from '../../constants/enum';
import { ERROR_MESSAGES } from '../error-messages';

export class InternalServerErrorException extends Error {
	public readonly statusCode: number = HTTP.STATUS_CODE_500;

	public declare response: ApiGatewayResponse;

	constructor(public originDescription: string = '') {
		super();
		this.response = new ApiGatewayResponse(this.statusCode, ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
	}
}
