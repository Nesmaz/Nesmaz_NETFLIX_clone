  import React from 'react'
  import '../index.css'
  import { Link, useNavigate} from 'react-router-dom'
  import { UserAuth } from '../context/AuthContext'
  
  const Navbar = () => {

    const {user, logOut} = UserAuth();
    const navigate = useNavigate();

    const userSignOut = async ()=>{
      try{
        await logOut();
        navigate('/signIn');
      } catch (err) {
        console.error(err);
      }
    }
    return (
      <div id='navbar' className='flex justify-between w-full z-50 absolute mb-2 px-6 pt-6'>

        <Link to='/'>
        <h1 id='logo' className='text-red-600 text-4xl font-medium cursor-pointer'>
          NETFLIX</h1>
          </Link>

          {user?.email ? (
                    <div id='navBtns'> 

                    <Link to='/Account'>
                      <button className='text-white pr-4' >
                       Account
                      </button>
                    </Link>
                      <button onClick={userSignOut} className='text-white bg-red-600 md:px-6 md:py-3 p-2 rounded'>
                        Sign Out
                      </button>
          
                  </div>
          ) : (
            <div id='navBtns'> 

            <Link to='/SignIn'>
              <button className='text-white pr-4' >
               Sign In
              </button>
            </Link>
  
            <Link to='/SignUp'>
              <button className='text-white bg-red-600 px-6 py-3 rounded'>
                Sign Up
              </button>
            </Link>
  
          </div>
          )}

      </div>
    )
  }
  
  export default Navbar