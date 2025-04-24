/*
import React from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const movies = [
  { id: "1", title: "Doctor Strange", time: "115 min", genres: ["Action", "Thriller"] },
  { id: "2", title: "Movie B", time: "90 min", genres: ["Drama"] },
  { id: "3", title: "Movie C", time: "120 min", genres: ["Action", "Adventure"] },
];

function Movie() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);

  if (!movie) return <p>Movie not found</p>;

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      <p>{movie.genres.join(", ")}</p>
      <h2>Associated Movies</h2>
      <ul data-testid="associated-movies-list">
        {movies
          .filter((m) => m.id !== id)
          .map((associatedMovie) => (
            <li key={associatedMovie.id}>
              <Link
                to={`/movie/${associatedMovie.id}`}
                data-testid={`movie-link-${associatedMovie.id}`}
              >
                View Info
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Movie;
*/
import React from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const movies = [
  { id: "1", title: "Doctor Strange", time: "115 min", genres: ["Action", "Thriller"] },
  { id: "2", title: "Movie B", time: "90 min", genres: ["Drama"] },
  { id: "3", title: "Movie C", time: "120 min", genres: ["Action", "Adventure"] },
];

function Movie() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);

  if (!movie) return <p>Movie not found</p>;

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      <p>{movie.genres.join(", ")}</p>
      <h2>Associated Movies</h2>
      <ul data-testid="associated-movies-list">
        {movies
          .filter((m) => m.id !== id)
          .map((associatedMovie) => (
            <li key={associatedMovie.id}>
              <Link
                to={`/movie/${associatedMovie.id}`}
                data-testid={`movie-link-${associatedMovie.id}`}
              >
                View Info
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Movie;