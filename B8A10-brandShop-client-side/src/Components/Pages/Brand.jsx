import { Link } from "react-router-dom";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Aos from 'aos';

const Brand = ({ brandOne }) => {
    const { brand, image } = brandOne;

    // for aos
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div>
            <Link to={`brandProducts/brand/${brand}`}>
            <div className="card bg-base-100 shadow-xl"  data-aos="zoom-out" data-aos-duration="1000">
            <figure>
                <img src={image} alt={brand} className="rounded-xl h-52" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold text-black ">{brand}</h2>
            </div>
        </div>
            </Link>
        </div>
    );
};

export default Brand;