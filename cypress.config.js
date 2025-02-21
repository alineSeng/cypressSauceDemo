const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : "https://www.saucedemo.com/v1/",
    defaultCommandTimeout : 16000,
    specPattern: [
      "cypress/e2e/**/*.spec.js",
      "cypress/e2e/**/*.cy.js",
      "cypress/e2e/**/*.js",
    ]
  },
  
});
