import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './utils/routes'
import { ConfigProvider } from 'antd'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const router = createBrowserRouter(routes)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer />
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: '#EA580B',
            algorithm: true
          },
          Input: {
            colorPrimary: '#EA580B',
            algorithm: true
          }
        }
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
)
