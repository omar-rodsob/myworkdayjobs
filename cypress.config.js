const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://jll.wd1.myworkdayjobs.com/es/jlltcareers/job/Mexico%2CMEX/Senior-QA-Automation-Engineer_REQ321510/apply/applyManually?source=APPLICANT_SOURCE-6-42',
  },
});
