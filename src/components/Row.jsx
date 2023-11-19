import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Movie from './Movie'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
const Row = ({Rid, title, fetchUrl}) => {

  const [movies, setMovies] = useState([])

  useEffect(()=>{
    axios.get(fetchUrl)
    .then((res)=>{
      setMovies(res.data.results)
    })
  }, [fetchUrl])
  
  const slider = document.getElementById('slider' + Rid)
  const slideRight = ()=>{
    slider.scrollLeft +=250;
  }
  const slideLeft = ()=>{
    slider.scrollLeft -=250;
  }

  return (
    <div>
        <h2 className='text-white p-2 ml-4'>{title}</h2>
        <div className='flex items-center relative group'>
          <FaArrowLeft onClick={slideLeft} id='leftBtn' className='absolute w-10 h-10 p-2 text-black bg-white rounded-full opacity-50 z-10 hover:opacity-100 cursor-pointer left-2 hidden group-hover:flex'/>
          <div id={'slider' + Rid} className='overflow-x-scroll scroll-smooth scrollbar-hide relative w-full h-full whitespace-pre'>
              {movies && movies.map((movie, id)=>(
                <Movie movie={movie} key={id} />
              ))}
          </div>
          <FaArrowRight id='rightBtn' onClick={slideRight} className='absolute  w-10 h-10 p-2 text-black bg-white rounded-full opacity-50 z-10 hover:opacity-100 cursor-pointer right-2 hidden group-hover:flex'/>
        </div>
    </div>
  )
}

export default Row