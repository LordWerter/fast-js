'use strict';

/**
 * StringReplace plugin is for all replacements in code
 */
const StringReplacePlugin = require('string-replace-webpack-plugin');

module.exports = StringReplacePlugin.replace({
  replacements: [
    {
      pattern: /#SERVER_URL#/gi,
      replacement: () => {
				const curMode = process.env.NODE_ENV;
				switch(curMode) {
					case 'production':
            return 'http://agent.default.lb.k8s-dt-mgd-01.k8s.raiffeisen.ru';
          case 'development':
            return 'http://agent.default.lb.k8s-dt-mgd-01.k8s.raiffeisen.ru';
				}
			}
		}
	]
});
