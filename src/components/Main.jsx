import React, { useState, useEffect } from 'react'
import axios from 'axios'
import requests from '../Requests'
import { FaPlay, FaPlus } from 'react-icons/fa'


const Main = () => {

  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestUpcoming)
      .then((res) => {
        if (res.data.results) {
          const validMovies = res.data.results.filter(movie =>
          movie.title && movie.backdrop_path
          );
          setMovies(validMovies);
        }
      })
  }, [])
  
  return (
    <div id='main' className='h-[600px] w-full text-white'>
        <div id='main-wrapper' className='w-full h-full'>
            <div id='hero' className='absolute bg-cover bg-center w-full h-[600px]'
              style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`}}>
                <div id='layout' className='bg-gradient-to-r from-black h-[600px] w-full flex items-center	pl-8 pt-16'>
                <div id='left-hero' className='flex flex-col justify-end w-[90%]  lg:w-3/5 md:max-w-[70%] sm:w-full' >
                  <h3 className='text-white font-bold text-2xl md:text-3xl lg:text-5xl' >
                    {movie?.title}
                  </h3>

                  <div id='main-btns' className='flex my-4'>
                    <button className='flex items-center text-white bg-slate-900/[0.4] px-4 py-1 mr-4 rounded-sm' >
                      <FaPlay className='mr-2' />
                      <span>Play</span>
                    </button>
                    <button className='flex items-center bg-slate-900/[0.4] text-white px-6 py-1 rounded-sm' >
                      <FaPlus className='mr-2' />
                      <span>My List</span>
                    </button>
                  </div>

                  <p className="lg:m-width-[70%]">
                    {movie?.overview}
                  </p>
                </div>
              </div>   
            </div>
        </div>
    </div>
  )
}

export default Main