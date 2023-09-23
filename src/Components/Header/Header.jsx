import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="">
            <div className="flex items-center justify-between  py-5">
                <div>
                    <h1 className="text-2xl font-semibold">Phone Shop</h1>
                </div>
                <div className="flex items-center gap-5 text-lg"> 
                    <NavLink to='/' className={({isActive})=>isActive?'text-green-500 underline':''}>Home</NavLink>
                    <NavLink to='/favorite' className={({isActive})=>isActive?'text-green-500 underline':''}>Favorite</NavLink>
                    <NavLink to='/login' className={({isActive})=>isActive?'text-green-500 underline':''}>Login</NavLink>
                </div>
            </div>
            
        </div>
    );
};

export default Header;