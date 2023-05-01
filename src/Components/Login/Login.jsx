import React from 'react';
import { Button } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';
import {FaFacebook, FaGoogle} from 'react-icons/fa'
import { AuthContex } from '../../AuthProvider/AuthProviders';
const Login = () => {
    const {SignWithGoogle,Error,user} = useContext(AuthContex);

    const handleGoogle=()=>{
        SignWithGoogle()
        console.log('clicked')
    }
    return (
        <div>
            
            <form className='w-25 mx-auto border py-2 px-3' >
                <h3>Please Login</h3>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 form-check d-flex ">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                    <p className='ms-5 underline-primary'><small> <Link>Forget password</Link> </small></p>
                </div>
                <button type="submit" class="btn btn-primary w-100">Login</button>

                <p className='my-2'><small>Don't have an Account? <Link to='/register'>Register</Link> </small></p>

                <div className='d-flex'>
                <hr className='w-50' /> <p className='fw-4 px-3'>or</p> <hr className='w-50' />
                </div>
                <Button className='w-100 my-2 bg-white text-dark'> <FaFacebook></FaFacebook>  Continue With Facebook</Button>
                <Button onClick={handleGoogle} className='w-100 bg-white text-dark'> <FaGoogle></FaGoogle> Continue With Google</Button>
            </form>
            
        </div>
    );
};

export default Login;