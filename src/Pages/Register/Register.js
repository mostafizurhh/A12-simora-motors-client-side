import React, { useContext, useState } from 'react';
import login from '../../assets/images/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import google from '../../assets/icons/Google.png'
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import { useToken } from '../../Hooks/useToken/useToken';


const Register = () => {
    const [error, setError] = useState();


    const { createUser, providerLogin, updateUserInfo } = useContext(AuthContext)

    /*--------------
    navigate user 
    ---------------*/
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    /*-------------------------------------------------*/

    /* get JWT token for a registered user*/
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)

    if (token) {
        navigate(from, { replace: true })
    }


    const handleFormSubmit = event => {
        event.preventDefault()
        // const form = event.target;

        const userName = event.target.userName.value;
        const photoURL = event.target.photoURL.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const userCategory = event.target.userCategory.value;

        if (!/(?=.*[a-z])/.test(password)) {
            setError('Please provide at least 1 lowercase letter')
            return
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please provide at least 1 uppercase letter')
            return
        }
        if (!/(?=.*[0-9])/.test(password)) {
            setError('Please provide at least 1 number')
            return
        }
        if (!/(?=.*[!@#$&*%])/.test(password)) {
            setError('Please provide at least 1 special charecter')
            return
        }
        if (!/.{8}/.test(password)) {
            setError('Password length must be at least 8 charecters')
            return
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                handleUpdateUserInfo(userName, photoURL, email, userCategory)
                toast.success('Registration Successful!', { duration: 3000 })
                setError('')
                event.target.reset()
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleUpdateUserInfo = (userName, photoURL, email, userCategory) => {
        const info = {
            displayName: userName,
            photoURL: photoURL,
            email: email,
            userCategory
        }
        updateUserInfo(info)
            .then(() => {
                console.log(info)
                saveUserInfo(userName, email, userCategory, photoURL)
            })
            .catch(e => console.error(e))
    }

    /* request server side to create an API */
    const saveUserInfo = (userName, email, userCategory, photoURL) => {
        const dbUser = { name: userName, email, userCategory, photoURL };
        fetch('https://simora-motors-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dbUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCreatedUserEmail(email)
            })
    }


    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                handleUpdateUserInfo(user.displayName, user.photoURL, user.email)
                toast.success('Registration Successful', { duration: 3000 })
                setError('')
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
                    <h1 className="text-3xl text-center font-bold">Register now!</h1>
                    <form onSubmit={handleFormSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='userName' placeholder="Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name='photoURL' placeholder="Upload photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Category</span>
                            </label>
                            <select name="userCategory" className="input input-bordered">
                                <option>Buyer</option>
                                <option>Seller</option>
                            </select>
                        </div>

                        <div className='mt-3 text-red-700'>
                            {error}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="grid h-20 card rounded-box place-items-center">
                            <p>Already Have An Account? <Link to='/login' className='text-blue-700'>Login</Link></p>
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

export default Register;