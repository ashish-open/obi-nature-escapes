import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Disable browser scroll restoration before React mounts
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

// Scroll to top immediately
window.scrollTo(0, 0);

createRoot(document.getElementById("root")!).render(<App />);
