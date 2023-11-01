import { React, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container, Grid, Rating } from "@mui/material";

function Movies() {
   const [movie, setMovie] = useState([]);

   const fetchData = () => {
     return fetch(
       "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0b7740cdf65ff370f2b1ef0c57a054b2"
     )
       .then((response) => response.json())
       .then((data) => setMovie(data.results));
   };

   useEffect(() => {
     fetchData();
   }, []);

   const IMGPATH = "https://image.tmdb.org/t/p/w1280";

   return (
     <Container>
       <Grid container spacing={4} sx={{ mt: 5 }}>
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
                   <Typography
                     variant="h7"
                     component="div"
                     color="text.secondary"
                   >
                     <b>Released: </b>
                     {movieObj.release_date}
                   </Typography>
                 </CardContent>
               </Card>
             </Grid>
           ))}
       </Grid>
     </Container>
   );
}

export default Movies
