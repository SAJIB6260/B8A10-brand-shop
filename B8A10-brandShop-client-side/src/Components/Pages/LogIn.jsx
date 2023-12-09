import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import { useState } from "react";
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';



const LogIn = () => {

    const { logIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);


    const handleLogin = event => {

        event.preventDefault();
        // console.log(e.currentTarge)
        // const form = new FormData(e.currentTarget);  //eita dia korle ow hobe
        // const form = event.target;   //eita dia korle ow hoibo
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        //user login by email and password

        logIn(email, password)
            .then(result => {
                console.log(result.user)
                toast.success("Logged In Successfully");
                // navigate after login
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                toast.error(error.message)
            })


    }


    return (
        <div>
            <h2 className="text-4xl font-bold my-10 text-center dark:text-white">Please Login</h2>
            <form onSubmit={handleLogin} className="md:w-3/5 lg:w-1/3 mx-auto text-lg">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg dark:text-white">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg dark:text-white">Password</span>
                    </label>
                    <div className="form-control relative">
                    <input 
                    type={ showPassword ? "text" : "password"}
                    name="password" 
                    placeholder="password" 
                    className="input input-bordered" 
                    required />
                    <span className="absolute top-1/3 right-2" onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <BsFillEyeSlashFill></BsFillEyeSlashFill> : <BsFillEyeFill></BsFillEyeFill>
                        }
                    </span>
                    </div>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-lg dark:text-white">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="w-full py-3 bg-black text-white text-xl font-semibold rounded-md">Login</button>
                </div>
            </form>
            <div className="md:w-3/5 lg:w-1/3 mx-auto text-lg mb-10">
            <div className="grid lg:grid-cols-3">
                <hr className="w-full  text-[#334B62] my-auto" />
                <h2 className="text-center text-lg text-[#334B62] dark:text-white font-semibold my-5">Or Login With</h2>
                <hr className="w-full text-[#334B62] my-auto" />
            </div>
            <SocialLogin></SocialLogin>
            </div>
            <div>
            <p className="text-center my-1 text-xl dark:text-white">Don&#39;t have an account ?</p>
            <p className="text-center mb-10"><Link className="text-red-500 text-lg font-bold" to="/registation">Register Now</Link></p>
            </div>
        </div>

    );
};

export default LogIn;