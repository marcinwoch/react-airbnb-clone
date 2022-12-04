import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Carousel from './Carousel';
import '../css/App.css';

function App() {
  const [carouselData, setCarouselData] = useState([])

  useEffect(() => {
    async function getCarouselData() {
      const carouselDataList = [];

      let url = 'https://jsonplaceholder.typicode.com/albums/1/photos';
      let res = await fetch(url);
      let carouselFetchData = await res.json();

      for (let i = 0; i < 5; i++) {
        carouselDataList.push(carouselFetchData[i])
      }


      setCarouselData(carouselDataList);
    }

    getCarouselData();
  }, [])

  console.log(carouselData);

  return (
    <div className="container-fluid">
      <Navbar />
      <Carousel show={4}>
        {carouselData.map((el) => <Card imgURL={el.url} title={el.title} />)}
      </Carousel>
    </div >
  );
}

export default App;
