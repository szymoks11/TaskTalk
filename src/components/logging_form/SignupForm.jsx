import React from 'react'
import { Form, Container } from "react-bootstrap";
import "./style_loginpage.css";
import logo  from './logo.png';
const SignupForm = () => {
  return (
    <Container>
    <div class="grid">
    <img src={logo} alt='logo' id="logo" className='d-inline-block align-top'/>
      <h3>Zarejestruj do TaskTalk</h3>
      <Form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
          <div class="form__field">
             <Form.Label for="login__username">
                <span class="hidden">Username</span>
             </Form.Label>
             <Form.Control autocomplete="username" id="login__username" type="text" name="login" class="form__input" placeholder="Wprowadź adres e-mail" required/>
             </div>
             <div id='SignupButton' class="form__field">
             <Form.Control type="submit" value="Zarejestruj Się"/>
          </div>
       </Form.Group>
          </Form>

    </div>
    
  </Container>
    
  )
}

export default SignupForm