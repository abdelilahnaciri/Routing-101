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
import ContributePage from "../pages/Contribute";
import LoginPage from "../pages/Login";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import ErrorHandler from "../components/errors/ErrorHandler";
import PageNotFound from "../pages/PageNotFound";

const isLoggedIn = true;
const userData: { email: string } | null = isLoggedIn
  ? { email: "Email@gmail.com" }
  : null;
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/contribute"
          element={
            <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/login">
              <ContributePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute
              isAllowed={!isLoggedIn}
              redirectPath="/contribute"
              data={userData}
            >
              <LoginPage />
            </ProtectedRoute>
          }
        />
      </Route>
      {/* Learn Layout */}
      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuickStartPage />} />
        <Route path="thinking-in-react" element={<ThinkingInReactPage />} />
        <Route path="installation" element={<InstallationPage />} />
      </Route>

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default router;
