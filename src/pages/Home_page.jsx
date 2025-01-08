import React, { useEffect, useState } from 'react'
import Default_layout from '../layouts/Default_layout';
import HeroCarousel_Component from '../Components/HeroCarousel/HeroCarousel_Component';
import Entertainment from '../Components/Entertainment/Entertainment';
import PosterSlider_Component from '../Components/PosterSlider/PosterSlider_Component';
import axios from 'axios';

const Home_page = () => {
  const [recommendedMovies,setRecommendedMovies] = useState([]);
  const [premier,setPremier] = useState([]);
  const [onlineStreamEvents,setOnlineStreamEvents] = useState([]);

  useEffect(()=>{
    const requestTopRatedMovies = async()=>{
      const getTopRatedMovies = await axios.get("movie/top_rated?");
      setRecommendedMovies(getTopRatedMovies.data.results);
    }
    requestTopRatedMovies();
  },[]);

  useEffect(()=>{
    const requestPrimierMovies = async()=>{
      const getPopularMovies = await axios.get("movie/popular?");
      setPremier(getPopularMovies.data.results);
    }
    requestPrimierMovies();
  },[]);

  useEffect(()=>{
    const requestOnlineStreamEvents = async()=>{
      const getUpcomingMovies = await axios.get("movie/upcoming?");
      setOnlineStreamEvents(getUpcomingMovies.data.results);
    }
    requestOnlineStreamEvents();
  },[]);
  return (
    <>
      <HeroCarousel_Component/>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The Best of Entertainment
        </h1>
        <Entertainment />
      </div>

      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider_Component 
        title="Recommended Movies"
        subtitle="List of Recommended Movies"
        posters={recommendedMovies}
        isDark={false}
        />
      </div>

      <div className='bg-premier-800 py-12'>
        <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
          <div className='hidden md:flex'>
              <img src="https://image3.mouthshut.com/images/ImagesR/imageuser_m/2018/3/925840065-6197646-1.jpg?rnd=86270" 
               alt='Rupay'
               className=''/>
          </div>
          <PosterSlider_Component 
            title="Premier Movies"
            subtitle="List of Premier Movies"
            posters={premier}
            isDark={true}
          />
        </div>
      </div>

      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider_Component 
            title="Online Streaming Events"
            subtitle="Brand new releases every Friday"
            posters={onlineStreamEvents}
            isDark={false}
          />    
      </div>
    </>
  )
}

export default Default_layout(Home_page)
