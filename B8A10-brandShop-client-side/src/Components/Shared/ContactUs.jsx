

const ContactUs = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center bg-base-200 dark:bg-gray-800">
            <div className="w-full lg:w-1/2">
                <div className="hero-content text-center text-neutral-content p-10">
                    <div className="">
                        <h1 className="mb-5 text-4xl font-bold text-red-600">CONTACT US</h1>
                        <p className="mb-5 tect-lg font-semibold text-black dark:text-white">Get in touch with our business development team.</p>
                        <form className="mx-auto space-y-7">
                            <div className="form-control">
                                <input type="text" name="name" placeholder="Your Name*" className="input input-bordered bg-base- text-black dark:text-white" required />
                            </div>
                            <div className="form-control">
                                <input type="email" name="email" placeholder="Your Email*" className="input input-bordered bg-base- text-black dark:text-white" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="phone" placeholder="Your Phone*" className="input input-bordered bg-base- text-black dark:text-white" />
                            </div>
                            <div className="form-control">
                                <textarea type="message" name="message" placeholder="Your Message*" className="h-32 input input-bordered bg-base- text-black dark:text-white" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="w-full py-3 dark:bg-red-600 bg-black text-white text-xl font-semibold rounded-md">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <iframe className="w-full h-full object-cover" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747160.1609945116!2d87.70373207386484!3d23.484400781863425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1698013639398!5m2!1sen!2sbd" width="600" height="450" style={{ border: 0 }}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default ContactUs;