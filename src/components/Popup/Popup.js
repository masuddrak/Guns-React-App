import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Popup.css'

const Popup = ({gun}) => {
    console.log(gun)
    const {img,price,name,capacity,bullet,action}=gun
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
      <Button  onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="img-container p-3">
            <img className='mr-3' src={img} alt="" />
            <div className='ml-3'>
            <h4>Price:${price}</h4>
            <h6>Capacity:{capacity}</h6>
            <h6>Bullet:{bullet}</h6>
            <h6>Action:{action}</h6>
            </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
    );
};

export default Popup;