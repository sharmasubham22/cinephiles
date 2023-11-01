import './App.css';
import { React, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container, Grid} from "@mui/material";
import TextField from "@mui/material/TextField";
import img from './download.png';
// import { useNavigate } from "react-router-dom";


function App() {
  //  let navigate = useNavigate();
   const [movie, setMovie] = useState([]);
   const [inputText, setInputText] = useState("");

const changeTheSearch = (event) => {
  // console.log(event.target.value);
  setInputText(event.target.value);
};

   const fetchData = () => {
     return fetch(
       "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0b7740cdf65ff370f2b1ef0c57a054b2"
     )
       .then((response) => response.json())
       .then((data) => setMovie(data.results));
   };

   const searchData = () => {
     return fetch(
       "https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=0b7740cdf65ff370f2b1ef0c57a054b2&query="+inputText
     )
       .then((response) => response.json())
       .then((data) => setMovie(data.results));
   };


   useEffect(() => {
    setMovie([]);
    if(inputText === ""){
     fetchData();
    } else {
      searchData();
    }
   }, [inputText]);

   const IMGPATH = "https://image.tmdb.org/t/p/w1280";

   return (
     <Container>
       {/* <Typography
         gutterBottom
         variant="h3"
         component="div"
         textAlign="center"
         fontWeight="bold"
         padding="30px"
       >
         List of Movies
       </Typography> */}
       <img src={img} alt='image' height='150px' style={{padding:'20px'}}/>
       <TextField
         id="outlined-basic"
         variant="outlined"
         value={inputText}
         onChange={changeTheSearch}
         fullWidth
         label="Search"
         sx={{ mb: 5 }}
       />
       <Typography variant='h4'>Trending</Typography>
       <Grid container spacing={4}>
         {movie &&
           movie.length > 0 &&
           movie
             .map((movieObj, index) => (
               <Grid item key={movieObj.id} xs={12} sm={8} md={3}>
                 <Card sx={{ maxWidth: 250 }}>
                   <CardMedia
                     component="img"
                     alt="profile picture"
                    //  height="200"
                     sx={{ objectFit: "cover", margin: "auto" }}
                     image={IMGPATH + movieObj.poster_path}
                   />
                   {/* <CardContent>
                     <Typography gutterBottom variant="h9" component="div" overflow='hidden' textOverflow={'ellipsis'}>
                       {movieObj.title}
                     </Typography>
                     <Typography variant="h9" color="text.secondary">
                       {movieObj.vote_average}
                     </Typography>
                   </CardContent> */}
            
                 </Card>
               </Grid>
             ))}
       </Grid>
     </Container>
   );
}

export default App;
