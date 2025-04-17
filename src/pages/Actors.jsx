
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
            <article key={actor.name}> {/* Using actor's name as key */}
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
