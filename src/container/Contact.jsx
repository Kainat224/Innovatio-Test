import React from 'react';
import images from '../constants/images';
import { BtnNew, PhoneEmail } from '../components';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const Contact = () => {
  return (
    <>
      <div className='container sections__padding'>
        <div className='row'>
          <div className='col-md-4 border border-radius-5  p-4 m-2'>
            <PhoneEmail imgUrl={images.location} title={'Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci'} />
            <PhoneEmail imgUrl={images.phone} title="0203 519 4420" />
            <PhoneEmail imgUrl={images.mail} title="email@email.com" />
            <hr/>
            <p>We Will get back to you within 24 hours Or Call us Now</p>
          </div>
          <div className='col-md-7 border border-radius-5 p-4 m-2'>
          <form>
            <div className='d-flex'>
              <div class="mb-3 col-6 mr-2">
                <input type="text" class="form-control" id="firstNameInput" placeholder="Enter your first name" />
              </div>
              <div class="mb-3 col-6">
                <input type="text" class="form-control" id="lastNameInput" placeholder="Enter your last name" />
              </div>
            </div>
            <div class="mb-3">
              <input type="email" class="form-control" id="emailInput" placeholder="Enter your email" />
            </div>
            <div class="mb-3">
              <textarea class="form-control" id="messageTextarea" rows="4" placeholder="Enter your message"></textarea>
            </div>
            <BtnNew title={'SEND'}/>
          </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
