import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HeightStore from "./store/height";
import TreePage from "./pages/TreePage";
import SearchPage from "./pages/SearchPage";
import WritePage from "./pages/WritePage";
import "./styles/reset.scss";

function App() {
  return (
    <HeightStore>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/search" />} />
          <Route path="/tree/:id" element={<TreePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/writeLetter/:id" element={<WritePage />} />
        </Routes>
      </BrowserRouter>
    </HeightStore>
  );
}

export default App;
