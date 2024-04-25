import { WebPlugin } from '@capacitor/core';
import type { ScreenshotManagerPlugin } from './definitions';

export class ScreenshotManagerWeb extends WebPlugin implements ScreenshotManagerPlugin {
    async echo(options: { value: string }): Promise<{ value: string }> {
        console.log('ECHO', options);
        return options;
    }

    async ping(options: { message: string }): Promise<{ response: 'pong' }> {
        console.log('PING', options.message);
        return Promise.resolve({ response: 'pong' });
    }

    async addScreenshotListener(callback: (info: any) => void): Promise<void> {
        console.warn('Screenshot detection is not available on the web.');
        callback({ message: 'Screenshot detection not supported on this platform.' });
    }

 
}
