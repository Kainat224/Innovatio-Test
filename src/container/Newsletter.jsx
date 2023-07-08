import React from 'react'
import images from '../constants/images'

const Newsletter = () => {
  return (
    <>
    <div className='container-fluid newsLetterStylingOverall'>
      <div className="row container mx-auto p-4">
        <div className="col-md-6 text-white">
          <h3>Subscribe for Newsletter</h3>
          <p>Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci maecenas tortor odio</p>
        </div>
        <div className="col-md-6 d-flex justify-content-end align-items-center">
          <form className='d-flex newsLetterStyling'>
            <input type="email" className="form-control" id="emailInput" placeholder="Enter your email" />
            <button type="submit" className="btn custom-aero-btn"><img src={images.aero} alt="" /></button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Newsletter
