export interface ScreenshotManagerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
