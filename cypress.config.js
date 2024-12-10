const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://receive-smss.com',
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'spec, mochawesome',
      mochawesomeReporterOptions: {
        reportDir: 'cypress/reports',
        overwrite: false,
        html: false,
        json: true,
      },
    },
  },
});
