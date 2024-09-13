import { Link } from "react-router-dom";
import "../Routes/main.css";
import imgHeader from "./assets/images/DH.ico";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // Importar los íconos de sol y luna desde lucide-react

export const changeTheme = (isDarkMode, setIsDarkMode) => {
  const newTheme = isDarkMode ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  document.body.classList.remove(isDarkMode ? "dark" : "light");
  document.body.classList.add(newTheme);
  setIsDarkMode(!isDarkMode);
};

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect para cargar el tema guardado al iniciar la aplicación
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.add(savedTheme);
    setIsDarkMode(savedTheme === "dark"); // Establecer el estado en base al tema guardado
  }, []);

  return (
    <header>
      <nav>
        <div>
          <Link to="/">
            <h1 style={{ display: "flex", alignItems: "center" }}>
              <img src={imgHeader} alt="logo-dh" />
              Doctor
            </h1>
          </Link>
        </div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/favs">Favs</Link>
          </li>
        </ul>

        {/* Botón para cambiar el tema con solo íconos */}
        <button
          onClick={() => changeTheme(isDarkMode, setIsDarkMode)}
          className="theme-toggle-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.5rem", // Tamaño del icono
            display: "flex",
            alignItems: "center",
          }}
        >
          {isDarkMode ? (
            <Moon style={{ color: "white" }} />
          ) : (
            <Sun style={{ color: "black" }} />
          )}{" "}
          {/* Mostrar ícono dinámico con color */}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
