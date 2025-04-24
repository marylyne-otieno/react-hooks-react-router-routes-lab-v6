
// routes.jsx
import App from "./components/App";
import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "directors", element: <Directors /> },
      { path: "actors", element: <Actors /> },
      { path: "movie/:id", element: <Movie /> }
    ],
  }
];

export default routes;
