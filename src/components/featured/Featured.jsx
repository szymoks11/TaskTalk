import React from 'react'
import {Badge, Button, Container, FloatingLabel, Form} from 'react-bootstrap'
import './featured.css';
import logo from './logo.png'

const Featured = () => {
  return (
   <>
   <Container style={{display: 'flex'}}>
    <Form className='register-section'>
    <img src={logo} alt='logo' className='img-logo'/>
    <h1>Info <Badge bg='secondary'>TaskTalk</Badge></h1>
    <h2 className='info'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem earum hic praesentium
     aliquam eligendi deleniti perspiciatis! Nulla tempora voluptates assumenda. Esse nobis deserunt reiciendis soluta dolor quibusdam amet perspiciatis 
     exercitationem.</h2>
        <FloatingLabel 
        controlId='inputjakistam'
        label='Adres Email'
        className="mb-3"
        >
            <Form.Control type="email" placeholder="name@example.com"/>
        </FloatingLabel>
        <Button variant='primary' type='submit' size='sm' className="btn-register">
        Zarejestruj się
        </Button>
    </Form>

    
    

   </Container>
   </>
  )
}

export default Featured