const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  screenshotOnRunFailure: true,
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
setupNodeEvents(on, config) {
  // implement node event listeners here
  require("cypress-mochawesome-reporter/plugin")(on);

  
      },
    },
  });
 



