import type { Config } from '@jest/types';

export const getPreset4Lib = ():Config.InitialOptions => {
	return {
		transform: {
			"\\.(ts|tsx)$": "ts-jest"
		},
		testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?|tsx?)$",
		testPathIgnorePatterns: [
			"<rootDir>/build/",
			"<rootDir>/dist/",
			"<rootDir>/.storybook/",
			"<rootDir>/public/",
			"<rootDir>/assets/",
			"<rootDir>/config/",
			"<rootDir>/coverage/",
			"<rootDir>/node_modules/",
			"<rootDir>/**/__mocks__/"
		],
		moduleFileExtensions: [
			"ts",
			"tsx",
			"js",
			"jsx",
			"json",
			"node"
		],
		collectCoverage: true,
		modulePaths: [
			"<rootDir>/node_modules",
			"<rootDir>/../../node_modules"
		]
	}
};

export default getPreset4Lib;