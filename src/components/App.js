import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
// import Card from '../components/Card';
import '../css/App.css';

function App() {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    async function getPhotos() {
      let url = 'https://jsonplaceholder.typicode.com/albums/1/photos';
      let res = await fetch(url);
      let photos = await res.json();
      setPhotos(photos);
    }

    getPhotos();
  }, [])

  console.log(photos)

  return (
    <div className="container">
      <Navbar />
      <section className='card-container'>
        {photos.map((p) => <img src={p.url} />)}
      </section>
    </div>
  );
}

export default App;
