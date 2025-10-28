import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/Error";
import "./App.css";

const Index = lazy(() => import("./pages/Index"));

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={Error}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
