import dynamic from "next/dynamic";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = dynamic(() => import("../features/application/AppShell"), {
  ssr: false,
});

const queryClient = new QueryClient();

export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
