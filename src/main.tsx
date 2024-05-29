import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme-provider";


const queryClient = new QueryClient({
  defaultOptions: {
    queries:{
      refetchOnWindowFocus : false,
    }
  }
})


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
    <QueryClientProvider client={queryClient}>
      <Auth0ProviderWithNavigate>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRoutes />
      </ThemeProvider>
      <Toaster visibleToasts={1} position="top-right" richColors />
      </Auth0ProviderWithNavigate>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
