import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import PreSearchPage from "./pages/preSearch";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/preSearch/search" element={<SearchPage />}></Route>
      <Route path="preSearch" element={<PreSearchPage />}></Route>
    </Routes>
  );
}

export default App;
