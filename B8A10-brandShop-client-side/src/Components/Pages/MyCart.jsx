import { Link, useLoaderData } from "react-router-dom";
import AddCart from "./AddCart";
import { useState } from "react";


const MyCart = () => {
    const Loadercarts = useLoaderData()
    const [carts, setCarts] = useState(Loadercarts)

    if (carts.length < 1) {
        return (
            <div className="dark:bg-gray-800 h-screen mx-auto flex justify-center items-center">
                <div>
                    <figure>
                        <img className="" src="https://i.ibb.co/ngMhj7c/confusing-woman-due-to-empty-cart-4558760-3780056.webp" />
                    </figure>
                    <div className="card-body">
                        <div className="card-actions justify-center text-center">
                            <Link to="/">
                                <button className="btn btn-primary bg-black dark:bg-white dark:text-black dark:font-bold hover:bg-red-600 hover:text-white dark:hover:text-white dark:hover:bg-red-600  border-none w-full">Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

    return (
        <div className="dark:bg-gray-800 pt-10 lg:pt-20 pb-10 lg:pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                    carts.map(cart => <AddCart key={cart._id}
                        cart={cart}
                        carts={carts}
                        setCarts={setCarts}
                    ></AddCart>)
                }
            </div>
        </div>
    );
};

export default MyCart;