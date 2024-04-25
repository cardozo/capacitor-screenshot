export interface ScreenshotManagerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  ping(options: { message: string }): Promise<{ response: string }>;
  addScreenshotListener(callback: (info: any) => void): Promise<void>;
  
}


