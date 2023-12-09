import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";



const ProductDetails = () => {

  // for aos
  useEffect(() => {
    Aos.init();
  }, [])

  const product = useLoaderData();
  const { user } = useContext(AuthContext);
  const email = user.email;
  const { photo, name, description } = product;

  const handleAddCart = (product) => {
    const photo = product.photo;
    const name = product.name;
    const description = product.description;
    const newCart = { photo, name, description, email };


    // Carts data send to server

    fetch("https://b8-a10-brand-shop-server-side-hj14z541r-sk-sajibs-projects.vercel.app/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newCart)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Successfully Added Product to My Cart",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });

  }

  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photo} alt={name} className="rounded-xl h-96 " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-4xl font-bold text-red-600">{name}</h2>
          <p className="text-xl font-semibold">{description}</p>
          <div className="card-actions">
            <button onClick={() => handleAddCart(product)} className="btn btn-primary bg-black border-none hover:bg-red-600 w-full">Add Cart</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProductDetails;