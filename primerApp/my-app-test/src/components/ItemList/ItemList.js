import React, {useState} from 'react'
import { Button, Card, Col, CardText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
//import { BsFillCartFill } from "react-icons/bs";
//import ItemCount from '../ItemCount/ItemCount'

const ItemList = (props) => {
  const [modalShow, setModalShow] = useState(false)
  const toggleModal = () => setModalShow(!modalShow)

  return (
    <Col md="4" xs="12" className='mt-2'>
        <Card body>
            {<div style={{backgroundImage:`url(${props.photos[0].thumb})`}} className='image-thumb'></div>}
            <CardText className='text-center'>{props.name}</CardText>
            <div className='text-center'>Stock: {props.stock}</div>
            {/*<ItemCount initial={props.initial} stock={props.stock}/>
            <Button color="success" outline>Add to Cart <BsFillCartFill/></Button>*/}
            <Button className='mt-2' color="success" onClick={toggleModal} outline>Ver Articulo</Button>
        </Card>

        <Modal centered isOpen={modalShow} toggle={toggleModal}>
           <ModalHeader 
            close={<div className="close" onClick={toggleModal}>X</div>}>
              {props.name}</ModalHeader>
            <ModalBody>
              <div style={{backgroundImage:`url(${props.photos[0].thumb})`}} className='image-thumb position-relative'>
                <div className='price'>MXN {props.price}</div>
              </div>
              <div className='mt-2'>
                {props.description}
              </div>
            </ModalBody>
            <ModalFooter>
            <Button onClick={()=>setModalShow(false)}>
                Add to Cart
            </Button>
            </ModalFooter>
        </Modal>
    </Col>
  )
}

export default ItemList