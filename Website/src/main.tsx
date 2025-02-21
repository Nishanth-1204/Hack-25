import reactRouter from "react-dom/client";
import App from "./App";
import "./index.css";

reactRouter.createRoot(document.getElementById("root")!).render(<App />);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(() =>
        console.log("✅ Service Worker registered for media preloading.")
      )
      .catch((error) =>
        console.error("❌ Service Worker registration failed:", error)
      );
  });
}
