import React from "react";
import { Link } from "react-router-dom";
import { useDoctorStates } from "./utils/DoctorContext";
import "../Routes/main.css";
import avatar from "./assets/images/doctor.jpg";
import { FaStar, FaUser, FaIdCard, FaInfoCircle } from 'react-icons/fa';

const Card = () => {
  const { doctorState, doctorDispatch } = useDoctorStates();

  const addFav = (doctor) => {
    const isDoctorInFavorites = doctorState.favs
      .map((favDoctor) => favDoctor.id)
      .includes(doctor.id);

    if (isDoctorInFavorites) {
      doctorDispatch({
        type: "REMOVE_FAV",
        payload: doctor,
      });
    } else {
      doctorDispatch({
        type: "ADD_FAV",
        payload: doctor,
      });
    }
  };

  return (
    <div className="card-grid">
      {doctorState.doctorList.map((doctor) => {
        const isFavorite = doctorState.favs.some((favDoctor) => favDoctor.id === doctor.id);

        return (
          <div className="card" key={doctor.id}>
            <img src={avatar} alt={doctor.name} className="card-image" />
            <div className="card-content">
              <h3><FaUser className="icon" /> {doctor.name}</h3>
              <h4><FaIdCard className="icon" /> {doctor.username}</h4>
              <div className="card-actions">
                <Link to={"/detail/" + doctor.id} className="details-link">
                  <FaInfoCircle className="icon" /> Ver detalles
                </Link>
                <button
                  onClick={() => addFav(doctor)}
                  className="favButton"
                >
                  <FaStar className={`icon ${isFavorite ? 'favorite' : ''}`} />
                  {isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
