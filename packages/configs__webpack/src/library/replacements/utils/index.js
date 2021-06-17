"use strict";

export const getEntry = (target) => {
	const isClient = target === 'client';
	const isWebWorker = target === 'webworker';

	if (isClient) {
		return {
			index: './src/client.tsx'
		};
	} else if (isWebWorker) {
		return {
			'../service-worker': './src/webworker/service-worker.ts'
		};
	}
};
