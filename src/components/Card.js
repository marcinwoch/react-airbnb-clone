import headlightPhoto from '../resources/katie-zaferes.png'
import starIcon from '../resources/star.png'
import '../css/Card.css';

function Card(props) {
  return (
    <div className='card'>
      <div className='card--photo'>
        <div className='card--label'>
          <span>Sold out</span>
        </div>
        <img src={props.imgSrc} alt="photo" />
      </div>
      <div className='card--stats'>
        <img src={starIcon} alt="star" />
        <span className='card--rate'>5.0</span>
        <span className='card--comments-count'>(1)</span>
        <span className='card--bullet'>&#8226;</span>
        <span className='card--country-name'>USA</span>
      </div>
      <p className='card--title'>Life lessons with Katie Zaferes</p>
      <p className='card--price'><strong>From $135</strong> / peron</p>
    </div>
  );
}

export default Card;
