import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { getRouter } from "./router";
import "./styles.css";

const router = getRouter();

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Root element "#root" not found in index.html');

// index.html carries static title/meta so crawlers and the first paint have
// something real. Once the router takes over it renders its own per-route tags,
// so drop the static ones — a page keeps the first <title> in the document.
document.querySelectorAll("[data-static-head]").forEach((el) => el.remove());

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
