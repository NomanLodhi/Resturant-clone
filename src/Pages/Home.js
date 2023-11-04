import React from 'react'
import Navigation from './Navigation'
import card1 from './img/card-1.png'
import card2 from './img/card-2.png'
import card3 from './img/card-3.png'
import card4 from './img/card-4.png'
import Footer from './Footer'

export default function Home() {
    const home={
        color:'#E4A11B',
    }
  return (
    <>
    <div className='bg-content'>
      <Navigation Homeactive={home} title={'DineIn,Takeaway,HomeDelivery'} subtitle={'Out Standing Taste'}/>
      <div className="py-5 bg-content text-center d-flex flex-column container-xxl align-items-center justify-content-center text-light">
<p className='fw-bold py-3'>ABOUT US</p>
<h1 className="py-2 fw-bold fs-3 w-50">WE ARE A KARACHI'S PREMIER FOOD RESTAURANT FOUNDED BY JACK BLOOM. WE HAVE A DEDICATED MENU SHOWCASING THE VERSATILITY AND DELICIOUSNESS OF DISHES IN ALL THEIR FORMS. </h1>
<p className="py-3 fw-bold w-50">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quisquam delectus doloribus eveniet corporis maiores perferendis, totam sunt iure perspiciatis. Molestias dignissimos facilis aliquam similique ratione, quisquam quibusdam natus ad. </p>
<div className='d-block bg-light w-line mt-5'></div>
<h1 className="fw-bold py-3">MENU</h1>
<p className="py-2 fw-bold fs-5">Taste elite dishes with elegance taste</p>
<button className="btn-lg btn rounded-pill btn-outline-light px-5 my-4  fw-bold">FULL MENU</button>
<div className="container py-5">
    <div className="row">
        <div className="col-lg-3 card-hover py-4 col-md-6 col-sm-12 border border-secondary p-2">
            <img src={card1} className='h-75 w-75 py-4' alt="" />
            <p className='pt-3 fw-bold'>$13.00</p>
            <p className=' fw-bold fs-4 p-0'>DISH NAME</p>
        </div>
        <div className="col-lg-3 card-hover py-4 col-md-6 col-sm-12 border border-secondary p-2">
            <img src={card2} className='h-75 w-75 py-4' alt="" />
            <p className='pt-3 fw-bold'>$13.00</p>
            <p className=' fw-bold fs-4 p-0'>DISH NAME</p>
        </div>
        <div className="col-lg-3 card-hover py-4 col-md-6 col-sm-12 border border-secondary p-2">
            <img src={card3} className='h-75 w-75 py-4' alt="" />
            <p className='pt-3 fw-bold'>$13.00</p>
            <p className=' fw-bold fs-4 p-0'>DISH NAME</p>
        </div>
        <div className="col-lg-3 card-hover py-4 col-md-6 col-sm-12 border border-secondary p-2">
            <img src={card4} className='h-75 w-75 py-4' alt="" />
            <p className='pt-3 fw-bold'>$13.00</p>
            <p className=' fw-bold fs-4 p-0'>DISH NAME</p>
        </div>
    </div>
</div>
<div className="d-flex text-center flex-column py-3 align-items-center justify-content-center">
<div className='d-block bg-light w-line mt-5'></div>
<h1 className="fw-bold py-3">LOCATION</h1>
<p className="py-2 fw-bold fs-5">Where you can find us?</p>
</div>
</div>
<div className="container-fluid bg-content text-light">
<div className="container bg-content">
    <div className="row">
        <div className="col-lg-6 text-start pb-2">
           <p className="fs-3 fw-bold border border-secondary border-top-0 border-start-0 border-end-0">CONTACT</p>
           <p className="d-flex text-light  border border-secondary border-top-0 border-start-0 border-end-0 fw-bold">
            <p className='w-50'>PHONE</p>
            <p className='w-50 text-end'>+92-3308456873</p>
           </p>
           <p className="d-flex text-light  border border-secondary border-top-0 border-start-0 border-end-0 fw-bold">
            <p className='w-50'>ADDRESS</p>
            <p className='w-50 text-end'>Gulistan-e-jauhar Block-7 Karachi</p>
           </p>
           <div className="pt-5">
           <p className="fs-3 fw-bold border border-secondary border-top-0 border-start-0 border-end-0">OPENING HOURS</p>
           <p className="d-flex text-light  border border-secondary border-top-0 border-start-0 border-end-0 fw-bold">
            <p className='w-50'>MON-FRI</p>
            <p className='w-50 text-end'>9:00 PM - 10:00 PM</p>
           </p>
           <p className="d-flex text-light  border border-secondary border-top-0 border-start-0 border-end-0 fw-bold">
            <p className='w-50'>SATURDAY</p>
            <p className='w-50 text-end'>9:00 PM - 18:00 PM</p>
           </p>
           <p className="d-flex text-warning  fw-bold">
            <p className='w-50'>SUNDAY</p>
            <p className='w-50 text-end'>Closed</p>
           </p>
           </div>
        </div>
        <div className="col-lg-6 ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7096542217!2d66.49595908273504!3d25.192983663770796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1698767615756!5m2!1sen!2s"  height="450" style={{border:0,width:90+'%'}} className='ms-5' ></iframe>
        </div>
    </div>
      </div>
</div>
<div className="py-5 bg-content text-center d-flex flex-column container-xxl align-items-center justify-content-center text-light">
<div className='d-block bg-light w-line mt-5'></div>
<h1 className="fw-bold py-3 display-4">RESERVEATIONS</h1>
<p className="py-2 fw-bold fs-5">Book your table online now.</p>
<div className="container">
<form action="" className="pt-5 w-50 text-start mx-auto d-flex flex-column">
    <label className='fw-bold py-3 fs-5 '>
        NAME
    </label>
    <input type="text" className='border border-warning bg-transparent text-light border-top-0 border-start-0 border-end-0' />
    <label className='fw-bold py-3 fs-5 '>
        PHONE
    </label>
    <input type="text" className='border border-warning bg-transparent text-light border-top-0 border-start-0 border-end-0' />
    <label className='fw-bold py-3 fs-5 '>
        NUMBER OF PERSONS
    </label>
    <input type="text" className='border border-warning bg-transparent text-light border-top-0 border-start-0 border-end-0' />
    <label className='fw-bold py-3 fs-5 '>
        RESERVATION DAY
    </label>
    <input type="text" className='border border-warning bg-transparent text-light border-top-0 border-start-0 border-end-0' />
    <label className='fw-bold py-3 fs-5 '>
        HOUR
    </label>
    <input type="text" className='border border-warning bg-transparent text-light border-top-0 border-start-0 border-end-0' />
</form>
<button className="btn btn-outline-light my-5 btn-lg px-5 rounded-pill fw-bold">MAKE RESERVATION</button>
</div>
    </div>
    <Footer/>
    </div>
    </>
  )
}
