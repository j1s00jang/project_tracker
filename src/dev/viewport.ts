export const DEV_BROWSER_WIDTH = 1440;
export const DEV_BROWSER_HEIGHT = 1024;
export const DEV_BROWSER_LEFT = 0;
export const DEV_BROWSER_TOP = 0;

export function applyDevBrowserViewport() {
  if (!import.meta.env.DEV) return;

  requestAnimationFrame(() => {
    try {
      window.moveTo(DEV_BROWSER_LEFT, DEV_BROWSER_TOP);
      window.resizeTo(DEV_BROWSER_WIDTH, DEV_BROWSER_HEIGHT);
    } catch {
      // Ignored when the browser blocks programmatic window changes.
    }
  });
}
