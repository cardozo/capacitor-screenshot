import { WebPlugin } from '@capacitor/core';

import type { ScreenshotManagerPlugin } from './definitions';

export class ScreenshotManagerWeb
  extends WebPlugin
  implements ScreenshotManagerPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
