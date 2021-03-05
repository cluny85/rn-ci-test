import { device, expect, element, by } from 'detox';

describe('Dragscreen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
    await element(by.id('drag-button')).tap();
  });

  describe('on load', () => {
    it('shows the expected text', async () => {
      await expect(element(by.id('dragScreen'))).toExist();
      await expect(element(by.id('drag-item-1'))).toExist();
      await expect(element(by.id('drag-item-2'))).toExist();
    });
  });

  // ##################################################################
  // DOC LINK: https://github.com/wix/Detox/blob/master/docs/APIRef.ActionsOnElement.md#longpressanddragduration-normalizedpositionx-normalizedpositiony-targetelement-normalizedtargetpositionx-normalizedtargetpositiony-speed-holdduration--ios-only
  // ##################################################################
  describe('perform drag and drop', () => {
    it('shows the expected text', async () => {
      // await element(by.id('drag-item-1')).longPressAndDrag(1000, NaN, NaN, element(by.id('drag-item-2')), 'slow', NaN);
      // await element(by.id('drag-item-2')).longPressAndDrag(2000, 0.9, NaN, element(by.id('drag-item-1')), 0.9, NaN, 'slow', 0);
    });
  });
});
