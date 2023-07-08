import React from 'react';
import Card from 'react-bootstrap/Card';

const CardSec = ({imgUrl,title,desc}) => {
  return (
    <div>
    <Card className='mainCardStyling'>
      <Card.Img variant="top" src={imgUrl} className='mx-auto' />
      <Card.Body className='text-center mainCard__bg'>
        <Card.Title >{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardSec
