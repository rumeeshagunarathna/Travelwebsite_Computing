import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assests/video.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

      useEffect(() => {
            Aos.init({duration:2000})
      }, [])


      return (
            <section className="home">
                  <div className="overlay">
                        <video src={video} muted autoPlay loop type="video/mp4"></video>
                    </div>    
                        <div className="homeContent container">
                              <div className="textDiv">
                                    <span data-aos="fade-up" className="smallText">
                                          Activate your package
                                    </span>
                                    <h1 data-aos="fade-up" className="homeTitle">
                                          Enjoy your Holiday
                                    </h1>
                              </div>
                              </div>
                              

               
            </section>

      )
}

export default Home