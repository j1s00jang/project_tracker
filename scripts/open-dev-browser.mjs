import { execFile } from "node:child_process";
import fs from "node:fs";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export const DEV_BROWSER_WIDTH = 1440;
export const DEV_BROWSER_HEIGHT = 1024;
export const DEV_BROWSER_LEFT = 0;
export const DEV_BROWSER_TOP = 0;

const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

export async function openDevBrowser(url) {
  const args = [
    "--new-window",
    `--window-size=${DEV_BROWSER_WIDTH},${DEV_BROWSER_HEIGHT}`,
    `--window-position=${DEV_BROWSER_LEFT},${DEV_BROWSER_TOP}`,
    url,
  ];

  if (fs.existsSync(CHROME_PATH)) {
    await execFileAsync(CHROME_PATH, args);
    return;
  }

  await execFileAsync("open", ["-na", "Google Chrome", "--args", ...args]);
}
