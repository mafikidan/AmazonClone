// import React from 'react'
// import "./Home.css"
// import Product from '../../Components/Product/Product'
// import Products from '../../Components/Products/Products'
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css'
// // import ExampleCarouselImage from 'components/ExampleCarouselImage';

// function Home() {
//   return (
//     <div className='home'>
//       <div className='home__container'>
//       <Carousel style={{marginBottom: '-150px'}}>
//       <Carousel.Item>
//         <img
//           className="home__image"
//           src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
//           alt=""
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//           className="home__image"
//           src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
//           alt=""
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//           className="home__image"
//           src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
//           alt=""
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="home__image"
//           src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
//           alt=""
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//       <img
//           className="home__image"
//           src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
//           alt=""
//         />
//       </Carousel.Item>
//     </Carousel>
//         <div className='home__row'>
          
//           <div className="container">
//             <div className='row'>

//               {/* <div className='col'>
//                 <Products />
//               </div> */}
//               <div className=''>
//                 <Product
//             id='123321'
//             title='Wall Clock, Dart on Dark 9.8 Inch Silent Non-Ticking Easy to Read Modern Decorative for Home Office School'
//             price={19.99}
//             rating={5}
//             image='https://m.media-amazon.com/images/I/61qno1IKljL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
//             />
//               </div>
//           <div className=''>
//           <Product
//             id='123322'
//             title='HAITUN Portable Workout Stand Push Up Board Handles Training System Workout for Home Gym & Traveling Fitness Comfort'
//             price={177.66}
//             rating={3}
//             image='https://m.media-amazon.com/images/I/51BH1ai9-IL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
//             />
//             </div>
//           </div>
          
//           </div>
          
//         </div>
//         <div className='home__row'>
//           <Product
//             id='123323'
//             title='Sony SRS-RA3000 360 Reality Audio Wi-Fi / Bluetooth Wireless Speaker, Works with Alexa and Google Assistant, Black'
//             price={167.34}
//             rating={5}
//             image='https://m.media-amazon.com/images/I/81H9d1Gy-TL._AC_UL400_.jpg'
//           />
//           <Product
//             id='123324'
//             title='SAMSUNG Galaxy Watch 6 Classic 43mm Bluetooth Smartwatch w/ Rotating Bezel, Fitness Tracker, Personalized HR Zones, Advanced Sleep Coaching, Heart Monitor, BIA Sensor, US Version, Black'
//             price={399.00}
//             rating={4}
//             image='https://m.media-amazon.com/images/I/61ZXwnqqOuS._AC_UY218_.jpg'
//           />
//           <Product
//             id='123325'
//             title='Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 64GB, Wi-Fi, 12MP front/8MP Back Camera, Touch ID, All-Day Battery Life – Space Gray'
//             price={256.68}
//             rating={5}
//             image='https://m.media-amazon.com/images/I/81hHAZ7Z-cL._AC_UL400_.jpg'
//           />
//         </div>
//         <div className='home__row'>
//           <Product
//             id='123323'
//             title='Sony SRS-RA3000 360 Reality Audio Wi-Fi / Bluetooth Wireless Speaker, Works with Alexa and Google Assistant, Black'
//             price={167.34}
//             rating={5}
//             image='https://m.media-amazon.com/images/I/91ksJ1DzNEL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
//           />
//           <Product
//             id='123324'
//             title='SAMSUNG Galaxy Watch 6 Classic 43mm Bluetooth Smartwatch w/ Rotating Bezel, Fitness Tracker, Personalized HR Zones, Advanced Sleep Coaching, Heart Monitor, BIA Sensor, US Version, Black'
//             price={399.00}
//             rating={5}
//             image='https://m.media-amazon.com/images/I/71VRQfNEcmL.__AC_SY300_SX300_QL70_FMwebp_.jpg'
//           />
//           <Product
//             id='123325'
//             title='Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display, 64GB, Wi-Fi, 12MP front/8MP Back Camera, Touch ID, All-Day Battery Life – Space Gray'
//             price={256.68}
//             rating={5}
//             image='https://m.media-amazon.com/images/I/61NGnpjoRDL.__AC_SY445_SX342_QL70_FMwebp_.jpg'
//           />
//         </div>
//         <div className='home__row'>
//           <Product
//             id='123326'
//             title='Type TV LED TV 65-inch LCD TV 32-inch Curved TV Intelligent Network Screen Type LED LCD'
//             price={848.00}
//             rating={5}
//             image='https://m.media-amazon.com/images/I/411UysbOqKL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home
//////**********************
//~~
//^^
//&&
//!!

import React from 'react';
import './Home.css';
import Product from '../../Components/Product/Product';
import Products from '../../Components/Products/Products'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
    <div className="home">
      {/* <Carousel style={{ marginBottom: '-150px' }}>
     
      </Carousel> */}
      <div className='home__container'>
      <Carousel style={{marginBottom: '-150px'}}>
     <Carousel.Item>
      <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
          alt=""
        />
      </Carousel.Item>
        </Carousel>
        <br/>
      <div className="container">
          <div className="row">
            <div className='col-lg-4 col-md-6 col-sm-12'>
                <Products />
              </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              
            <Product
              id="123321"
              title="Wall Clock, Dart on Dark 9.8 Inch Silent Non-Ticking Easy to Read Modern Decorative for Home Office School"
              price={19.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/61qno1IKljL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Product
              id="123322"
              title="Fire TV Streaming Devices (4K & HD)"
              price={177.66}
              rating={3}
              image="https://m.media-amazon.com/images/I/31wybZaa6PL._AC_SY230_.jpg"
            />
            </div>
            
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <Product
              id="123323"
              title="Sony SRS-RA3000 360 Reality Audio Wi-Fi / Bluetooth "
              price={167.34}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/81OdA-ITspL._AC_UL160_SR160,160_.jpg"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Product
              id="123324"
              title="Apple Watch SE (2nd Gen) (GPS + Cellular, 44mm)"
              price={399.00}
              rating={4}
              image="https://m.media-amazon.com/images/I/71Qd7l1p0JL._AC_SY135_.jpg"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Product
              id="123325"
              title="Apple iPad (9thG): with A13 Bionic chip, 10.2-inch "
              price={256.68}
              rating={5}
              image="https://m.media-amazon.com/images/I/81hHAZ7Z-cL._AC_UL400_.jpg"
            />
          </div>
        </div>
        <div className="">
          <div className="">
            <Product
              id="123326"
              title="Type TV LED TV 65-inch LCD TV 32-inch Curved TV Intelligent Network Screen Type LED LCD"
              price={848.00}
              rating={5}
              image="https://m.media-amazon.com/images/I/411UysbOqKL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
