export interface ScreenshotManagerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  ping(): Promise<{ value: string }>; // Nova função ping
  // ping(options: { message: string }): Promise<{ response: string }>;
}


