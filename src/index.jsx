import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import ErrorPage from './error-page';
import Accounts from './pages/accounts/Accounts';
import Model from './pages/model/Model';
import ProjectSetting from './pages/projectSetting/ProjectSetting';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/project',
                element: <ProjectSetting />
            },
            {
                path: '/accounts',
                element: <Accounts />
            },
            {
                path: '/model',
                element: <Model />
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
)