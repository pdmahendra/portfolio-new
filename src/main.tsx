import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import SplashCursor from "./components/custom/splashCursor.tsx";
import { ScrollArea } from "./components/ui/scroll-area.tsx";
import Navbar from "./components/custom/navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollArea className="h-full border border-white rounded text-white">
        <SplashCursor />
        <Navbar />
        <App />
      </ScrollArea>
    </BrowserRouter>
  </StrictMode>
);
