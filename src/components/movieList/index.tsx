import React from "react";
import MovieCard from "../movieCard/";
import Grid from "@mui/material/Grid";
import { BaseMovieList, BaseMovie } from "../../types/interfaces";

interface MovieListProps extends BaseMovieList {
  addToFavourites: (movieId: number) => void;
  selectFavourite: (movieId: number) => void;
}

const MovieList: React.FC<MovieListProps> = (props) => {
  const movies = props.movies;
  let movieCards = movies.map((m: BaseMovie) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <MovieCard {...m} selectFavourite={props.selectFavourite} />
    </Grid>
  ));
  return <>{movieCards}</>;
}

export default MovieList;
