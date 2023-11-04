import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
export default function Contact() {
    const contact={
        color:'#E4A11B',
    }
    const displaynone={
        display:'none',
    }
    return (
    <div>
      <Navigation Contactactive={contact} None={displaynone} title={'Contact Us'} subtitle={'Get In Touch With Us Now'}/>
      <div className="container-fluid container-xxl py-3 bg-content">
      <div className="container-fluid bg-content text-light py-3">
<div className="container bg-content">
    <div className="row">
        <div className="col-lg-6 text-start pb-2">
           <h1 className="fs-3 text-light fw-bold py-3">DROP US A LINE</h1>
           <p className="fs-5 text-light fw-bold py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, rem?</p>
        </div>
        <div className="col-lg-6 bg-footer p-3 ">
        <form action="" className="pt-5  text-start mx-auto d-flex flex-column">
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
<button className="btn btn-outline-light my-5 btn-lg rounded-pill fw-bold">SEND</button>
</form>
        </div>
    </div>
      </div>
</div>
<div className="container-fluid bg-content text-light pt-5">
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
      </div>
      <Footer/>
    </div>
  )
}
