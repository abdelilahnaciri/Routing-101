import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
}

export default App;
