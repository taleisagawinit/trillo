import React from 'react';
import './app.scss';
import Navigation from './layout/navigation/Navigation';
import Header from './layout/header/Header';
import ImageGallery from './components/image-gallery/ImageGallery';


function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <ImageGallery
        alt1="img 1"
        img1="/img/hotel-1.jpg"
        alt2="img 2"
        img2="/img/hotel-2.jpg"
        alt3="img 3"
        img3="/img/hotel-3.jpg"
       />
    </div>
  );
}

export default App;
