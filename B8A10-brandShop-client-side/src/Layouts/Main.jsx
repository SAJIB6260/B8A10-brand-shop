import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import { Toaster } from "react-hot-toast";



const Main = () => {

    return (
        <div className="bg-white dark:bg-gray-800">
            <div className="h-2 lg:h-3 bg-gradient-to-r from-pink-700 to-red-600 "></div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;