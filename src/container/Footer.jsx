import React from 'react';
import images from '../constants/images';
import { PhoneEmail } from '../components';

const Footer = () => {
  return (
    <>
    <div className='container-fluid footer-section'>
      <div className='row container mx-auto'>
        <div className='col-lg-3 col-md-6'>
          <img src={images.footerLogo} alt="" />
          <p className='text-white my-3'>Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci maecenas tortor odio Leo dui fermentum tristique urna tellus eget amet aliquam.</p>
          <img src={images.footerImg} alt="" />
          <img src={images.footerImg} alt="" />
          <img src={images.footerImg} alt="" />
          <img src={images.footerImg} alt="" />
          <img src={images.footerImg} alt="" />
          <img src={images.footerImg} alt="" />
        </div>
        <div className='col-lg-3 col-md-6 '>
          <h5 className='text-white mt-3'>Quick Links</h5>
          <div className="footerLinks">
            <ul>
              <li className='my-3'><a href="#">Home</a></li>
              <li className='my-3'><a href="#">Chi Siamo</a></li>
              <li className='my-3'><a href="#">S.I.R.E</a></li>
              <li className='my-3'><a href="#">SIRE Features</a></li>
              <li className='my-3'><a href="#">Why SIRE?</a></li>
              <li className='my-3'><a href="#">SIRE Product</a></li>
              <li className='my-3'><a href="#">How it Works?</a></li>
            </ul>
          </div>
        </div>

        <div className='col-lg-3 col-md-6 '>
          <h5 className='text-white mt-3'>Quick Links</h5>
          <div className="footerLinks">
            <ul>
              <li className='my-3'><a href="#">Help Center</a></li>
              <li className='my-3'><a href="#">Privacy Policy</a></li>
              <li className='my-3'><a href="#">Terms & Condition</a></li>
              <li className='my-3'><a href="#">FAQ</a></li>
            </ul>
            <h5 className='text-white mt-5'>Documents</h5>
            <a href="#" className='text-white'>Lindked Here</a>
          </div>
        </div>
      
        <div className='col-lg-3 col-md-6 text-white'>
          <h5 className='mt-3'>Contact Us</h5>
          <PhoneEmail imgUrl={images.wloc} title={'Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci'} />
          <PhoneEmail imgUrl={images.wphone} title="0203 519 4420" />
          <PhoneEmail imgUrl={images.wemail} title="info@solarinnovatio.com"/>
        </div>

        <div className='my-2'>
          <hr style={{color:"white"}}/>
        </div>

       <div className='row'>
        <div className="col-6 text-white">All Rights Reserved</div>
        <div className="col-6 d-flex justify-content-end align-items-center">
          <i class="fa-brands fa-facebook text-white mx-2"></i>
          <i class="fa-brands fa-square-instagram text-white mx-2"></i>
          <i class="fa-brands fa-square-twitter text-white mx-2"></i>
        </div>
       </div>

      </div>
    </div>
    </>
  )
}

export default Footer
