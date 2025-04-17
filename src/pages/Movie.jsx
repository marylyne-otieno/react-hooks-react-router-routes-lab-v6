
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const allMovies = [
      { id: "1", title: "Inception", time: "148 min", genres: ["Action", "Sci-Fi"] },
      { id: "2", title: "Interstellar", time: "169 min", genres: ["Adventure", "Drama", "Sci-Fi"] },
      { id: "3", title: "The Dark Knight", time: "152 min", genres: ["Action", "Crime", "Drama"] },
    ];

    const foundMovie = allMovies.find((movie) => movie.id === id);

    if (foundMovie) {
      setMovie(foundMovie);
      setNotFound(false);
    } else {
      setMovie(null);
      setNotFound(true);
    }
  }, [id]);

  if (notFound) {
    return (
      <>
        <NavBar />
        <main>
          <h1>Movie Not Found</h1>
          <p>No movie found with ID: {id}</p>
        </main>
      </>
    );
  }

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <div>
          {movie.genres.map((genre, index) => (
            <span key={index}>{genre} </span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
