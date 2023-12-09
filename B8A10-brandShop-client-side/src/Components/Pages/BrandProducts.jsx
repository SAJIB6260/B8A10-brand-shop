import { Link, useLoaderData } from "react-router-dom";
import Product from "./Product";


const BrandProducts = () => {

    const products = useLoaderData()




    if (products.length < 1) {
        return (
            <div className="card container mx-auto  mt-48">
                <figure>
                    <img className="w-100%" src="https://i.ibb.co/tqFSXpw/Z16w.gif" />
                </figure>
                <div className="card-body">
                    <div className="card-actions justify-center text-center">
                        <Link to="/">
                            <button className="btn btn-primary bg-black border-none w-full">Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        );

    }



    return (
        <div className="dark:bg-gray-800">
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={products[0].photo} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle bg-transparent border-none text-red-600 text-xl font-bold">❮</a>
                            <a href="#slide2" className="btn btn-circle bg-transparent border-none text-red-600 text-xl font-bold">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={products[1].photo} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle bg-transparent border-none text-red-600 text-xl font-bold">❮</a>
                            <a href="#slide3" className="btn btn-circle bg-transparent border-none text-red-600 text-xl font-bold">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={products[2].photo} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle bg-transparent border-none text-red-600 text-xl font-bold">❮</a>
                            <a href="#slide1" className="btn btn-circle bg-transparent border-none text-red-600 text-xl font-bold">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-20 pb-20">
            <div className="p-8 md:p-16 lg:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            </div>
        </div>
    );
};

export default BrandProducts;