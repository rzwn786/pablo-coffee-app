import React from "react"
import './home.css';
import videoBg from './assets/vcr.mp4';

function Home() {

  return (
    <div className="main">
        <video src={videoBg} autoPlay={true}  loop={true}
    controls={false} playsInline
    muted    />
        <div className="content">
           <h1>Pablo Coffee & Co</h1>
        </div>
    </div>
    
  );
}

export default Home;
