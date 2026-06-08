
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import { applyDevBrowserViewport } from "./dev/viewport.ts";
  import "./styles/index.css";

  applyDevBrowserViewport();

  createRoot(document.getElementById("root")!).render(<App />);
  