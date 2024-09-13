import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {

  const addFav = () => {
    const currentFavs = JSON.parse(localStorage.getItem("favDentist")) || [];

    const isAlreadyFav = currentFavs.some((fav) => fav.id === id);

    if (!isAlreadyFav) {
      const newFav = { name, username, id };
      const updatedFavs = [...currentFavs, newFav];
      localStorage.setItem("favDentist", JSON.stringify(updatedFavs));
      alert("¡Agregado a favoritos!");
    } else {
      alert("¡Este dentista ya está entre tus favoritos!.");
    }
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <img
          className="card-img"
          src="/images/doctor.jpg"
          alt="profile-pic"
        />
        <div className="card-info">
          <h3>Name: {name}</h3>
          <h4>User: {username}</h4>
        </div>
      </Link>
      <button onClick={addFav} className="favButton">Agregar a favoritos</button>
    </div>
  );
};

export default Card;
