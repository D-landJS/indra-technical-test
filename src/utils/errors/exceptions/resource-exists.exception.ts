import { ApiGatewayResponse } from '../../../infrastructure/api-gateway/api-gateway-response';
import { HTTP } from '../../constants/enum';
import { ERROR_MESSAGES } from '../error-messages';

export class ResourceExistsException extends Error {
	public readonly statusCode: number = HTTP.STATUS_CODE_409;

	public declare response: ApiGatewayResponse;

	constructor(public originDescription: string, value: string) {
		super();
		this.response = new ApiGatewayResponse(this.statusCode, ERROR_MESSAGES.RECORD_ALREADY_EXISTS(value));
	}
}
