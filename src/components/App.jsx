
// src/App.jsx
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar"; // Adjust if path differs

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
