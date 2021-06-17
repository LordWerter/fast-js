module.exports = {
  "BUILD_LIST": {
    "../../../dist/server/server__storybook__app_client": "./src/server-storybook/app_client.ts",
    "../../../dist/server/server__docs_development":      "./src/server-docs/docs_development.ts",
    "../../../dist/server/server__app":                   "./src/server-app/index.ts"
  },
  "URLS": {
    "STATIC_FILES_PATHS": {
      "APP_CLIENT": {
        "DEV":  "dist/client/dev-build",
        "PROD": "dist/client/build"
      },
      "DOCS_DEVELOPMENT": {
        "DEV":  "packages/documentation/development/website/build/development",
        "PROD": "docs/development"
      },
      "STORYBOOK_APP": {
        "DEV":  "dist/storybook/app_client",
        "PROD": "storybook/ui_system"
      }
    }
  }
};
