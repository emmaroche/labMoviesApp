import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid";
import { ListedMovie, MovieT } from "../../types/interfaces";

interface MovieListProps {
  movies: MovieT[],
  action: (m: MovieT) => React.ReactNode;
}

const MovieList: React.FC<MovieListProps> = (props) => {
  const movies=props.movies;
  let movieCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie key={m.id} movie={m} action={props.action}/>
    </Grid>
  ));
  return movieCards;
}

  export default MovieList;