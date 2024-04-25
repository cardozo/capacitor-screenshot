import { WebPlugin } from '@capacitor/core';

import type { ScreenshotManagerPlugin } from './definitions';

export class ScreenshotManagerWeb extends WebPlugin implements ScreenshotManagerPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async ping(options: { message: string }): Promise<{ response: string }> {
    // Simule uma operação de ping na web e retorne uma resposta.
    console.log('PING', options.message);
    // Implemente aqui a lógica que você deseja executar quando o ping for chamado.
    return Promise.resolve({ response: 'pong' });
  }

  async addScreenshotListener(callback: (info: any) => void): Promise<void> {
  
    callback({ message: 'Screenshot detection not available on web' });
  }

}
