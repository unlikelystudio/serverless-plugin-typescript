import { getTypescriptConfig, makeDefaultTypescriptConfig } from '../src/utils';

describe('getTypescriptConfig', () => {
	it('returns default typescript configuration if the one provided does not exist', () => {
		expect(getTypescriptConfig(process.cwd(), '/ciaone/my-folder')).toEqual(
			makeDefaultTypescriptConfig(),
		);
	});

	it('returns configured typescript configuration if provided', () => {
		expect(
			getTypescriptConfig(process.cwd(), './tests/custom.tsconfig.json').target,
		).toEqual(2);
	});
});
