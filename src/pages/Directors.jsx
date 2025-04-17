
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
            <article key={director.name}> {/* Using director name as key */}
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
