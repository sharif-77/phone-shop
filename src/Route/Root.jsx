import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Error from '../Components/Error/Error';
import Home from '../Components/Home/Home';
import PhoneDetails from '../Components/PhoneDetails/PhoneDetails';
import Login from '../Components/Login/Login';
import Favorite from '../Components/Favorite/Favorite';

const Root = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader:()=>fetch(`/public/phones.json`)
            },
            {
                path:'/phone/:id',
                element:<PhoneDetails/>,
                loader:()=>fetch(`/public/phones.json`)
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/favorite',
                element:<Favorite/>,
                loader:()=>fetch(`/public/phones.json`)

            }
        ]

    }
])

export default Root;