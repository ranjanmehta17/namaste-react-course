
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";


import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";


const Applayout = () => {
  

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      }

    ]
  },
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
