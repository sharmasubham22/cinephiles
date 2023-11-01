import { React, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Container, Grid, Rating } from "@mui/material";
import TextField from "@mui/material/TextField";

function Search() {
   const [movie, setMovie] = useState([]);
    const [inputText, setInputText] = useState("");

    const changeTheSearch = (event) => {
      setInputText(event.target.value);
    };
 const searchData = () => {
   return fetch(
     "https://api.themoviedb.org/3/search/multi?sort_by=popularity.desc&api_key=0b7740cdf65ff370f2b1ef0c57a054b2&query=" +
       inputText
   )
     .then((response) => response.json())
     .then((data) => setMovie(data.results));
 };

 useEffect(() => {
   setMovie([]);
     searchData();
 }, [inputText]);

const IMGPATH = "https://image.tmdb.org/t/p/w1280";


  return (
    <div>
      <Container>
        <TextField
          id="filled-basic"
          variant="filled"
          value={inputText}
          onChange={changeTheSearch}
          fullWidth
          label="Search"
          sx={{ mb: 3, mt:5 }}
        />
        <Grid container spacing={4}>
          {movie &&
            movie.length > 0 &&
            movie.map((movieObj, index) => (
              <Grid item key={movieObj.id} xs={12} sm={8} md={3}>
                <Card sx={{ maxWidth: 250 }} id="card">
                  <CardMedia
                    component="img"
                    alt="profile picture"
                    sx={{ objectFit: "cover", margin: "auto" }}
                    image={IMGPATH + movieObj.poster_path}
                  />
                  <CardContent>
                    {/* <Typography gutterBottom variant="h9" component="div" overflow='hidden' textOverflow={'ellipsis'}>
                       {movieObj.title}
                     </Typography> */}
                    <Rating
                      name="read-only"
                      value={movieObj.vote_average / 2}
                      precision={0.1}
                      readOnly
                    ></Rating>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Search
