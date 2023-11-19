import React, { useState }from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, signIn} = UserAuth()
  const navigate = useNavigate();
  const [err, setErr] = useState('')
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    setErr()
    try {
      await signIn(email, password)
      navigate('/')
    } catch (err) {
      setErr(err.message)
      console.error(err)
    }

  }
  return (
    <div id='hero' className="absolute bg-cover bg-center w-full h-full bg-[url('./assets/netflix.png')]">
    <div id='signupLayout' className="bg-black/60 w-full h-full fixed top-0 left-0"></div>

     <div id='signinFormparent' className='w-full px-4 py-24 fixed z-20' >
      <div id='signinFormpg' className='max-w-[450px] h-[600px] rounded text-white bg-black/75 mx-auto' >
        <div id='signupForm' className='mx-auto py-16 max-w[320px] px-16'>

          <h1 className='text-3xl font-semibold'>
            Sign In
          </h1>
          {err? <p className="text-white bg-[#E87C03] mt-[7px] mb-[-4px] py-3 px-5 text-xs rounded">
            Incorrect email or password. Please try again 
          </p> : null}
          <form onSubmit={handleSubmit} className='flex flex-col w-full py-8' >

            <input onChange={(e) => setEmail(e.target.value)}
            className='bg-white rounded text-black my-2 p-3 outline-none' type='email' placeholder='E-mail' autoComplete='email' />
            <input onChange={(e) => setPassword(e.target.value)}
            className='bg-white text-black rounded my-2 p-3 outline-none' type='password' placeholder='Password' autoComplete='current-password'/>
            <button className='bg-[#e50914] rounded font-semibold mt-7 mb-2 py-3'>
              Sign In
            </button>

            <div id='remember' className='flex justify-between items-center text-[#a8a8a8] text-sm'>
              <p>
                <input type='checkbox' className='mr-2'/>
                Remember me
              </p>
              <p>Need Help?</p>
            </div>
            <p className='mt-16 '>
              <span className='mr-2 text-[#767676]' >New to Netflix?</span>
              <Link to='/SignUp' > Sign up now</Link>
            </p>
          </form>

        </div>

      </div>

    </div>

  </div>
  )
}

export default SignIn