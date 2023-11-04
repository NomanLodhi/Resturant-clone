import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import image1 from './img/card-1.png'
import image2 from './img/card-2.png'
import image3 from './img/card-3.png'
import image4 from './img/card-4.png'
import image5 from './img/card-5.png'
import image6 from './img/card-6.png'
import image7 from './img/card-7.png'
import image8 from './img/card-8.png'
import image9 from './img/card-9.png'
import image10 from './img/card-10.png'
export default function Menu() {
    const menu={
        color:'#E4A11B',
    }
    const displaynone={
        display:'none',
    }
  return (
    <div>
      <Navigation Menuactive={menu} None={displaynone} title={'Checkout Our Menu'} subtitle={'Providing Different Variety Of Taste'}/>
     
      <div className="container-fluid container-xxl bg-content py-4">
        <div className="row">
          <div className="col-lg-6 position-relative text-light py-3"><div className="flex-column"><div className="d-flex"><img src={image1} alt="" className="w-25" />
            <div className='d-flex flex-column'><div className="d-flex"><h5 className="text-warning">Food Name</h5><p className="px-4">.............................................................</p> <p className="fw-bold position-absolute end-0">12</p></div></div></div><p className="w-75 text-light position-absolute end-0 bottom-0 px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam praesentium</p></div></div>
          <div className="col-lg-6 position-relative text-light py-3"><div className="flex-column"><div className="d-flex"><img src={image2} alt="" className="w-25" />
            <div className='d-flex flex-column'><div className="d-flex"><h5 className="text-warning">Food Name</h5><p className="px-4">.............................................................</p> <p className="fw-bold position-absolute end-0">12</p></div></div></div><p className="w-75 text-light position-absolute end-0 bottom-0 px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam praesentium</p></div></div>
          <div className="col-lg-6 position-relative text-light py-3"><div className="flex-column"><div className="d-flex"><img src={image3} alt="" className="w-25" />
            <div className='d-flex flex-column'><div className="d-flex"><h5 className="text-warning">Food Name</h5><p className="px-4">.............................................................</p> <p className="fw-bold position-absolute end-0">12</p></div></div></div><p className="w-75 text-light position-absolute end-0 bottom-0 px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam praesentium</p></div></div>
          <div className="col-lg-6 position-relative text-light py-3"><div className="flex-column"><div className="d-flex"><img src={image4} alt="" className="w-25" />
            <div className='d-flex flex-column'><div className="d-flex"><h5 className="text-warning">Food Name</h5><p className="px-4">.............................................................</p> <p className="fw-bold position-absolute end-0">12</p></div></div></div><p className="w-75 text-light position-absolute end-0 bottom-0 px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam praesentium</p></div></div>
          <div className="col-lg-6 position-relative text-light py-3"><div className="flex-column"><div className="d-flex"><img src={image5} alt="" className="w-25" />
            <div className='d-flex flex-column'><div className="d-flex"><h5 className="text-warning">Food Name</h5><p className="px-4">.............................................................</p> <p className="fw-bold position-absolute end-0">12</p></div></div></div><p className="w-75 text-light position-absolute end-0 bottom-0 px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam praesentium</p></div></div>
          <div className="col-lg-6 position-relative text-light py-3"><div className="flex-column"><div className="d-flex"><img src={image6} alt="" className="w-25" />
            <div className='d-flex flex-column'><div className="d-flex"><h5 className="text-warning">Food Name</h5><p className="px-4">.............................................................</p> <p className="fw-bold position-absolute end-0">12</p></div></div></div><p className="w-75 text-light position-absolute end-0 bottom-0 px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam praesentium</p></div></div>
          <div className="col-lg-6 position-relative text-light py-3"><div className="flex-column"><div className="d-flex"><img src={image7} alt="" className="w-25" />
            <div className='d-flex flex-column'><div className="d-flex"><h5 className="text-warning">Food Name</h5><p className="px-4">.............................................................</p> <p className="fw-bold position-absolute end-0">12</p></div></div></div><p className="w-75 text-light position-absolute end-0 bottom-0 px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam praesentium</p></div></div>
          <div className="col-lg-6 position-relative text-light py-3"><div className="flex-column"><div className="d-flex"><img src={image8} alt="" className="w-25" />
            <div className='d-flex flex-column'><div className="d-flex"><h5 className="text-warning">Food Name</h5><p className="px-4">.............................................................</p> <p className="fw-bold position-absolute end-0">12</p></div></div></div><p className="w-75 text-light position-absolute end-0 bottom-0 px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam praesentium</p></div></div>
          <div className="col-lg-6 position-relative text-light py-3"><div className="flex-column"><div className="d-flex"><img src={image9} alt="" className="w-25" />
            <div className='d-flex flex-column'><div className="d-flex"><h5 className="text-warning">Food Name</h5><p className="px-4">.............................................................</p> <p className="fw-bold position-absolute end-0">12</p></div></div></div><p className="w-75 text-light position-absolute end-0 bottom-0 px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam praesentium</p></div></div>
          <div className="col-lg-6 position-relative text-light py-3"><div className="flex-column"><div className="d-flex"><img src={image10} alt="" className="w-25" />
            <div className='d-flex flex-column'><div className="d-flex"><h5 className="text-warning">Food Name</h5><p className="px-4">.............................................................</p> <p className="fw-bold position-absolute end-0">12</p></div></div></div><p className="w-75 text-light position-absolute end-0 bottom-0 px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam praesentium</p></div></div>
        </div>
      </div>
      <div className=" bg-content text-center d-flex flex-column container-xxl align-items-center justify-content-center text-light">
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
  )
}
