import React from 'react'
import {Carousel} from 'react-bootstrap'
import flex1 from '../../images/flex1.jpg'
import flex2 from '../../images/flex2.jpg'
import flex3 from '../../images/flex3.jpg'
import headphone from '../../images/headphone.jpg'
import Productslider from '../ProductSlider/ProductSlider'
import './Home.css'

function Home(props) {
    return (
      <div>
        <div>
        <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={flex1}
            alt="First slide"
            height={400}
          />
          
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={flex1}
            alt="Second slide"
            height={400}
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={flex3}
            alt="Third slide"
            height={400}
          />
          
        </Carousel.Item>
        </Carousel>
        </div>
        <br/><br/>
        <div className='products-slider'>
          <Productslider
            headerLine="Trending Offers"
          /><br/><br/>
          <Productslider
          headerLine="Fashion"
          /><br/><br/>
          <Productslider
          headerLine="Electronics"
          /><br/><br/>
          <Productslider
          headerLine="Home appliances"
          /><br/><br/>
          <Productslider
          headerLine="Mobiles"
        /><br/><br/>
        </div>
      
        <br/>
        <br/>
    </div>
    )
}

export default Home
