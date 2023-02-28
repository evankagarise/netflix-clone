import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { FaHeart, FaRegHeart} from 'react-icons/fa'


const Row = ({title, fetchUrl}) => {

    const [movies, setMovies] = useState([])
    const [like, setLike] = useState(false)

    useEffect(() => {
        axios.get(fetchUrl).then((Response) => {
            setMovies(Response.data.results)
        })
    },[fetchUrl])

  return (
    <div>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div  className='relative flex items-center'>
            <div   id={'slider'}>
                {movies.map((item, id) => (
                    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                        <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item.title} />
                        <div className='absolute top-0 left-0 w-full h-full hover:opacity-100 hover:bg-black/80 opacity-0 text-white'>
                            <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                            <p>
                                {like ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
                            </p>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Row