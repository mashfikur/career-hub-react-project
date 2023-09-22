import { Outlet } from "react-router-dom";
import Footer from "./Footer";


const Root = () => {
    return (
        <div>
            <h3>Hello this is root Navbar </h3>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Root;