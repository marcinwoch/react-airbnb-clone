import logoImg from '../resources/airbnb_logo.png'
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div className="container-fluid">
          <a className="text-xl text-black" href="#">
            Carousel Fetch API Data
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
