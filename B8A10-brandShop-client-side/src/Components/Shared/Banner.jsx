


const Banner = () => {
    return (
<div className="carousel">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/8mHYyn1/gadstyle-home-banner1.webp" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle bg-transparent border-none text-red-600 text-xl font-bold">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-transparent border-none text-red-600 text-xl font-bold">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/9WPNFdD/AT82v-TRU91c5z4fto-LXSassy-JQl07-XDo-BGtv-C1-Kz.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle bg-transparent border-none text-red-600 text-xl font-bold">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-transparent border-none text-red-600 text-xl font-bold">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/BnN7fV3/Moble-banner-2-jpg.webp" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle bg-transparent border-none text-red-600 text-xl font-bold">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-transparent border-none text-red-600 text-xl font-bold">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/gwkHpJs/gadget-app-banner-1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle bg-transparent border-none text-red-600 text-xl font-bold">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-transparent border-none text-red-600 text-xl font-bold">❯</a>
    </div>
  </div>
</div>

    );
};

export default Banner;