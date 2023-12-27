import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Root from "./routes/root";
import ErrorPage from "./error-page";
import TempControlh1 from "./routes/tempcon.jsx";
import TempControlh2 from "./routes/tempcon2.jsx";



/* TODO: 
  1) Establish the errors in the path for router -Done
  2) Create route for House 1 and House 2 -Done
  3) Finish UI for H1 and H2 -
  4) Implement the tele API
  5) Update the whole program into a new repository that uses the basic setup and not starter setup from react
*/ 




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"tempcon",
        element: <TempControlh1 />,
      },
      {
        path:"tempcon2",
        element: <TempControlh2 />,
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
