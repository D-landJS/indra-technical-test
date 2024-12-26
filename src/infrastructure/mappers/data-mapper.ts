import { injectable } from 'inversify';
import { HTTP } from '../../utils/constants/enum';

@injectable()
export class HttpStatusMapper {
	public static parseStatusCode(status: string): HTTP {
		const statusCode = Number(status);

		if (!Number.isNaN(statusCode) && Object.values(HTTP).includes(statusCode)) {
			return statusCode as HTTP;
		}

		return HTTP.STATUS_CODE_500;
	}
}
