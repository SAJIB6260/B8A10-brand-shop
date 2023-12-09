import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const product = useLoaderData();

    const { _id, name, brand, type, price, description, rating, photo } = product;

    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const updatedProduct = { name, brand, type, price, description, rating, photo };

        //sen data to server 
        fetch(`https://b8-a10-brand-shop-server-side-hj14z541r-sk-sajibs-projects.vercel.app/products/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Products Name & Other Details Updated',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
                else{
                    Swal.fire({
                        title: 'info!',
                        text: 'NO Changes Here',
                        icon: 'info',
                        confirmButtonText: 'ok'
                    })
                }
            })
    }


    return (
        <div className="bg-[#F4F3F0]">
            <div className=" p-14 md:p-24">
                <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">Update a Product: {name}</h2>
                <form onSubmit={handleUpdateProduct}>
                    {/* form product name and brand name row */}
                    <div className="md:flex md:mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brand" defaultValue={brand} placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form type and price row */}
                    <div className="md:flex md:mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" defaultValue={type} placeholder="Product Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" defaultValue={price} placeholder="Product Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form description and rating row */}
                    <div className="md:flex md:mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" defaultValue={description} placeholder="Product Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" defaultValue={rating} placeholder="Product Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Photo URL row */}
                    <div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" defaultValue={photo} placeholder="Product Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Product" className="w-full bg-black mt-8 py-3 text-white text-lg md:text-2xl font-semibold border-2 rounded-md hover:text-red-500" />
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;