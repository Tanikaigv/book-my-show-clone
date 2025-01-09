import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Movie_layout from "../layouts/Movie_layout";
import axios from "axios";
import { MovieContext } from "../context/Movie.context";
import Slider from "react-slick";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import PosterSlider from "../Components/PosterSlider/PosterSlider_Component";
import MovieHero from "../Components/MovieHero/MovieHero_Component";


const MoviePage = () => {
  const { id } = useParams();
  const { movie, setMovie } = useContext(MovieContext);

  const [cast, setCast] = useState();
  const [similarMovies, setSimilarMovies] = useState();
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
        const getCast = await axios.get(`/movie/${id}/credits`);
        setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

   useEffect(() => {
     const requestSimilarMovies = async () => {
       const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
       setSimilarMovies(getSimilarMovies.data.result);
     };
     requestSimilarMovies();
   }, [id]);

   useEffect(() => {
    const requestRecommededMovies = async () => {
      const getRecommendedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommendedMovies(getRecommendedMovies.data.results);
    };
    requestRecommededMovies();
  }, [id]);

  useEffect(() => {
    const requestMovie = async () => {
      const getMovieDate = await axios.get(`/movie/${id}`);
      setMovie(getMovieDate.data);
    };
    requestMovie();
  }, [id]);

  const settingsCast = {};

  const settings = {};

  return <>
  <MovieHero/>
    <div className="my-12 container px-4 lg-ml-20 lg:w-2/1">
      <div className="flex flex-col items-start gap-3">
        <h1 className="text-gray-800 font-bold gap-3 text-2xl">
          About the movie
        </h1>
        <p>{movie.overview}</p>
      </div>

      <div className="my-8">
        <hr />
      </div>

      <div className="my-8">
        <h2 className="text-gray-800 font-bold text-2xl mb-3">
          Applicable Offers
        </h2>
        <div className="flex flex-col gap-3 lg:flex-row ">
          <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
            <div className="w-8 h-8">
              <FaCcVisa className="w-full h-full" />
            </div> 
            <div className="flex flex-col items-start">
              <h3 className="text-gray-700 text-xl font-bold">
                Visa Stream Offer
              </h3>
              <p className="text-gray-600">
                Get 75% off up to INR 200 on all RuPay Card* on BookMyShow
                Stream
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
            <div className="w-8 h-8">
              <FaCcApplePay className="w-full h-full" />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
              <p className="text-gray-600">
                Get 75% off up to INR 200 on all RuPay Card* on BookMyShow
                Stream
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8">
        <hr />
      </div>

      {/* Cast Sliders */}
      <div className="my-8">
        <PosterSlider
          config={settings}
          title="Recommended Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>

      {/* recommended movies Slider */}
      <div className="my-8">
        <hr />
      </div>

      <PosterSlider
        config={settings}
        title="BMS XCLUSIVE Movies"
        posters={recommendedMovies}
        isDark={false}
      />
    </div>
  </>;
};

export default Movie_layout(MoviePage);