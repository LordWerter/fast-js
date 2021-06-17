/**
 * @author: Alexander Rudenko
 */

/**
 * Look in ./config folder for webpack config files
 */
switch (process.env.NODE_ENV) {
  case "production":
    module.exports = require("../configs/webpack/client/webpack.production.config")(__dirname);
    break;
  case "development":
  default:
    module.exports = require("../configs/webpack/client/webpack.development.config")(__dirname);
}
