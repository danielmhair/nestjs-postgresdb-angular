const { writeFileSync } = require('fs')

const env = {
  GITPOD_WORKSPACE_URL: process.env.GITPOD_WORKSPACE_URL,
}

writeFileSync('./.env', Object.keys(env).map(k => `${k}=${env[k]}`).join('\n'))