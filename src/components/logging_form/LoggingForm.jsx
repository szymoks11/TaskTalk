import React from 'react'
import { Form, Container } from "react-bootstrap";
import "./style_loginpage.css";
import logo  from './logo.png';
const LoggingForm = () => {
  return (
    <Container>
    <div class="grid">
    <img src={logo} alt='logo' id="logo" className='d-inline-block align-top'/>
      <h3>Zaloguj do TaskTalk</h3>
      <Form>
       <Form.Group className="mb-3" controlId="formBasicEmail">
          <div class="form__field">
             <Form.Label for="login__username">
                <span class="hidden">Username</span>
             </Form.Label>
             <Form.Control autocomplete="username" id="login__username" type="text" name="login" class="form__input" placeholder="Wprowadź adres e-mail" required/>
             </div>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicPassword">
          <div class="form__field">
          <Form.Label for="login__password"><span class="hidden">Password</span></Form.Label> 
             <Form.Control id="login__password" type="password" name="password" class="form__input" placeholder="Hasło" required/>
          </div>
          <div class="form__field">
             <Form.Control type="submit" value="Zaloguj Się"/>
          </div>
          </Form.Group>
          </Form>
       <div class="cant_login">
          <a href="forgot.html">Nie możesz się zalogować?</a>
          <a id="register" href="/signup">Zarejestruj się</a>
       </div>
    </div>
    
  </Container>
    
  )
}

export default LoggingForm