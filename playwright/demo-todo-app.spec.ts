import { test } from '@playwright/test';

test.describe('Login Page', () => {
  test('should open google login popup', async ({ page }) => {
    await page.goto('http://localhost:4200/auth/login');
    const page3Promise = page.waitForEvent('popup');
    await page
      .frameLocator('iframe[title="Sign in with Google Button"]')
      .getByRole('button', { name: 'Sign in with Google' })
      .click();
    await page3Promise;
  });
})
