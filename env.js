const { writeFileSync } = require('fs')
const { join } = require("path")

const env = {
  GITPOD_WORKSPACE_URL: process.env.GITPOD_WORKSPACE_URL,
  GOOGLE_CLIENT_ID: JSON.parse(process.env.GOOGLE_CREDENTIALS_UWAKE || 'null')?.web?.clientId || '',
}

if (!env.GITPOD_WORKSPACE_URL) {
  throw new Error('Have not implemented anything for things outside of gitpod, ask Dan about it :)')
}

const appEnvironments = {
  API_URL: env.GITPOD_WORKSPACE_URL.replace('https://', 'https://3000-'),
  GOOGLE_CLIENT_ID: env.GOOGLE_CLIENT_ID,
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
