import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from "react-router-dom";
import './App.scss';
import "./style.scss";
import Login from './pages/login/Login';
import Register from './pages/register/Signup';
import ErrorElement from "./ErrorPage";
import NavBar from "./components/NavBar/navbar";
import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/RightBar/RightBar";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {

  const {currentUser} = useContext(AuthContext)

  const {darkMode} = useContext(DarkModeContext)

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <NavBar />
      <div style={{display: "flex"}}>
      <LeftBar />
      <div className="home/profile" style={{flex: 6}}>

      <Outlet />
      </div>
      <RightBar />
      </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
    }
      ]

    },

    {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorElement/>
  },
  {
   path: "/register",
    element: <Register />,
    errorElement: <ErrorElement/>
  },
  ])
  return (
    <div className="App">
      < RouterProvider router={router}/>
    </div>
  );
}   

export default App;
