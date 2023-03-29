import React, { useEffect } from 'react'
import './main.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import img from '../../Assests/img (1).jpg'
import img2 from '../../Assests/img (2).jpg'
import img3 from '../../Assests/img (3).jpg'
import img4 from '../../Assests/img (4).jpg'
import img5 from '../../Assests/img (5).jpg'
import img6 from '../../Assests/img (6).jpg'
import img7 from '../../Assests/img (7).jpg'
import img8 from '../../Assests/img (8).jpg'
import img9 from '../../Assests/img (9).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
      {
            id: 1,
            imgSrc: img,
            destTitle: 'Kandy',
            location: 'New Zealand',
            grade: 'CULTURAL RELAX',
            fees: '$1000',
            description:'the epitome of romance, Bora Bora is one of the best travel destinations in the world.'
      },
      {
            id:2,
            imgSrc: img2,
            destTitle: 'Negambo',
            location: 'New Zealand',
            grade: 'CULTURAL RELAX',
            fees: '$1000',
            description:'the epitome of romance, Bora Bora is one of the best travel destinations in the world.'
      },
      {
            id:3,
            imgSrc: img3,
            destTitle: 'Nuwara Eliya',
            location: 'New Zealand',
            grade: 'CULTURAL RELAX',
            fees: '$1000',
            description:'the epitome of romance, Bora Bora is one of the best travel destinations in the world.'
      },
      {
            id:4,
            imgSrc: img4,
            destTitle: 'Anuradhapura',
            location: 'New Zealand',
            grade: 'CULTURAL RELAX',
            fees: '$1000',
            description:'the epitome of romance, Bora Bora is one of the best travel destinations in the world.'
      },
      {
            id:5,
            imgSrc: img5,
            destTitle: 'Galle',
            location: 'New Zealand',
            grade: 'CULTURAL RELAX',
            fees: '$1000',
            description:'the epitome of romance, Bora Bora is one of the best travel destinations in the world.'
      },
      {
            id:6,
            imgSrc: img6,
            destTitle: 'Jaffna',
            location: 'New Zealand',
            grade: 'CULTURAL RELAX',
            fees: '$1000',
            description:'the epitome of romance, Bora Bora is one of the best travel destinations in the world.'
      },
      {
            id:7,
            imgSrc: img7,
            destTitle: 'Trincomalee',
            location: 'New Zealand',
            grade: 'CULTURAL RELAX',
            fees: '$1000',
            description:'the epitome of romance, Bora Bora is one of the best travel destinations in the world.'
      },
      {
            id:8,
            imgSrc: img8,
            destTitle: 'Polonnaruwa',
            location: 'New Zealand',
            grade: 'CULTURAL RELAX',
            fees: '$1000',
            description:'the epitome of romance, Bora Bora is one of the best travel destinations in the world.'
      },
      {
            id:9,
            imgSrc: img9,
            destTitle: 'Bora Bora',
            location: 'New Zealand',
            grade: 'CULTURAL RELAX',
            fees: '$1000',
            description:'the epitome of romance, Bora Bora is one of the best travel destinations in the world.'
      },
]
const Main = () => {
      

            useEffect(() => {
            Aos.init({duration:2000})
      }, [])

      return (
            <section className='main container section'>
                  
                  <div className="secTitle">
                        <h3 data-aos="fade-right" className="title">
                              Popular Destinations
                        </h3>
                  </div>

                  <div className="secContent grid">

                        {
                              Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {

                                    return (
                                          <div key={id} data-aos="fade-up"
                                                className="singleDestination">
                                                
                                                <div className="imageDiv">
                                                      <img src={imgSrc} alt={destTitle} />
                                                </div>
                                                
                                                <div className="cardInfo">
                                                      <h4 className="destTitle">{destTitle}</h4>
                                                      <span className="continent flex">
                                                            <HiOutlineLocationMarker className='icon' />
                                                            <span className="name">{location}</span>
                                                      </span>

                                                      

                                                      <div className="desc">
                                                            <p>{description}</p>

                                                      </div>
                                                      
                                                      <button className='btn flex'>
                                                            MORE DETAILS 
                                                            <HiOutlineClipboardCheck className= "icon"/>
                                                      </button>
                                                </div>
                                          </div>
                                    )
                                    
                              })
                        }

                  </div>
           </section>

      )
}

export default Main