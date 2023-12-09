import { Link } from "react-router-dom";


const PageNotFound = () => {
    return (
        <div className='h-screen'>
            <div className="h-4/5 flex justify-center items-center">
                <img src="https://i.ibb.co/c34Wb09/7iJP.gif" alt="" />
            </div>
            <div className="flex justify-center items-center">
            <h3 className="text-xl md:text-3xl font-bold">Go To <Link to="/"><button className="bg-black text-white px-4 py-2 rounded-md">Home</button></Link></h3>
            </div>

        </div>
    );
};

export default PageNotFound;