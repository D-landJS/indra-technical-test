import { TypeValidator } from '../../../src/utils/validators/type-validator';

describe('TypeValidator getTypeValue - Simplified Tests', () => {
	it('correctly identifies basic types', () => {
		expect(TypeValidator.getTypeValue(42)).toBe('number');
		expect(TypeValidator.getTypeValue('Hello')).toBe('string');
		expect(TypeValidator.getTypeValue(true)).toBe('boolean');
		expect(TypeValidator.getTypeValue(undefined)).toBe('undefined');
		expect(TypeValidator.getTypeValue(null)).toBe('unknown');
	});

	it('correctly identifies arrays and objects', () => {
		expect(TypeValidator.getTypeValue([1, 2])).toBe('array');
		expect(TypeValidator.getTypeValue({})).toBe('object');
		expect(TypeValidator.getTypeValue({ key: 'value' })).toBe('object');
	});

	it('returns "unknown" for unsupported or special types', () => {
		expect(TypeValidator.getTypeValue(Symbol('test'))).toBe('unknown');
		expect(TypeValidator.getTypeValue(() => {})).toBe('unknown');
	});
});
