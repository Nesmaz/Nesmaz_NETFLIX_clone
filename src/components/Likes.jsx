import React, { useState, useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebaseconfig.js'
import { doc, updateDoc, onSnapshot } from 'firebase/firestore'
import 'firebase/firestore'
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { IoMdClose } from "react-icons/io";


const Likes = () => {
  const { user } = UserAuth()
  const [movies, setMovies] = useState([])

useEffect(()=>{
  onSnapshot(doc(db, 'users', `${user?.email}`), (doc)=>{
    setMovies(doc.data()?.likes);
  })
}, [user?.email])

const movieRef = doc(db, 'users', `${user?.email}`)

const rmvLike = async (removed) =>{
  try {
    const update = movies.filter((movie)=> movie.id !== removed)
    await updateDoc(movieRef, {likes: update})
  } catch (err){
    console.error(err)
  }
}
  return (
    <div>
        <h2 className='text-white p-2 ml-4'>Likes</h2>
        <div className='flex items-center relative group'>

          <div id='slider' className=' overflow-x-scroll scroll-smooth scrollbar-hide whitespace-pre relative w-full h-full '>
              {movies && movies.map((movie, id)=>(
                <div className='cursor-pointer p-2 relative inline-block w-[200px] md:w-[250px] lg:w-[280px]' key={id}>
                  <img
                  className='block w-full h-auto'
                  src={`https://image.tmdb.org/t/p/w500${movie?.img}`}
                  alt={movie?.title || movie?.name}/>
      
                  <div id='layout' className='top-0 left-0 absolute w-full h-full opacity-0 hover:opacity-100 hover:bg-black/80' >
      
                      <p className='flex justify-center items-center h-full text-center text-white  text-xs md:text-sm font-semibold'>{movie?.title}
                      </p>
                      <button onClick={()=>rmvLike(movie.id)} className='text-white absolute top-4 right-4 cursor-pointer z-20 ' >
                      <IoMdClose />
                      </button>
                  </div>
                </div>
              ))}
          </div>

        </div>
    </div>
  )
}

export default Likes