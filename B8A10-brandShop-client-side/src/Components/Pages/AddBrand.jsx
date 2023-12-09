import Swal from 'sweetalert2'

const AddBrand = () => {

    const handleAddBrand = event =>{
        event.preventDefault();
        const form = event.target;
        const brand = form.brand.value;
        const image = form.image.value;

        const newBrand = { brand, image };
        console.log(newBrand)

        //send brand to server
        fetch('https://b8-a10-brand-shop-server-side-hj14z541r-sk-sajibs-projects.vercel.app/brands', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newBrand)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Brand & Image added',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
            form.reset();
        })
    }


    return (
        <div className=" p-14 md:p-24">
        <h2 className="text-3xl md:text-5xl dark:text-white font-extrabold text-center mb-12">Add Brand</h2>
        <form onSubmit={handleAddBrand}>
            {/* form brand name and brand image row */}
            <div className="md:flex md:mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text dark:text-white">Brand Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" required />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                    <label className="label">
                        <span className="label-text dark:text-white">Brand Image</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="image" placeholder="Brand Image" className="input input-bordered w-full" required />
                    </label>
                </div>
            </div>
            <input type="submit" value="Add Brand" className="w-full bg-black mt-8 py-3 text-white text-lg md:text-2xl font-semibold border-2 rounded-md" />
        </form>
    </div>
    );
};

export default AddBrand;