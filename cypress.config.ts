import { defineConfig } from "cypress";
import { config } from 'dotenv'

config()

export default defineConfig({
  env: {
    CYPRESS_BASE_URL: (process.env.GITPOD_WORKSPACE_URL || '').replace('https://', 'https://4200-'),
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
