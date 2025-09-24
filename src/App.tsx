import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/Home/HomePage"));
const Cart = lazy(() => import("./pages/Shop/Cart"));

const LoadingSpinner = () => (
  <div className="loader"></div>
);

function App() {
  return (
    <>
      <BrowserRouter basename="/Planto">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Cart />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toaster
        position="top-left"
        toastOptions={{
          duration: 2000,
          success: {
            style: {
              backdropFilter: "blur(10px)",
              borderLeft: "2px solid green",
              backgroundColor: "#00fa0809",
              color: "#fff",
              borderRadius: "8px",
              padding: "10px",
              fontSize: "15px",
            },
          },
        }}
      />
    </>
  );
}

export default App;
