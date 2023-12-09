import { FaFacebookF, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Aos from 'aos';


const OurTeamMembers = () => {

    useEffect(() => {
        Aos.init();
    }, [])


    return (
        <div>
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold p-4 text-black dark:text-white text-center my-10">
            Our Team Members{" "}
        </h2>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div
                data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="card shadow-xl dark:bg-white bg-black dark:text-black text-white">
                <figure className="px-6 pt-6">
                    <img
                        src="https://i.ibb.co/stCK1vL/person-1-jpg.webp"
                        alt="image"
                        className="rounded-xl w-full"
                    />
                </figure>
                <div className="card-body items-center text-center space-y-2">
                    <h2 className="card-title font-bold text-2xl">Cloe Marena</h2>
                    <p className='text-xl font-bold text-red-600'>PRESIDENT</p>
                    <div className="flex flex-row gap-8 border p-3 rounded-md">
                        <FaFacebookF></FaFacebookF>
                        <FaInstagramSquare></FaInstagramSquare>
                        <FaTwitter></FaTwitter>
                    </div>
                    <div className="card-actions"></div>
                </div>
            </div>
            <div
                data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="card shadow-xl dark:bg-white bg-black dark:text-black text-white">
                <figure className="px-6 pt-6">
                    <img
                        src="https://i.ibb.co/zPzg5G6/person-2-jpg.webp"
                        alt="image"
                        className="rounded-xl w-full"
                    />
                </figure>
                <div className="card-body items-center text-center space-y-2">
                    <h2 className="card-title text-2xl font-bold">John Rooster</h2>
                    <p className='text-xl font-bold text-red-600'>MARKETING</p>
                    <div className="flex flex-row gap-8 border p-3 rounded-md">
                        <FaFacebookF></FaFacebookF>
                        <FaInstagramSquare></FaInstagramSquare>
                        <FaTwitter></FaTwitter>
                    </div>
                    <div className="card-actions"></div>
                </div>
            </div>
            <div
                data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="card shadow-xl dark:bg-white bg-black dark:text-black text-white">

                <figure className="px-6 pt-6">
                    <img
                        src="https://i.ibb.co/tQ6x0R2/person-3-jpg.webp"
                        alt="image"
                        className="rounded-xl w-full"
                    />
                </figure>
                <div className="card-body items-center text-center space-y-2">
                    <h2 className="card-title text-2xl font-bold">Will Turner</h2>
                    <p className='text-xl font-bold text-red-600'>MARKETING</p>
                    <div className="flex flex-row gap-8 border p-3 rounded-md">
                        <FaFacebookF></FaFacebookF>
                        <FaInstagramSquare></FaInstagramSquare>
                        <FaTwitter></FaTwitter>
                    </div>
                    <div className="card-actions"></div>
                </div>
            </div>
            <div
                data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="card shadow-xl dark:bg-white bg-black dark:text-black text-white">
                <figure className="px-6 pt-6">
                    <img
                        src="https://i.ibb.co/MRTTwNc/person-4-jpg.webp"
                        alt="image"
                        className="rounded-xl w-full"
                    />
                </figure>
                <div className="card-body items-center text-center space-y-2">
                    <h2 className="card-title text-2xl font-bold">Nicolas Stainer</h2>
                    <p className='text-xl font-bold text-red-600'>FINANCING</p>
                    <div className="flex flex-row gap-8 border p-3 rounded-md">
                        <FaFacebookF></FaFacebookF>
                        <FaInstagramSquare></FaInstagramSquare>
                        <FaTwitter></FaTwitter>
                    </div>
                    <div className="card-actions"></div>
                </div>
            </div>
            <div
                data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="card shadow-xl dark:bg-white bg-black dark:text-black text-white">
                <figure className="px-6 pt-6">
                    <img
                        src="https://i.ibb.co/qN1YtDL/person-5-jpg.webp"
                        alt="image"
                        className="rounded-xl w-full"
                    />
                </figure>
                <div className="card-body items-center text-center space-y-2">
                    <h2 className="card-title text-2xl font-bold">George Brook</h2>
                    <p className='text-xl font-bold text-red-600'>FOUNDER</p>
                    <div className="flex flex-row gap-8 border p-3 rounded-md">
                        <FaFacebookF></FaFacebookF>
                        <FaInstagramSquare></FaInstagramSquare>
                        <FaTwitter></FaTwitter>
                    </div>
                    <div className="card-actions"></div>
                </div>
            </div>
            <div
                data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="card shadow-xl dark:bg-white bg-black dark:text-black text-white">
                <figure className="px-6 pt-6">
                    <img
                        src="https://i.ibb.co/Jd9DW2c/person-6-jpg.webp"
                        alt="image"
                        className="rounded-xl w-full"
                    />
                </figure>
                <div className="card-body items-center text-center space-y-2">
                    <h2 className="card-title text-2xl font-bold">Emely Hopson</h2>
                    <p className='text-xl font-bold text-red-600'>MARKETING</p>
                    <div className="flex flex-row gap-8 border p-3 rounded-md">
                        <FaFacebookF></FaFacebookF>
                        <FaInstagramSquare></FaInstagramSquare>
                        <FaTwitter></FaTwitter>
                    </div>
                    <div className="card-actions"></div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default OurTeamMembers;