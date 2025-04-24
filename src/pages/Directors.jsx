/*
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"; // Adjust path if needed

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    // Simulating an API call or hardcoded data
    const fetchedDirectors = [
      {
        name: "Christopher Nolan",
        movies: ["Inception", "Interstellar", "Dunkirk"]
      },
      {
        name: "Quentin Tarantino",
        movies: ["Pulp Fiction", "Kill Bill", "Django Unchained"]
      },
      {
        name: "Steven Spielberg",
        movies: ["Jaws", "Jurassic Park", "E.T."]
      }
    ];

    setDirectors(fetchedDirectors);

    // If you're fetching from an API:
    // fetch("/api/directors")
    //   .then(res => res.json())
    //   .then(data => setDirectors(data));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        <section>
          {directors.map((director) => (
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map((movie) => (
                  <li key={movie}>{movie}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export default Directors;
*/
/*
import React from "react";
import NavBar from "../components/NavBar";

const directors = [
  { name: "Director A", movies: ["Movie A", "Movie C"] },
  { name: "Director B", movies: ["Movie B"] }
];

function Directors() {
  return (
    <div>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <article key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Directors;
*/
// pages/Directors.jsx
import React from "react";

const directors = [
  {
    name: "Scott Derrickson",
    movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
  },
  {
    name: "Mike Mitchell",
    movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
  },
  {
    name: "Edward Zwick",
    movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"],
  },
];

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <article key={index}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Directors;

