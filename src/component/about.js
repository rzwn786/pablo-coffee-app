import React ,{ useRef, useEffect } from "react";
import Navbar from "./navbar2";
import "./about.css";
import Footer from "./footer";
import Shop4 from "./assets/kedai5.jpg";

const About = () => {

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry =>{
        if(entry.isIntersecting){
          document.querySelector('.about').classList.add("fadeInLeft");
          document.querySelector('.vision').classList.add("fadeInRight");
          document.querySelector('.misson').classList.add("fadeInLeft");
          document.querySelector('.box2').classList.add("fadeInRight");

        }
      })
    })
    observer.observe(document.querySelector('.grid-container'));
  }, []);

  return (
    <div ref={ref}>
      <Navbar />
      <div className="about-container">
        <div className="grid-container" >
          <div className="box">
          <div className="about">
              <h3>About</h3>
              <p className="subhead">
              <span className="first-letter">P</span>ABLO COFFEE is found as a company that provides coffee to 
              consumers based in Malaysia.PABLO COFFEE was established on 
              16 November 2019 and is known as a growing local coffee product 
              in Malaysia.PABLO COFFEE is a company that produces coffee as their 
              product in various interesting water names. Our company has a variety 
              of coffees, a variety of non-coffee water glasses. 
              Our company also manufactures coffee products for home brewing
              </p>
            </div>
          </div>
          <div className="box-1">
            <div className="vision">
              <h3>Vison</h3>
              <p>
                To provide our customers with the finest quality coffee. We aim
                to create a community of coffee lovers who appreciate the unique
                flavors and aromas of our carefully selected beans, while
                supporting the livelihoods of small-scale farmers and their
                families. We strive to continually innovate and improve our
                processes to ensure a consistently exceptional coffee experience
                for our customers.
              </p>
            </div>
            <div className="misson">
              <h3>Missons</h3>
              <p>
                To be the leading coffee company that is known for our
                commitment to sustainability and ethical practices, as well as
                our dedication to providing exceptional quality coffee. We
                envision a world where coffee lovers can indulge in their
                passion while contributing to a better future environment. We
                aim to expand our reach globally, while staying true to our
                values and maintaining our focus on quality and sustainability.
                Ultimately, we aspire to create a coffee culture that is
                inclusive, equitable, and enriching for everyone involved.
              </p>
            </div>
          </div>
          <div className="box2">
            <img src={Shop4}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
