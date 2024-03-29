import React, { useState, useEffect, FC } from "react";  
import PageTemplate from '../components/templateMovieListPage';
import { ListedMovie } from "../types/interfaces";
import { getUpcomingMovies } from "../api/tmdb-api";

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

  const UpcomingPage: FC= () => {
    const [movies, setMovies] = useState<ListedMovie[]>([]);
    const favourites = movies.filter(m => m.favourite)
    localStorage.setItem('favourites', JSON.stringify(favourites))
    // New function
  const addToFavourites = (movieId: number) => {
    const updatedMovies = movies.map((m: ListedMovie) =>
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
      selectFavourite={addToFavourites}
    />
  );
};
export default UpcomingPage;