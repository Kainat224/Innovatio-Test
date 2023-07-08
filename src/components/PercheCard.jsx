import React from 'react'
import Card from 'react-bootstrap/Card';

const PercheCard = ({imgUrl,title,desc}) => {
  return (
    <div>
    <Card className='percheCardStyling py-4'>
      <Card.Img variant="top" src={imgUrl} className='mx-auto' />
      <Card.Body className='text-center'>
        <Card.Title >{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default PercheCard
