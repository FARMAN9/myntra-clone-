import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import Home from './routes/Home.jsx'
import Bag from './routes/Bag.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {RouterProvider} from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import myntastore from './store/index.js'
const router= createBrowserRouter(

[
  {
    path:'/',
    element:<App/>,
    children:[
      {path:'/',element:<Home/>},
      {
        path:'/bag',
        element:<Bag/>
      }
    ]
  }
 
]


)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntastore}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
