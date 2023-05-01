import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../AuthProvider/AuthProviders';

const Register = () => {
    const {SignWithGoogle,Error,user,signInWithFacebook,NewUserEmailAndPassword} = useContext(AuthContex);

    const handleGoogle=()=>{
        SignWithGoogle()
        console.log('clicked')
    }
    const handleFacebook=()=>{
        signInWithFacebook()
        // conosle.log('Facebook Clicked')
    }
    const handleForm=event=>{
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const fullName = form.fullname.value;
        const password = form.password.value;
        console.log(email,password);
        NewUserEmailAndPassword(email,password)
        form.reset();  

    }

    return (
        <div>
            
            <form onSubmit={handleForm} className='w-25 mx-auto border py-2 px-3' >
                <h3 className='text-danger'>Join Now</h3>
                <div class="mb-3 mt-1">
                    <label for="exampleInputName" class="form-label">Full Name</label>
                    <input name='fullname' type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp"/>
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input name='email' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input name='password' type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                {/* <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input name='password' type="password" class="form-control" id="exampleInputPassword1"/>
                </div> */}
                <div class="mb-3 form-check d-flex ">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                    
                </div>
                <button type="submit" class="btn btn-primary w-100">Register</button>

                <p className='my-2'><small>Alredy have an Account? <Link to='/login'>Login</Link> </small></p>

                <p>{Error}</p>
                <div className='d-flex'>
                <hr className='w-50' /> <p className='fw-4 px-3'>or</p> <hr className='w-50' />
                </div>
                <Button onClick={handleFacebook} className='w-100 my-2 bg-white text-dark'> <FaFacebook></FaFacebook>  Continue With Facebook</Button>
                <Button onClick={handleGoogle} className='w-100 bg-white text-dark'> <FaGoogle></FaGoogle> Continue With Google</Button>
            </form>
            
        </div>
    );
};

export default Register;