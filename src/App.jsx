import { HashRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import HomeV6 from "./pages/HomeV6";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeV6 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
