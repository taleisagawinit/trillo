import React from 'react';
import './styles/app.scss';
import Navigation from './layout/navigation/Navigation';
import Header from './layout/header/Header';
import ImageGallery from './components/image-gallery/ImageGallery';
import InfoTitle from './components/info-title/InfoTitle';
import Main from './layout/main/Main';

function App() {
  return (
    <div>
      <Header />
      {/* <Navigation /> */}
      {/* make image gallery & info title 1 layout component - content-top */}
      <ImageGallery
        alt1="img 1"
        img1="/img/hotel-1.jpg"
        alt2="img 2"
        img2="/img/hotel-2.jpg"
        alt3="img 3"
        img3="/img/hotel-3.jpg"
       />
       <InfoTitle
       title={"hotel las palmas"}
       starRating={5}
       location={"albufeira, portugal"}
       numRating={8.6}
       votes={429}
        />
      {/* content - main */}
      <Main />
      {/* footer */}
    </div>
  );
}

export default App;
