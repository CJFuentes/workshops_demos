// Application configuration
// ⚠️  EXERCISE SETUP: This file contains a hardcoded API key.
//     Gitleaks will detect it during pre-commit scan.
//     The exercise demonstrates what happens when --no-verify is not blocked.

export const config = {
  port: process.env.PORT ?? 3000,
  environment: process.env.NODE_ENV ?? 'development',

  // TODO: move this to environment variables before going to production
  apiKey: 'xK9pM3wQ7zR2nB5vY8hC1jA4sE6fL0tUdG3mNpS',

  database: {
    host: process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT ?? 5432),
    name: process.env.DB_NAME ?? 'myapp',
  },
};
