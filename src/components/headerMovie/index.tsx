import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import FavIcon from "@mui/icons-material/Favorite"; 
import { MovieT } from "../../types/interfaces"; 

const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
};

const MovieHeader: React.FC<MovieT> = (props) => {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    // Checking if the movie is tagged as a favorite
    const favourites = JSON.parse(localStorage.getItem("favourites") || "[]");
    setIsFavourite(favourites.some((fav: MovieT) => fav.id === props.id));
  }, [props.id]);

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      {isFavourite && (
        <IconButton aria-label="favorite">
          <FavIcon color="primary"  fontSize="large"/>
        </IconButton>
      )}

      <Typography variant="h4" component="h3">
        {props.title}{"   "}
        <a href={props.homepage}>
          <HomeIcon color="primary"  fontSize="large"/>
        </a>
        <br />
        <span>{`${props.tagline}`} </span>
      </Typography>

      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
