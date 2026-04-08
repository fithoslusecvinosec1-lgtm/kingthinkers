const path = require('path');
const { defineConfig } = require('playwright/test');
const nodeCommand = '"' + process.execPath + '"';

module.exports = defineConfig({
  testDir: path.join(__dirname, 'tests'),
  testMatch: ['smoke.spec.js'],
  timeout: 45000,
  expect: {
    timeout: 10000
  },
  fullyParallel: false,
  retries: 0,
  reporter: 'line',
  use: {
    baseURL: 'http://127.0.0.1:4173',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure'
  },
  webServer: {
    command: nodeCommand + ' tests/support/static-server.cjs 4173',
    url: 'http://127.0.0.1:4173/kingthinkers-login.html',
    reuseExistingServer: true,
    timeout: 15000
  }
});
