
import Home from "@/pages/Home";
import SearchResult from "@/pages/SearchResult";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/search",
    element: <SearchResult/>,

  },
]);

function App() {

  return(
    <RouterProvider router={router} />
  )
}

export default App
