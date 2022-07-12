import React from 'react'
import {Link} from "react-router-dom"
import {Form} from "react-bootstrap"
import { Button } from "react-bootstrap"
import GoogleButton from 'react-google-button'

const Login = () => {
  return (
   <>
    <div className="p-4 box">
        <h2 className='mb-3'>Firebase Auth Login</h2>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email Address"></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="password" placeholder="Password"></Form.Control>
            </Form.Group>

            <div className="d-grid gap-2">
                <Button variant="primary" type="Submit">
                    Login
                </Button>
                </div>
        </Form>
        <hr/>
        <div>
            <GoogleButton className="g-btn" type="dark"/>
        </div>
    </div>

    <div className="p-4 box mt-3 text-center">
    Don't Have an account? <Link to="/signup">SignUp</Link>  
    </div>
</>
  )
}

export default Login