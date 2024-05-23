import React,{useEffect,useState,useRef} from 'react'
import GlobalApi from '../../Services/GlobalApi'
import MovieCard from './MovieCard'
import HrMovieCard from './HrMovieCard'
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi'


const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original"
//refer to that element give access to html ele
const screenWidth=window.innerWidth

const MovieList = ({genreId,index_}) => {
    const [movieList, setMovieList] = useState([])
    const elementRef=useRef();//refer to that element give access to html ele
    // console.log(genreId)
    useEffect(() => {
      getMovieByGenreId()
    }, [])
    
    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(res=>{
            // console.log(res.data.results)
            setMovieList(res.data.results)
        })
    }
    const sliderRight=(element)=>{
        element.scrollLeft+=screenWidth-110
    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-110
    }

    return (
    <div>
        {/* <HiChevronLeft className='hidden md:block text-white text-[50px] absolute mx-3 m-[150px] cursor-pointer' onClick={()=>sliderLeft(elementRef.current)}/> */}
        {/* <HiChevronRight className='hidden md:block text-white text-[50px] absolute mx-3 m-[150px] cursor-pointer right-0' onClick={()=>sliderRight(elementRef.current)}/> */}
        <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-5 scroll-smooth'>
            {movieList.map((item,index)=>(
                <>
                {index_%3==0 ? <HrMovieCard movie={item}/> : <MovieCard movie={item}/>}
                </>
            ))}
        </div>
    </div>
  )
}

export default MovieList