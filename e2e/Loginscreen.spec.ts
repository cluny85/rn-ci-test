import { device, expect, element, by } from 'detox';

describe('Loginscreen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.id('login-button')).tap();
  });

  describe('on load', () => {
    it('shows the expected elements', async () => {
      await expect(element(by.id('loginScreen'))).toBeVisible();
      await expect(element(by.id('email-input'))).toBeVisible();
      await expect(element(by.id('password-input'))).toBeVisible();
      await expect(element(by.id('forgotpwd-link'))).toBeVisible();
      await expect(element(by.id('loginButton'))).toBeVisible();
    });

    it('Navigate to after login click', async () => {
      await element(by.id('email-input')).typeText('oscar@bob.io');
      await element(by.id('password-input')).typeText('12345');

      if (device.getPlatform() === 'ios') {
        await element(by.id('loginButton')).tap();
        await expect(element(by.id('introScreen'))).toBeVisible();
      }
    });
  });
});
