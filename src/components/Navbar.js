import logoImg from '../resources/airbnb_logo.png'
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav>
      <section className="nav-logo">
        <a href="#">
          <img src={logoImg} alt="logo" />
        </a>
      </section>
      <section className="nav-images">
        <div className="col-1">
          <div className='item img-1'></div>
          <div className='item img-2'></div>
          <div className='item img-3'></div>
        </div>
        <div className="col-2">
          <div className='item img-4'></div>
          <div className='item img-5'></div>
        </div>
        <div className="col-3">
          <div className='item img-6'></div>
          <div className='item img-7'></div>
        </div>
        <div className="col-1">
          <div className='item img-8'></div>
          <div className='item img-9'></div>
          <div className='item img-10'></div>
        </div>
        <div className="col-2">
          <div className='item img-11'></div>
          <div className='item img-12'></div>
        </div>
        <div className="col-3">
          <div className='item img-13'></div>
          <div className='item img-14'></div>
        </div>
      </section>
      <section className="nav-heading">
        <h1>Online Experiences</h1>
        <h3>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
      </section>

    </nav>
  );
}

export default Navbar;
