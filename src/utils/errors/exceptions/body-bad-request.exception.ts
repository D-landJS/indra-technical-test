import { ApiGatewayResponse } from '../../../infrastructure/api-gateway/api-gateway-response';
import { HTTP } from '../../constants/enum';

export class BodyBadRequestException extends Error {
	public readonly statusCode: number = HTTP.STATUS_CODE_400;

	public declare response: ApiGatewayResponse;

	constructor(public readonly originDescription: string, public readonly error: object) {
		super();
		this.response = new ApiGatewayResponse(this.statusCode, this.error);
	}
}
