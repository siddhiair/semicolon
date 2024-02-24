import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home";
import SearchPage from "./pages/search";

function App() {
   return (
      <Routes>
         <Route path="/" element={<HomePage />}></Route>
         <Route path="search" element={<SearchPage />}></Route>
      </Routes>
   );
}

export default App;
