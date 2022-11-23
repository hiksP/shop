import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/pages/Home";
import Cart from "./components/pages/cart/Cart";
import NotFoundPage from "./components/pages/notFoundPage/NotFoundPage";
import Product from "./components/pages/product/Product";
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
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="product/:id" element={<Product></Product>} />
        <Route
          path="*"
          element={
            <NotFoundPage title="Страницы не существует!"></NotFoundPage>
          }
        />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
