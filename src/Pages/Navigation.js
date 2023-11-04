import React from 'react'
import { Link } from 'react-router-dom'
export default function Navigation(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-nav py-3 fw-bold fs-5 container-xxl ">
  <div className="container-fluid">
    
    <button className="navbar-toggler position-toggle " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav w-25 mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <Link className="nav-link active" aria-current="page" to="/" style={props.Homeactive}>Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" to="/About" style={props.Aboutactive}>About</Link>
        </li>
        
        <li className="nav-item mx-2">
          <Link className="nav-link" aria-disabled="true" to='/Menu' style={props.Menuactive} >Menu</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link" aria-disabled="true" to='/Contact' style={props.Contactactive} >Contact</Link>
        </li>

      </ul>
<Link className="d-flex text-decoration-none text-center py-2 align-items-center flex-column justify-content-center w-50 w-brand">
<span className='navbar-brand text-light fs-3'>TASTE ELITE</span>
<span className='text-light letter-space-10 fw-light '>RESTURANT</span>
</Link>
      <form className="d-flex w-25 w-reserve" role="search">
       
        <button className="btn  btn-outline-light fw-bold rounded-pill px-5 fs-5 py-2" type="submit" >MAKE RESERVATION</button>
      </form>
    </div>
  </div>
</nav>
<div className="container-fluid py-5 bg-section container-xxl flex-column d-flex align-items-center justify-content-center ">
<h1 className="display-5 p-3 text-light text-center text-wrap ff-title py-3">{props.title}</h1>
<p className="text-light fs-4  fs-sub py-2">{props.subtitle}</p>
<button className="btn btn-lg btn-outline-light fw-bold rounded-pill px-3 " style={props.None}>VIEW MENU</button>
</div>
    </div>
  )
}
