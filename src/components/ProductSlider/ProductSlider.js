import React,{useState} from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Products from '../Products/Products';
import './ProductSlider.css';
import Button from '@mui/material/Button';
import { Row, Col } from 'react-bootstrap'
import RealmeC21Y from '../../images/mobiles/2.jpeg'
import MotorolaE7Power from '../../images/mobiles/3.jpeg'
import RealmeC3 from '../../images/mobiles/4.jpeg'
import RealmeNarzo50A from '../../images/mobiles/5.jpeg'
import Iphone7 from '../../images/mobiles/6.jpeg'
import MotoG60 from '../../images/mobiles/7.jpeg'
import PocoC31 from '../../images/mobiles/8.jpeg'
import RedmiNote10S from '../../images/mobiles/9.jpeg'

function ProductSlider(props) {
    const responsive = {

        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1224 },
          items: 4
        },
        desktopmid: {
            breakpoint: { max: 1224, min: 945 },
            items: 3
          },
        tablet: {
          breakpoint: { max: 945, min: 628 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 628, min: 0 },
          items: 1
        }
        
  };
  
  const [mobiles, setMobiles] = useState([
    {
      id: 1,
      title: 'realme C21Y (Cross Blue, 32 GB)  (3 GB RAM)',
      price: 9749,
      rating: 4,
      image:RealmeC21Y
    },
    {
      id: 2,
      title: 'MOTOROLA E7 Power (Tahiti Blue, 64 GB)  (4 GB RAM)',
      price: 9960,
      rating: 3,
      image:MotorolaE7Power
    },
    {
      id: 3,
      title: 'realme C11 2021 (Cool Blue, 64 GB)  (4 GB RAM)',
      price: 10599,
      rating: 4,
      image:RealmeC3
    },
    {
      id: 4,
      title: 'realme Narzo 50A (Oxygen Blue, 64 GB)  (4 GB RAM)',
      price: 11499,
      rating: 5,
      image:RealmeNarzo50A
    },
    {
      id: 5,
      title: 'APPLE iPhone 7 Plus (Black, 32 GB)',
      price: 37999,
      rating: 5,
      image:Iphone7
    },
    {
      id: 6,
      title: 'MOTOROLA G60 (Dynamic Gray, 128 GB)  (6 GB RAM)',
      price: 16999,
      rating: 4,
      image:MotoG60
    },
    {
      id: 7,
      title: 'Poco C31 (Dynamic Blue, 128 GB)  (6 GB RAM)',
      price: 9999,
      rating: 3,
      image:PocoC31
    },
    {
      id: 8,
      title: 'REDMI Note 10S (Deep Sea Blue, 128 GB)  (8 GB RAM)',
      price: 18999,
      rating: 5,
      image:RedmiNote10S
    },
  ])
    return (
        <div className='prod-slider'>
            <Row>
                <Col className='d-flex flex-row'><span className='prod-header'>{props.headerLine}</span></Col>
            <Col></Col>
            <Col></Col>
            <Col className='d-flex flex-row-reverse'><Button variant="contained" className='m-3 btn-grad'>VIEW ALL</Button></Col>
            </Row>

            <Carousel responsive={responsive}>
              
          {
            mobiles.map((mob, idx) => (
              <Products
                key={mob.id}
                id={mob.id}
                title={mob.title}
                price={mob.price}
                image={mob.image}
                rating={mob.rating}
              />
            ))
          }
            
                
            </Carousel>
        </div>
    )
}

export default ProductSlider;