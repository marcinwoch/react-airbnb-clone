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
          <div className='item'>1</div>
          <div className='item'>1</div>
          <div className='item'>1</div>
        </div>
        <div className="col-2">
          <div className='item'>2</div>
          <div className='item'>3</div>
        </div>
        <div className="col-3">
          <div className='item'>3</div>
          <div className='item'>2</div>
        </div>
        <div className="col-1">
          <div className='item'>1</div>
          <div className='item'>1</div>
          <div className='item'>1</div>
        </div>
        <div className="col-2">
          <div className='item'>2</div>
          <div className='item'>3</div>
        </div>
        <div className="col-3">
          <div className='item'>3</div>
          <div className='item'>2</div>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
