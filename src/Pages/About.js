import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import cooking from './img/cooking.jpg'
export default function About() {
    const about={
        color:'#E4A11B',
    }
    const displaynone={
        display:'none',
    }
  return (
    <>
      <Navigation Aboutactive={about} None={displaynone} title={'About Us'} subtitle={'We Create Exceptional Tastes Dishes'}/>
      <div className='bg-content'>
    
      <div className="py-5 bg-content text-center d-flex flex-column container-xxl align-items-center justify-content-center text-light">
<p className='fw-bold py-3'>ABOUT US</p>
<h1 className="py-2 fw-bold fs-3 w-50">WE ARE A KARACHI'S PREMIER FOOD RESTAURANT FOUNDED BY JACK BLOOM. WE HAVE A DEDICATED MENU SHOWCASING THE VERSATILITY AND DELICIOUSNESS OF DISHES IN ALL THEIR FORMS. </h1>
<p className="py-3 fw-bold w-50">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quisquam delectus doloribus eveniet corporis maiores perferendis, totam sunt iure perspiciatis. Molestias dignissimos facilis aliquam similique ratione, quisquam quibusdam natus ad. </p>
<div className="container bg-about-sec my-3 d-flex flex-column justify-content-center align-items-center">
  <h1 className="display-3 fw-bold py-5 text-center">WE BELIEVE THAT GOOD FOOD SHOULD BE BOTH DELICIOUS AND NUTRITIOUS</h1>
</div>
  
<div className="d-flex text-center flex-column py-3 align-items-center justify-content-center">
<div className='d-block bg-light w-line mt-5'></div>
<h1 className="fw-bold py-3">PHILOSOPHY</h1>
<p className="py-2 fw-bold fs-5">Highest-quality ingredients only</p>
</div>
</div>
<div className="container-fluid bg-content text-light">
<div className="container bg-content">
    <div className="row">
        <div className="col-lg-6 text-start pb-2">
           <p className="fs-3 fw-bold ">IN OUR RESTURANT WE BELIEVE IN PROVIDING GREAT QUALITY FOOD WITH INGREDIANTS FULL OF LOVE
</p>
           <p className="fs-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam nam aperiam neque illo quis dolor, dolorum accusamus eius a aliquid quas magni sapiente sequi, natus voluptatem odio! Maxime, quae officia.
</p>
         
         
        </div>
        <div className="col-lg-6 ">
     <img src={cooking} alt="" className='w-100 h-100'/>
        </div>
    </div>
      </div>
</div>
<div className="py-5 bg-content text-center d-flex flex-column container-xxl align-items-center justify-content-center text-light">
<div className='d-block bg-light w-line mt-5'></div>
<p className="py-2 fw-bold fs-5 pt-5">Our mission</p>
<h1 className="fw-bold py-2  fs-4 w-50">OUR GOAL IS TO CREATE A DINING EXPERIENCE THAT IS BOTH MEMORABLE AND ENJOYABLE. WE WANT TO SHARE OUR LOVE OF OUR FOOD WITH THE WORLD, ONE DELICIOUS DISH AT A TIME. THANK YOU FOR CHOOSING TO DINE WITH US AND BEING A PART OF OUR PHILOSOPHY</h1>

</div>
    </div>
  
      <Footer/>
    </>
  )
}
