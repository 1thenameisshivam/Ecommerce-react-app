import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import CheckOut from './Pages/CheckOut.jsx';
import { Provider } from 'react-redux';
import AppStore from './Utils/AppStore.js';
import Product from './Pages/Product.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/checkout",
        element:<CheckOut/>
      },
      {
        path:"/product/:pid",
        element:<Product/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={AppStore} >
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
