import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/pages/Home";
import "./index.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Router,
  Routes,
  BrowserRouter,
} from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        {/* <Route path="/cart" element={<Cart></Cart>} />
        <Route path="product/:id" element={<Product></Product>} />
        <Route path="*" element={<NotFoundPage></NotFoundPage>} /> */}
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
