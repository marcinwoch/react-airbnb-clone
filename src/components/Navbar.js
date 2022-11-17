import logoImg from '../resources/airbnb_logo.png'
import '../css/Navbar.css';

function Navbar() {
  return (
    // <nav>
    //   <section className="nav-logo">
    //     <a href="#">
    //       <img src={logoImg} alt="logo" />
    //     </a>
    //   </section>
    //   <section className="nav-images">
    //     <div className="col-1">
    //       <div className='item img-1'></div>
    //       <div className='item img-2'></div>
    //       <div className='item img-3'></div>
    //     </div>
    //     <div className="col-2">
    //       <div className='item img-4'></div>
    //       <div className='item img-5'></div>
    //     </div>
    //     <div className="col-3">
    //       <div className='item img-6'></div>
    //       <div className='item img-7'></div>
    //     </div>
    //     <div className="col-1">
    //       <div className='item img-8'></div>
    //       <div className='item img-9'></div>
    //       <div className='item img-10'></div>
    //     </div>
    //     <div className="col-2">
    //       <div className='item img-11'></div>
    //       <div className='item img-12'></div>
    //     </div>
    //     <div className="col-3">
    //       <div className='item img-13'></div>
    //       <div className='item img-14'></div>
    //     </div>
    //   </section>
    //   <section className="nav-heading">
    //     <h1>Online Experiences</h1>
    //     <h3>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
    //   </section>

    // </nav>

    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div className="container-fluid">
          <a className="text-xl text-black" href="#">Navbar</a>
        </div>
      </div>
    </nav>

    // <section className="overflow-hidden text-gray-700">
    //   <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
    //     <div className="flex flex-wrap -m-1 md:-m-2">
    //       <div className="flex flex-wrap w-1/2">
    //         <div className="w-1/2 p-1 md:p-2">
    //           <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
    //             src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
    //         </div>
    //         <div className="w-1/2 p-1 md:p-2">
    //           <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
    //             src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
    //         </div>
    //         <div className="w-full p-1 md:p-2">
    //           <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
    //             src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
    //         </div>
    //       </div>
    //       <div className="flex flex-wrap w-1/2">
    //         <div class="w-full p-1 md:p-2">
    //           <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
    //             src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
    //         </div>
    //         <div className="w-1/2 p-1 md:p-2">
    //           <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
    //             src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
    //         </div>
    //         <div className="w-1/2 p-1 md:p-2">
    //           <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
    //             src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default Navbar;
