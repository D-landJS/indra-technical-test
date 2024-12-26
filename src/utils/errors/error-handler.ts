import { $log } from 'ts-log-debug';
import { ApiGatewayResponse } from '../../infrastructure/api-gateway/api-gateway-response';
import { HTTP } from '../constants/enum';
import { ERROR_MESSAGES } from './error-messages';
import { BadRequestException, BodyBadRequestException, InternalServerErrorException, NotFoundProviderException, ResourceExistsException } from './exceptions';

export class ErrorHandler {
	public static handleKnownErrors(error: Error): ApiGatewayResponse {
		if (error instanceof NotFoundProviderException) {
			$log.error(`${error.originDescription} | Error`, JSON.stringify(error.response));
			return new ApiGatewayResponse(HTTP.STATUS_CODE_404, {
				message: error.message,
			});
		}

		if (error instanceof BadRequestException || error instanceof BodyBadRequestException) {
			$log.error(`${error.originDescription} | Error`, JSON.stringify(error.response));
			return new ApiGatewayResponse(HTTP.STATUS_CODE_400, {
				message: error.message,
			});
		}

		if (error instanceof ResourceExistsException) {
			$log.error(`${error.originDescription} | Error`, JSON.stringify(error.response));
			return new ApiGatewayResponse(HTTP.STATUS_CODE_409, {
				message: error.name,
				details: error.originDescription,
			});
		}

		if (error instanceof InternalServerErrorException) {
			$log.error(`${error.originDescription} | Error`, JSON.stringify(error.response));
			return new ApiGatewayResponse(HTTP.STATUS_CODE_500, {
				message: error.message,
			});
		}
		return null;
	}

	public static generateInternalServerErrorResponse(error: Error): ApiGatewayResponse {
		const { name, message, stack } = error;

		const response: ApiGatewayResponse = new ApiGatewayResponse(HTTP.STATUS_CODE_500, ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
		$log.error(`Exception:`, JSON.stringify({ name, message, stack }));
		$log.error(`Error 500 Response:`, JSON.stringify(response));

		return response;
	}
}
