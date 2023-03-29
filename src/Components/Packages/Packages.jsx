import React, {useEffect} from 'react'
import './packages.css'

import {HiOutlineClipboardCheck} from 'react-icons/hi'



import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
      {
            id: 1,
            
            destTitle: '4 Day Package',
            
            grade: 'Price',
            fees: '$500',
            description:'Details.'
      },
      {
            id:2,
            
            destTitle: '7 Day Package',
            
            grade: 'Price',
            fees: '$1000',
            description:'the epitome of romance, Bora Bora is one of the best travel destinations in the world.'
      },
      {
            id:3,
            
            destTitle: '14 Day Package',
            
            grade: 'Price',
            fees: '$1500',
            description:'the epitome of romance, Bora Bora is one of the best travel destinations in the world.'
      },
      {
            id:4,
            
            destTitle: '21 Day Package',
            
            grade: 'Price',
            fees: '$2000',
            description:'the epitome of romance, Bora Bora is one of the best travel destinations in the world.'
      },
      {
            id:5,
            
            destTitle: '28 Day Package',
            
            grade: 'Price',
            fees: '$2500',
            description:'the epitome of romance, Bora Bora is one of the best travel destinations in the world.'
      },
      {
            id:6,
            
            destTitle: '30 Day Package',
            
            grade: 'Price',
            fees: '$3000',
            description:'the epitome of romance, Bora Bora is one of the best travel destinations in the world.'
      },
      
      
]
const Packages = () => {

            useEffect(() => {
            Aos.init({duration:2000})
      }, [])

      return (
            <section className='package container section'>
                  
                  <div className="secTitle">
                        <h2 data-aos="fade-right" className="title">
                              Our Packages
                        </h2>
                  </div>

                  <div className="secContent grid">

                        {
                              Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {

                                    return (
                                          <div key={id} data-aos="fade-up"
                                                className="singleDestination">
                                                
                                                
                                                
                                                <div className="cardInfo">
                                                      <h4 className="destTitle">{destTitle}</h4>
                                                      <span className="continent flex">
                                                            
                                                            <span className="name">{location}</span>
                                                      </span>

                                                      <div className="fees flex">
                                                            <div className="grade">
                                                                  <span>{grade}</span>
                                                            </div>

                                                            <div className="price">
                                                                  <h4>{fees}</h4>
                                                            </div>
                                                      </div>

                                                      <div className="desc">
                                                            <p>{description}</p>

                                                      </div>
                                                      
                                                      <button className='btn flex'>
                                                             Activate
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

export default Packages
