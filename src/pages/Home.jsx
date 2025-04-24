import React from "react";
import MovieCard from "../components/MovieCard";

const movies = [
  { id: "1", title: "Doctor Strange" },
  { id: "2", title: "The Imitation Game" },
  { id: "3", title: "Black Mass" },
];

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;
