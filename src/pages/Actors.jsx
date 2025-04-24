/*
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"; // Adjust path if needed

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    // Simulating an API call or hardcoded data
    const fetchedActors = [
      {
        name: "Leonardo DiCaprio",
        movies: ["Inception", "Titanic", "The Revenant"]
      },
      {
        name: "Meryl Streep",
        movies: ["The Devil Wears Prada", "Sophie's Choice", "Kramer vs. Kramer"]
      },
      {
        name: "Morgan Freeman",
        movies: ["The Shawshank Redemption", "Se7en", "Driving Miss Daisy"]
      }
    ];

    setActors(fetchedActors);

    // If you're fetching from an API:
    // fetch("/api/actors")
    //   .then(res => res.json())
    //   .then(data => setActors(data));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        <section>
          {actors.map((actor) => (
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie) => (
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

export default Actors;
*/
/*
import React from "react";
import NavBar from "../components/NavBar";

const actors = [
  { name: "Actor A", movies: ["Movie A"] },
  { name: "Actor B", movies: ["Movie B", "Movie C"] }
];

function Actors() {
  return (
    <div>
      <NavBar />
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <article key={index}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;

*/

// pages/Actors.jsx
import React from "react";

const actors = [
  {
    name: "Benedict Cumberbatch",
    movies: ["Doctor Strange", "The Imitation Game", "Black Mass"],
  },
  {
    name: "Justin Timberlake",
    movies: ["Trolls", "Friends with Benefits", "The Social Network"],
  },
  {
    name: "Anna Kendrick",
    movies: ["Pitch Perfect", "Into The Wood"],
  },
  {
    name: "Tom Cruise",
    movies: ["Jack Reacher: Never Go Back", "Mission Impossible 4", "War of the Worlds"],
  },
];

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <article key={index}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;
