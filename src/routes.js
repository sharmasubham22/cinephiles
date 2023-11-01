import Movies from "./views/movies";
import Trending from "./views/trending";
import TvShows from "./views/tv";
import Search from "./views/search";

const routes = [
  {
    name: "Trending",
    path: "/",
    element: <Trending />,
  },
  {
    name: "Movies",
    path: "/movies",
    element: <Movies />,
  },
  {
    name: "TV Shows",
    path: "/tv",
    element: <TvShows />,
  },
  {
    name: "Search",
    path: "/search",
    element: <Search />,
  },
];

export default routes;
