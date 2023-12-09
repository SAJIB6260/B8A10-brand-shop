import Swal from "sweetalert2";
import AddBrand from "./AddBrand";


const AddProduct = () => {


    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const newProduct = { name, brand, type, price, description, rating, photo };

        //sen data to server 
        fetch("https://b8-a10-brand-shop-server-side-hj14z541r-sk-sajibs-projects.vercel.app/products", {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Products Name & Other Details Added',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
                  form.reset()
            }
        })
    }


    return (
        <div className="bg-[#F4F3F0] dark:bg-gray-800 xl:pl-48 xl:pr-48">
            <div className=" p-14 md:p-24">
                <h2 className="text-3xl md:text-5xl dark:text-white font-extrabold text-center mb-12">Add New Product</h2>
                <form onSubmit={handleAddProduct}>
                    {/* form product name and brand name row */}
                    <div className="md:flex md:mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text dark:text-white">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text dark:text-white">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    {/* form type and price row */}
                    <div className="md:flex md:mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text dark:text-white">Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" placeholder="Product Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text dark:text-white">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Product Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form description and rating row */}
                    <div className="md:flex md:mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text dark:text-white">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Product Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text dark:text-white">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="Product Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Photo URL row */}
                    <div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text dark:text-white">Product Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Product Photo URL" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Product" className="w-full bg-black mt-8 py-3 text-white text-lg md:text-2xl font-semibold border-2 rounded-md" />
                </form>
            </div>
            <AddBrand></AddBrand>
        </div>
    );
};

export default AddProduct;