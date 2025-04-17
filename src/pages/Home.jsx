
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Example of simulating a fetch for the movies data
    const movieData = [
      { id: 1, title: "Doctor Strange", time: 115, genres: ["Action", "Adventure", "Fantasy"] },
      { id: 2, title: "Trolls", time: 92, genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"] },
      { id: 3, title: "Jack Reacher: Never Go Back", time: 118, genres: ["Action", "Adventure", "Crime", "Mystery", "Thriller"] }
    ];

    setMovies(movieData);
    setLoading(false);

    // If you were fetching data:
    // fetch('/api/movies')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setMovies(data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     setError("Error fetching movies.");
    //     setLoading(false);
    //   });
  }, []);

  if (loading) {
    return <p>Loading movies...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <section>
          {movies.map((movie) => (
            <MovieCard key={movie.id} id={movie.id} title={movie.title} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Home;
