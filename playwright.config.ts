import { defineConfig } from '@playwright/test';

console.log('config')

export default defineConfig({
  testDir: './tests', 
  timeout: 30000,    
  retries: 0,         

  use: {
    headless: false,  
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
     launchOptions: {
    args: ['--window-position=100,100', '--window-size=1280,720']
  },
  },

  reporter: [['html', { open: 'on-failure' }]],
});
