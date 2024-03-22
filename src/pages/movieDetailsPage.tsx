import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from "../api/tmdb-api";
import { MovieT } from "../types/interfaces"; 


const MovieDetailsPage: React.FC = (prop) => { 
  const { id } = useParams<{ id: string }>(); 
  const [movie, setMovie] = useState<MovieT | null>(null); 

  useEffect(() => {
    if (id) { 
      getMovie(id).then((movieData) => { 
        setMovie(movieData);
      });
    }
  }, [id]);

  return (
    <>
      {movie ? (
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
        </PageTemplate>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;
