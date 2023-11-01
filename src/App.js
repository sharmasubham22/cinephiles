import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from './routes';
import Nav from './components/nav';

function App() {
 const router = createBrowserRouter(routes);
 return (
   <>
     <Nav />
     <RouterProvider router={router} />
   </>
 );
}

export default App;
