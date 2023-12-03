import React, { useState } from 'react';
import {Button,Row,Col,Modal} from 'react-bootstrap';
import Axios from '../../Axios';
import { TextField } from '@mui/material';
import karolina from '../../images/karolina.jpg'
import './signUp.css'
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { useStateValue } from "../../StateProvider"; 


function Signup(props) {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [{}, dispatch] = useStateValue();
  
  const submitHandler = async() => {
    
    await auth.createUserWithEmailAndPassword(email, pass1)
        .then((auth) => {
            // it successfully created a new user with email and password
          if (auth) {
            Axios({
              method: 'post',
              url: '/register',
              data: {
                email: email,
                name: name,
                password:pass1
              }
            }).then((res) => {
              console.log("user saved in database>>>",res)
              
            }).catch(err => {
              console.log(err)
            })
            console.log('user registered in firebase>>>', auth)
            dispatch({
              type: "SET_USER",
              user: auth.user,
            });
                props.onHide();
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
      
  }

  return (
      
    <div>
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >

    

    <Modal.Body>
    <Row>
            <Col>
              <img src={karolina} height={550} width={400} className="signup-img" alt="signup-img"  />
            </Col>
            <Col>
              <p className="d-flex flex-row-reverse" onClick={props.onHide}><span style={{ cursor:'pointer' }}>&#10006;</span></p>
              
            <h3 className="signup-header">Sign up</h3>
            <br/>   
              <TextField id="outlined-basic"
                fullWidth
                label="Email" variant="outlined"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            <br/><br/>
              <TextField id="outlined-basic" fullWidth label="Name" variant="outlined"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              />
            <br/><br/>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              fullWidth
              autoComplete="current-password"
              value={pass1}
              onChange={(e)=>setPass1(e.target.value)}
        />
        <br/><br/>
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          fullWidth
          autoComplete="current-password"
          value={pass2}
          onChange={(e)=>setPass2(e.target.value)}
        />
              <br/><br/>
              <Button variant="primary" className="ml-5" onClick={() => { submitHandler(); }}>
              Create Account
            </Button>
        <br/><br/>
              <p>Already have an account? <span className="register-link" onClick={() => { props.onHide(); props.openLogin(); }}>Login Here</span></p>

            </Col>
          </Row>

     
      </Modal.Body>
    
  </Modal>

    </div>

  );
}

export default Signup;
