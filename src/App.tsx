import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Work from "./pages/Work.tsx";
import CaseStudy from "./pages/CaseStudy.tsx";
import TriageRoom from "./pages/TriageRoom.tsx";
import FilterSystem from "./pages/FilterSystem.tsx";
import Resume from "./pages/Resume.tsx";
import NotFound from "./pages/NotFound.tsx";
import Layout from "./components/layout/Layout.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/triage-room" element={<TriageRoom />} />
        <Route path="/work/filter-system" element={<FilterSystem />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
