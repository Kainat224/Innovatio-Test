import React from 'react'

const PhoneEmail = ({imgUrl,title}) => {
  return (
    <div className='d-flex space-between align-items-center gap-4 my-3' >
      <img src={imgUrl} alt="" />
      <h6>{title}</h6>     
    </div>
  )
}

export default PhoneEmail
