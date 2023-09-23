import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import { useEffect } from "react";

const Layout = () => {

    const loc=useLocation()
    useEffect(()=>{
        if (loc.pathname=='/') {
            document.title=`Phone-Home`
        } else {
            
            document.title=`Phone ${loc.pathname.replace('/','-')}`
        }

        if (loc.state) {
            document.title=loc.state
        }


    },[loc.pathname,loc.state])
    return (
        <div className="w-4/5 m-auto">
            <Header/>
           <div className="mt-10">
           <Outlet/>
           </div>
            
        </div>
    );
};

export default Layout;