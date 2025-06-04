const { defineConfig } = require('cypress');
const xlsx = require('xlsx');

module.exports = defineConfig({
  projectId: 'sucq2u',
  e2e: {
    projectId: 'sucq2u',
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

            // Read the sheet as JSON and include only columns A, B, C, D, E
            const data = xlsx.utils.sheet_to_json(sheet, { header: 1 }); // Read all rows as arrays
            const filteredData = data.map(row => 
              row.slice(0, 5).join(' ') // Include only the first 5 columns (A, B, C, D, E) and add a space between columns
            );
            return filteredData;
          } catch (err) {
            console.error('Error reading Excel:', err);
            throw err;
          }
        },
      });
    },
  },
});
