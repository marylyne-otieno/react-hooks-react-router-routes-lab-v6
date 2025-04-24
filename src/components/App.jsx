
// src/App.jsx
// App.jsx
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
