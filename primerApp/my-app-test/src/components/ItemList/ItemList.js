import React from 'react'
import { Button, CardImg, Card, Col, CardText } from 'reactstrap';
import { BsFillCartFill } from "react-icons/bs";
import ItemCount from '../ItemCount/ItemCount'

const ItemList = (props) => {
    
  return (
    <Col md="4" xs="12" className='mt-2'>
        <Card body>
            <CardImg
                alt={props.alt}
                src={props.image}
                title={props.alt}
                top
                width="100%"
             />
            <CardText>{props.description}</CardText>
            <div className='text-center'>Stock: {props.stock}</div>
            <ItemCount initial={props.initial} stock={props.stock}/>
            <Button color="success" outline>Add to Cart <BsFillCartFill/></Button>
        </Card>
    </Col>
  )
}

export default ItemList