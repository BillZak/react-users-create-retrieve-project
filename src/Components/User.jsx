import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import React, {useState} from 'react';
import EditForm from './EditForm'

const User = ({user,deleteUser, editUser}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (event)=> {
            deleteUser(user.id)
    }

    return (
            <>
            <div className="user">
                
                <h3>Name : {user.name}</h3>
                <h3>Email : {user.email}</h3>
                <h3>Gen : {user.gen}</h3>

                <Button variant="primary" onClick={handleShow} style={{margin:'0px 10px' ,padding:'10px 50px', backgroundColor:'skyblue',color:'black'}}>Edit</Button>{' '}
                <Button variant="secondary" onClick ={handleDelete} style={{margin:'0px 10px' ,padding:'10px 50px', backgroundColor:'tomato',color:'white'}}>Delete</Button>{' '}<hr/>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title style={{fontSize: '50px', marginLeft: '550px'}}> Edit User </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <EditForm
                    user={user}
                    editUser={editUser}
                    closeModal={handleClose}
                />
                </Modal.Body>
            </Modal>
            </>
    );
}

export default User;
