import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../pages";
import RootLayout from "../pages/Layout";
import ContactPage from "../pages/Contact";
import AboutPage from "../pages/About";
import LearnLayout from "../pages/Learn/Layout";
import QuickStartPage from "../pages/Learn";
import ThinkingInReactPage from "../pages/Learn/ThinkingInReact";
import InstallationPage from "../pages/Learn/Installation";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
      {/* Learn Layout */}
      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuickStartPage />} />
        <Route path="thinking-in-react" element={<ThinkingInReactPage />} />
        <Route path="installation" element={<InstallationPage />} />
      </Route>
    </>
  )
);

export default router;
