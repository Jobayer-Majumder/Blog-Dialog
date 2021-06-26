import React from 'react';
import { Link } from 'react-router-dom'


const Login = () => {
    const [inputError, setInputError] = React.useState(null);
    const [loginInfo, setLoginInfo] = React.useState({})
    const [newUser, setNewUser] = React.useState(false)

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        const info = { ...loginInfo }
        if (name === 'name') {
            if (value.length < 4) {
                setInputError({ name: name, massage: 'name must be more word' })
            } else {
                setInputError(null)
                info[name] = value;
                setLoginInfo(info)
            }
        };

        if (name === 'email') {
            const isFieldValid = /\S+@\S+\.\S+/.test(value);
            if (!isFieldValid) {
                setInputError({ name: name, massage: 'Please Enter Valid Email' })
                info[name] = null;
                setLoginInfo(info)
            } else {
                setInputError(null)
                info[name] = value;
                setLoginInfo(info)
            }
        };

        if (name === 'pass') {
            if (value.trim().length < 8) {
                setInputError({ name: name, massage: 'Password Must be 8 Character' })
                info[name] = null;
                setLoginInfo(info)
            } else {
                setInputError(null)
                info[name] = value;
                setLoginInfo(info)
            }
        };
        if (name === 'confirmPass') {
            if (value.trim().length < 8) {
                setInputError({ name: name, massage: 'Password Must be 8 Character' })
                info[name] = null;
                setLoginInfo(info)
            } else {
                setInputError(null)
                info[name] = value;
                setLoginInfo(info)
            }
        };
    };

    const handleCreateAccount = e => {
        e.preventDefault()
        if (loginInfo.email && loginInfo.pass && loginInfo.pass === loginInfo.confirmPass) {
            fetch(`http://localhost:5000/createUser`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(loginInfo)
            }).then(res => res.json()).then(result => {
                if (result) {
                    alert('User Created Successfully')
                }
            })
        } else {
            alert('Your Provided information non valid')
        }
    };

    const handleLogin = (e) => {
        e.preventDefault()
        fetch(`http://localhost:5000/getUser`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(loginInfo)
        }).then(res => res.json()).then(result => {
            if (result) {
                alert('Logged successfully')
            }
        })
    }
    console.log(loginInfo)

    return (
        <section>
            <div className="container mx-auto text-center">
                <form className='py-12 border'>
                    {
                        newUser ? <h1 className='text-gray-500 text-lg md:text-2xl font-bold py-4'>Create New account</h1>
                            : <h1 className='text-gray-500 text-lg md:text-2xl font-bold py-4'>Enter Your Credential to Get Access</h1>
                    }
                    {
                        newUser && <div className="pb-8">
                            <input className='shadow py-3 px-2 focus:outline-none focus:ring-2 ring-gray-400 w-2/3 md:w-2/5 rounded' onChange={handleInput} type="text" name='name' placeholder='Your Name' />
                            {
                                inputError?.name === 'name' && <p className='text-red-500'>{inputError.massage}</p>
                            }
                        </div>
                    }
                    <div className="pb-8">
                        <input className='shadow py-3 px-2 focus:outline-none focus:ring-2 ring-gray-400 w-2/3 md:w-2/5 rounded' onChange={handleInput} type="email" name='email' placeholder='Your Email' />
                        {
                            inputError?.name === 'email' && <p className='text-red-500'>{inputError.massage}</p>
                        }
                    </div>
                    <div className="pb-8">
                        <input className='shadow py-3 px-2 focus:outline-none focus:ring-2 ring-gray-400 w-2/3 md:w-2/5 rounded' onChange={handleInput} type="text" name='pass' placeholder='Enter Password' />
                        {
                            inputError?.name === 'pass' && <p className='text-red-500'>{inputError.massage}</p>
                        }
                    </div>
                    {
                        newUser && <div className="pb-8">
                            <input className='shadow py-3 px-2 focus:outline-none focus:ring-2 ring-gray-400 w-2/3 md:w-2/5 rounded' onChange={handleInput} type="text" name='confirmPass' placeholder='Confirm Password' />
                            {
                                inputError?.name === 'confirmPass' && <p className='text-red-500'>{inputError.massage}</p>
                            }
                        </div>
                    }
                    <div className="py-1">
                        {
                            newUser ? <button onClick={handleCreateAccount} type="submit" className='rounded bg-gray-200 py-2 px-8 font-bold text-gray-500'>Sign-Up</button>
                                : <button onClick={handleLogin} type="submit" className='rounded bg-gray-200 py-2 px-8 font-bold text-gray-500'>Login</button>
                        }
                    </div>
                    {
                        newUser ? <p className='text-gray-500 text-lg py-2'>Already Have an Account ? <Link onClick={() => setNewUser(false)} className='text-indigo-400 font-bold'>Login</Link></p>
                            : <p className='text-gray-500 text-lg py-2'>Need an Account ? <Link onClick={() => setNewUser(true)} className='text-indigo-400 font-bold'>Sign-Up</Link></p>
                    }
                </form>
            </div>
        </section>
    );
};

export default Login;