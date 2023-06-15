import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Signup';
import ErrorElement from "./ErrorPage";

function App() {

  const router = createBrowserRouter([
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
