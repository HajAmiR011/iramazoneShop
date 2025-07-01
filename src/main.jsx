import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "@mui/material";
import { Theme } from "./components/mui/mui.config.js";
import "./index.css";

const cache = createCache({
  key: "css",
  prepend: true,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <CacheProvider value={cache}>
        <App />
      </CacheProvider>
    </ThemeProvider>
  </StrictMode>
);
