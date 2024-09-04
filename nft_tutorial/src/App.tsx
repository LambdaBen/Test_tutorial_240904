import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NftList from "./pages/nft-list/NftList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./pages/main/Main";
import NftDetail from "./pages/nft-detail/NftDetail";
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
          <Route path="/nfts/:accountAddress" element={<NftList />} />
          <Route
            path="/nfts/:accountAddress/:contractAddress/:tokenId"
            element={<NftDetail />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};

export default App;
