import React, { useEffect, useState } from 'react';
import '../css/Carousel.css';

function Carousel(props) {

  const { children, show } = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length)
  }, [children])

  const next = () => {
    if (currentIndex < (length - show)) {
      setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

  return (
    <div className="carousel container-fluid mx-auto flex flex-col w-full">
      <div className="carousel-wrapper flex w-full relative">
        {
          currentIndex > 0 &&
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>
        }
        <div className="carousel-content-wrapper px-20 overflow-hidden w-full h-full">
          <div className={`carousel-content flex show-${show}`} style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }} >
            {children}
          </div>
        </div>
        {
          currentIndex < (length - show) &&
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
        }
      </div>
    </div >
  );
}

export default Carousel;
