import React,{useEffect,useState,useRef} from 'react'
import GlobalApi from '../../Services/GlobalApi'
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi'

const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original"

const Slider = () => {
    const [movieList, setMovieList] = useState([])
    const elementRef=useRef();//refer to that element give access to html ele
    const screenWidth=window.innerWidth

    //[] loads everytime when loaded
    //loads everytime 
    //[test] whenever test changes loads 
  useEffect(() => {
    getTrendingVideos();
  }, [])
  
  const getTrendingVideos=()=>{
    GlobalApi.getTrendingVideos.then(res=>{
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
        <HiChevronLeft className='hidden md:block text-white text-[50px] absolute mx-3 m-[250px] cursor-pointer' onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white text-[50px] absolute mx-3 m-[250px] cursor-pointer right-0' onClick={()=>sliderRight(elementRef.current)}/>
        <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none  scroll-smooth' ref={elementRef}>
            {movieList.map((item,index)=>(
                <img src={IMAGE_BASE_URL+item.backdrop_path} className='min-w-full md:h-[500px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out' key={index}/>
            ))}
        </div>
    </div>
  )
}

export default Slider