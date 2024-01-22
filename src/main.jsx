import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/Pages/Home.jsx';
import About from './assets/Pages/About.jsx';
import CheckOut from './assets/Pages/CheckOut.jsx';
import { Provider } from 'react-redux';
import AppStore from './assets/Utils/AppStore.js';
import Product from './assets/Pages/Product.jsx';

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
