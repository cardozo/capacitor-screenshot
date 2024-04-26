import { PluginListenerHandle } from "@capacitor/core";

export interface ScreenshotManagerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  ping(options: { message: string }): Promise<{ response: string }>;
  addScreenshotListener(callback: (info: any) => void): Promise<void>;
  addListener(eventName: 'screenshotEvent', listenerFunc: (info: any) => void): Promise<PluginListenerHandle>;
}


export { PluginListenerHandle };

