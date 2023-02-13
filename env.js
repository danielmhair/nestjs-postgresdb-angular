const { writeFileSync } = require('fs')
const { join } = require("path")

const env = {
  GITPOD_WORKSPACE_URL: process.env.GITPOD_WORKSPACE_URL,
}

if (!env.GITPOD_WORKSPACE_URL) { throw new Error('Have not implemented anything for things outside of gitpod.') }

const appEnvironments = {
  API_URL: env.GITPOD_WORKSPACE_URL.replace('https://', 'https://3000-'),
}

writeFileSync(
  join(__dirname, 'app', 'apps', 'app', 'src', 'environments', 'environments.ts'),
  `export const environments = ${JSON.stringify(appEnvironments, null, 2)}`,
  { encoding: 'utf-8' },
)

writeFileSync(
  join(__dirname, '.env'),
  Object.keys(env).map(k => `${k}=${env[k]}`).join('\n'),
  { encoding: 'utf-8' },
)