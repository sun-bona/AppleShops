import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import { About, Accessories, Home, ProductDetail, Servis } from "./Pages";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: ":id",
          element: <ProductDetail />,
        },
        {
          path: "service",
          element: <Servis />,
        },
        {
          path: "accessories",
          element: <Accessories />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
