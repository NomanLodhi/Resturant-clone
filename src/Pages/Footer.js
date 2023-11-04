import React from 'react'

export default function Footer() {
  return (

      <div className="bg-footer container-fluid container-xxl text-light py-5">
      <div className="d-flex text-decoration-none text-center py-2 align-items-center flex-column justify-content-center w-brand">
<span className='navbar-brand text-light fs-3'>TASTE ELITE</span>
<span className='text-light letter-space-10 fw-light '>RESTURANT</span>
</div>
<ul className="d-flex align-items-center justify-content-center py-2">
<li className='li-foot'><a href="#" className="footer-links px-2 fw-bold text-light text-decoration-none ">Home</a></li>
<li className='li-foot'><a href="#" className="footer-links px-2 fw-bold text-light text-decoration-none ">About</a></li>
<li className='li-foot'><a href="#" className="footer-links px-2 fw-bold text-light text-decoration-none ">Menu</a></li>
<li className='li-foot'><a href="#" className="footer-links px-2 fw-bold text-light text-decoration-none ">Contact</a></li>
</ul>
<ul className="d-flex align-items-center justify-content-center py-2">
<li className='li-foot'><a href="#" className="footer-links px-2 fw-bold text-light text-decoration-none "><i class="bi bi-facebook"></i></a></li>
<li className='li-foot'><a href="#" className="footer-links px-2 fw-bold text-light text-decoration-none "><i class="bi bi-twitter"></i></a></li>
<li className='li-foot'><a href="#" className="footer-links px-2 fw-bold text-light text-decoration-none "><i class="bi bi-instagram"></i></a></li>
</ul>
<hr className='my-3' />
<p className="fw-bold text-center py-3">Copyright &copy; 2023 TASTE ELITE Resturant | Designed & Developed By Noman Lodhi</p>
      </div>


  
  )
}
