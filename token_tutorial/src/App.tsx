import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TokenList from "./pages/token-list/TokenList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./pages/main/Main";
import TokenDetail from "./pages/token-detail/TokenDetail";
import NotFound from "./pages/not-found/Notfound";
import "./App.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const App = (): React.ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/tokens/:accountAddress" element={<TokenList />} />
          <Route
            path="/tokens/:accountAddress/:contractAddress"
            element={<TokenDetail />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};

export default App;
