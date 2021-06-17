import type { Config } from '@jest/types';

export const getPreset4Server = ():Config.InitialOptions => {
	return {
	transform: {
		"\\.(ts|tsx)$": "ts-jest"
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?|tsx?)$",
	testPathIgnorePatterns: [
		"<rootDir>/build/",
		"<rootDir>/config/",
		"<rootDir>/coverage/",
		"<rootDir>/node_modules/",
		"<rootDir>/src/__mocks__"
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
	],
    globals: {
      'ts-jest': {
        tsConfig: `../configs/typescript/server/tsconfig.json`
      }
    }
};
};

export default getPreset4Server;
