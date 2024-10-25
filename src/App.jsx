import "./App.css";
// import React, { Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Explore from "./pages/Explore";
import Contacts from "./pages/Contacts";

// const Loader = () => <div>Loading...</div>;

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Sign-in",
        element: <SignIn />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Explore",
        element: <Explore />,
      },
      {
        path: "/Contacts",
        element: <Contacts />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RecoilRoot>
        <RouterProvider router={route} />
      </RecoilRoot>
    </>
  );
}

export default App;
