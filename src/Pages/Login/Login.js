import React, { useContext, useState } from 'react';
import login from '../../assets/images/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import google from '../../assets/icons/Google.png'
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import { useToken } from '../../Hooks/useToken/useToken';

const Login = () => {
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const { loginWithEmail, providerLogin, passwordReset, setLoading } = useContext(AuthContext);

    const [loggedinUserEmail, setLoggedinUserEmail] = useState('');
    const [token] = useToken(loggedinUserEmail);

    /*--------------
     navigate user 
     ---------------*/
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    /*-------------------------------------------------*/

    if (token) {
        navigate(from, { replace: true })/* navigate user */
    }
    const handleFormSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmail(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setLoggedinUserEmail(email)
                setError('')
                form.reset()
            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoggedinUserEmail(user.email)
                setError('')
            })
            .catch(e => console.error(e))
    }

    const handleEmailBlur = (event) => {
        const email = event.target.value;
        setEmail(email)
    }
    const handlePassowrdReset = () => {
        if (!email) {
            alert('Please enter your email')
        }
        passwordReset(email)
            .then(() => {
                alert('Please check your email to reset password')
            })
            .catch(e => console.error(e))
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center font-bold">Login now!</h1>
                    <form onSubmit={handleFormSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleEmailBlur} type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <button onClick={handlePassowrdReset} className=" link link-hover">Forgot password?</button>
                            </label>
                        </div>
                        <div className='mt-3 text-red-700'>
                            {error}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="grid h-20 card rounded-box place-items-center">
                            <p>New to SIMORA Motors? <Link to='/register' className='text-blue-700'>Create new account</Link></p>
                        </div>
                        <div className="divider">OR</div>
                        <div className="grid h-20 card  rounded-box place-items-center">
                            <button onClick={handleGoogleSignin}>
                                <img className='ml-3' style={{ height: 45, width: 45 }} src={google} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;