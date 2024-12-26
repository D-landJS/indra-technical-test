import { HTTP } from '../../utils/constants/enum';

export interface HttpResponse<T> {
	statusCode: HTTP;
	body: T;
	headers?: object;
	config?: object;
	request?: object;
}
