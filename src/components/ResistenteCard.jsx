import React from 'react';

const ResistenteCard = ({imgUrl,title,text}) => {
  return (
    <div className='d-flex space-between align-items-start gap-4 my-3' >
      <img src={imgUrl} alt="" />
      <div>
        <h5>{title}</h5>  
        <p>{text}</p> 
      </div>  
    </div>
  )
}

export default ResistenteCard
