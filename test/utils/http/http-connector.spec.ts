import 'reflect-metadata';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { HttpConnector } from '../../../src/utils';
import { HTTP } from '../../../src/utils/constants/enum';

describe('HttpConnector', () => {
	let mockAxios: MockAdapter;
	let httpConnector: HttpConnector;

	beforeEach(() => {
		mockAxios = new MockAdapter(axios);
		httpConnector = new HttpConnector({
			host: 'http://localhost',
			timeout: 1000,
		});
	});

	afterEach(() => {
		mockAxios.reset();
	});

	it('should return a 200 response with expected data when GET request is successful', async () => {
		const postData = { someData: 'test' };
		const responseData = { id: 123, ...postData };
		mockAxios.onGet('/test').reply(HTTP.STATUS_CODE_200, responseData);

		const response = await httpConnector.get('/test');

		expect(response.body).toEqual(responseData);
		expect(response.statusCode).toBe(HTTP.STATUS_CODE_200);
	});

	it('should return a 500 response with expected data when GET request fails', async () => {
		const responseData = { error: 'Internal Server Error' };
		mockAxios.onGet('/test').reply(HTTP.STATUS_CODE_500, responseData);

		const response = await httpConnector.get('/test');
		expect(response.body).toEqual(responseData);
		expect(response.statusCode).toBe(HTTP.STATUS_CODE_500);
	});
});
