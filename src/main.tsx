import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Providers from "./components/providers";

const HomePage = lazy(() => import("./home/page"));
const FlowPage = lazy(() => import("./flow/page"));

const FlowLayout = lazy(() => import("./components/layouts/flow-layout"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route
              index
              path="/flow"
              element={
                <FlowLayout>
                  <FlowPage />
                </FlowLayout>
              }
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Providers>
  </StrictMode>
);
