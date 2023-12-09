import { Link } from "react-router-dom";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Aos from 'aos';


const Product = ({ product }) => {
  const { _id, name, type, price, rating, photo } = product;

  // for aos
  useEffect(() => {
    Aos.init();
  }, []);


  return (
    <div className="card bg-base-100 shadow-xl" data-aos="flip-left" data-aos-duration="1000">
      <figure>
        <img src={photo} alt={name} className="h-80" />
      </figure>
      <div className="card-body items-start">
        <h2 className="card-title text-3xl font-bold">Name: {name}</h2>
        <p className="text-lg font-medium">Type: {type}</p>
        <p className="text-lg font-medium">Price: <span className="text-lg font-extrabold"> ৳ </span>{price}</p>
        <p className="text-lg font-medium">Rating: {rating}</p>

        <Link to={`/products/${_id}`} className="w-full"><button className="btn btn-primary w-full bg-black border-none hover:bg-red-700">Product Details</button></Link>
        <Link to={`/updateProduct/${_id}`} className="w-full"><button className="btn btn-primary bg-black border-none w-full">Update Product</button></Link>
      </div>
    </div>
  );
};

export default Product;