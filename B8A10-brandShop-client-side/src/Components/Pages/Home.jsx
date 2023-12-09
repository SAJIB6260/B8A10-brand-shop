import { useLoaderData } from "react-router-dom";
import ContactUs from "../Shared/ContactUs";
import Brand from "./Brand";
import OurTeamMembers from "../Shared/OurTeamMembers";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Banner from "../Shared/Banner";







const Home = () => {

    const brands = useLoaderData();
    const { loading } = useContext(AuthContext) 

      if(loading){
        return <div className="h-screen flex justify-center items-center dark:bg-slate-500"><img src="https://i.ibb.co/T4Z1D3f/yy3.gif"  alt="" /></div>
    }
    

    return (
        <div>
            <Banner></Banner>
            <h2 className='text-5xl text-center text-black dark:text-white font-extrabold my-7 md:my-10'>Our Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 hover:touch-pan-up">
                {
                    brands.map( brandOne => <Brand key={brandOne._id} brandOne={brandOne}></Brand>)
                }
            </div>
            <OurTeamMembers></OurTeamMembers>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;