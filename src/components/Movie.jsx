import React from 'react'
import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebaseconfig.js'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Movie = ({movie}) => {
    const [saved, setSaved] = useState(false)
    const [liked, setLiked] = useState(false)
    const { user } = UserAuth();
    const movieId = doc(db, 'users', `${user?.email}`)
    const addLike = async ()=>{
        if (user?.email){
           setLiked(!liked)
            setSaved(true)
            await updateDoc(movieId, {
                likes: arrayUnion({
                    id: movie.id,
                    title: movie.title || movie.name,
                    img: movie.backdrop_path
                })
            })
        }
    }
  return (
        <div className='cursor-pointer p-2 relative inline-block w-[200px] md:w-[250px] lg:w-[280px]'>
            <img
            className='block w-full h-auto'
            src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
            alt={movie?.title}/>

            <div id='layout' className='top-0 left-0 absolute w-full h-full opacity-0 hover:opacity-100 hover:bg-black/80' >

                <p className='flex justify-center items-center h-full text-center text-white  text-xs md:text-sm font-semibold'>{movie?.title || movie?.name}
                </p>

                <span onClick={addLike} className='text-white absolute top-4 right-4'>
                    {liked ? <FaHeart /> : <FaRegHeart />}
                </span>

            </div>
        </div>
  )
}

export default Movie