import Swal from "sweetalert2";


const AddCart = ({cart, carts, setCarts}) => {

    const { _id, name, photo, description } = cart;

    
    const handleDelete = (_id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://b8-a10-brand-shop-server-side-hj14z541r-sk-sajibs-projects.vercel.app/carts/${_id}`, {
              method: 'DELETE'
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire(
                      'Deleted!',
                      'Your Selected Product has been deleted.',
                      'success'
                  )
                  const remainning = carts.filter(product => product._id !== _id)
                  setCarts(remainning)
              }
              });
          }
        });
      };
    


    return (
      <div className="card card-side bg-base-100 shadow-xl w-full">
  <figure className="w-1/2"><img src={photo} alt={name}/></figure>
  <div className="card-body w-1/2">
    <h2 className="card-title text-4xl">{name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-black border-none hover:bg-red-700 w-full">Buy Now</button>
      <button onClick={() => handleDelete(_id)} className="btn btn-primary bg-black border-none hover:bg-red-700 w-full">
              Delete
            </button>
    </div>
  </div>
</div>  
    );
};

export default AddCart;