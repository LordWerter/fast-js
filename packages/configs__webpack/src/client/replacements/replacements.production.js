'use strict';

/**
 * StringReplace plugin is for all replacements in code
 */
const StringReplacePlugin = require('string-replace-webpack-plugin');

module.exports = StringReplacePlugin.replace({
  replacements: [
    {
      pattern: /UNIT_TESTING_ONLY__START([\S\s]*?)UNIT_TESTING_ONLY__END/g,
      replacement: () => {
        return "";
      }
    }
	]
});
