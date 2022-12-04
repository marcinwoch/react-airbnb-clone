import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Carousel from './Carousel';
import '../css/App.css';

function App() {
  const [photosURL, setPhotosURL] = useState([])

  useEffect(() => {
    async function getPhotos() {
      const photosURLList = [];

      let url = 'https://jsonplaceholder.typicode.com/albums/1/photos';
      let res = await fetch(url);
      let photosData = await res.json();

      for (let i = 0; i < 5; i++) {
        photosURLList.push(photosData[i].url)
      }


      setPhotosURL(photosURLList);
    }

    getPhotos();
  }, [])

  console.log(photosURL);

  return (
    <div className="container-fluid">
      <Navbar />
      <Carousel show={3}>
        <Card />
        <Card />
        <Card />
        {/* {photosURL.map((el) => <img src={el} />)} */}
      </Carousel>
    </div>
  );
}

export default App;
