import 'reflect-metadata';
import { HttpStatusMapper } from '../../../src/infrastructure';
import { HTTP } from '../../../src/utils/constants/enum';

describe('HttpStatusMapper - parseStatusCode', () => {
	it('should return the correct HTTP enum for valid status codes', () => {
		const validCodes = ['200', '404', '401'];
		const expectedResults = [HTTP.STATUS_CODE_200, HTTP.STATUS_CODE_404, HTTP.STATUS_CODE_401];

		validCodes.forEach((code, index) => {
			expect(HttpStatusMapper.parseStatusCode(code)).toBe(expectedResults[index]);
		});
	});

	it('should return STATUS_CODE_500 for invalid strings or undefined/null', () => {
		const invalidInputs = ['---', '', '***', '987', null, undefined];
		invalidInputs.forEach((input) => {
			expect(HttpStatusMapper.parseStatusCode(input as any)).toBe(HTTP.STATUS_CODE_500);
		});
	});
});
