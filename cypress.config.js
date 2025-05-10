const { defineConfig } = require('cypress');
const xlsx = require('xlsx');

module.exports = defineConfig({
  e2e: {
    projectId: 'your-project-id',
    video: true,
    screenshotOnRunFailure: true,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
    },
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);

      on('task', {
        readExcel({ filePath, sheetName }) {
          try {
            const workbook = xlsx.readFile(filePath);
            const sheet = workbook.Sheets[sheetName];
            if (!sheet) {
              throw new Error(`Sheet "${sheetName}" not found`);
            }
            const data = xlsx.utils.sheet_to_json(sheet, { header: 0 });
            return data;
          } catch (err) {
            console.error('Error reading Excel:', err);
            throw err;
          }
        },
      });
    },
  },
});
