import { registerPlugin } from '@capacitor/core';

import type { ScreenshotManagerPlugin } from './definitions';

const ScreenshotManager = registerPlugin<ScreenshotManagerPlugin>(
  'ScreenshotManager',
  {
    web: () => import('./web').then(m => new m.ScreenshotManagerWeb()),
  },
);

export * from './definitions';
export { ScreenshotManager };


