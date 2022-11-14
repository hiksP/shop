import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/pages/home";
import "./index.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <Home />
  </QueryClientProvider>
);
