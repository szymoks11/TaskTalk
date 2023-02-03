import React from 'react'
import { Form, Container } from "react-bootstrap";
import "./style_loginpage.css";
import logo  from './logo.png';
const Forgot = () => {
  return (
    <Container>
    <div class="grid">
    <img src={logo} alt='logo' id="logo" className='d-inline-block align-top'/>
      <h3>Nie możesz się zalogować?</h3>
      <Form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
          <div class="form__field">
             <Form.Label for="login__username">
                <span class="hidden">Username</span>
             </Form.Label>
             <Form.Control autocomplete="username" id="login__username" type="text" name="login" class="form__input" placeholder="Wpisz adres e-mail" required/>
             </div>
             <div id='SignupButton' class="form__field">
             <Form.Control type="submit" value="Odzyskaj hasło"/>
          </div>
       </Form.Group>
          </Form>
          <a id="BackToLogin" href="/login">Powrót do logowania</a>

    </div>
    
  </Container>
    
  )
}

export default Forgot