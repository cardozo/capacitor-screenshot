import { WebPlugin } from '@capacitor/core';
import type { ScreenshotManagerPlugin, PluginListenerHandle } from './definitions';

export class ScreenshotManagerWeb extends WebPlugin implements ScreenshotManagerPlugin {
    
    constructor() {
        super({
          name: 'ScreenshotManager',
          platforms: ['web']
        });
    }

    async addListener(eventName: string, listenerFunc: (info: any) => void): Promise<PluginListenerHandle> {
        
        console.warn('Screenshot detection is not available on the web.');
        console.log(eventName)
        console.log(listenerFunc)
        const fakeListenerId = Symbol('fake_listener');
        const remove = async () => {
            console.log('Listener removed:', fakeListenerId);
        };
        // Simulate the event listener being added
        return Promise.resolve({ remove });
    }


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
