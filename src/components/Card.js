import headlightPhoto from '../resources/katie-zaferes.png'
import starIcon from '../resources/star.png'
import '../css/Card.css';

function Card(props) {

  const { imgURL, title, paragraph } = props

  return (
    <div class="flex justify-center px-3 w-full shrink-0 grow-1">
      <div class="rounded-lg shadow-lg bg-white">
        <a href="#!">
          <img class="rounded-t-lg" src={imgURL} alt="" />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          <p class="text-gray-700 text-base mb-4">
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </p>
          <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
