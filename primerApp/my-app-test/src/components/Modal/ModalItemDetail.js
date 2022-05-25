import { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

const Modalview = (props) => {
    const [modalShow, setModalShow] = useState(props.open);
    const toggleModal = () => setModalShow(!modalShow);
        
    return (
        <Modal centered isOpen={modalShow}>
           <ModalHeader>{props.name}</ModalHeader>
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
    )
}
export default Modalview