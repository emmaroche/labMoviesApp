import React, { useState, useEffect, FC } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { MovieT } from "../types/interfaces";
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const styles = {
  root: {
    padding: "20px",
  }, fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

const UpcomingPage: FC = () => {
  const [movies, setMovies] = useState<MovieT[]>([]);
  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  // New function
  const addToFavourites = (movieId: number) => {
    const updatedMovies = movies.map((m: MovieT) =>
      m.id === movieId ? { ...m, favourite: true } : m
    );
    setMovies(updatedMovies);
  };

  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <PageTemplate
      title='Discover Upcoming Movies'
      movies={movies}
      action={(movie: MovieT) => {
        // return <AddToFavouritesIcon genre_ids={[]} {...movie} />
       return <PlaylistAddIcon fontSize="large" color="primary" />
      }}
    />
  );
};
export default UpcomingPage;