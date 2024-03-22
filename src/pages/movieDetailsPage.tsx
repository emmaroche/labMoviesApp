import React from "react"; // replace existing react import
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import { MovieT} from "../types/interfaces";
import PageTemplate from "../components/templateMoviePage";
import useMovie from "../hooks/useMovie";

const MovieDetailsPage: React.FC= () => {
  const { id } = useParams();
  const [movie] = useMovie(id ?? "");

<<<<<<< HEAD
=======
  
>>>>>>> a9bcf47 (Refactor - useMovie custom hook.)
  return (
    <>
      {movie ? (
        <>
        <PageTemplate movie={movie as MovieT}> 
          <MovieDetails {...movie as MovieT} />
        </PageTemplate>
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
    </>
  );
};

export default MovieDetailsPage;