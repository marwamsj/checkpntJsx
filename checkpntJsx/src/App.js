import React from 'react';
import image from './imageInSrc.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>

        <h1 className='title'>Marwa JMAIEL</h1>

       <br />

       <img className='image' src={image} alt='me1'/>;

       <br />

       <img className='image' src='/imageInPublic.JPG' alt='me2'  />

       </div>

       <video width="320" height="240" controls>

       <source src="/IMG_1463.mp4" />

       </video>
     </div>
  );
}

export default App;
