import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDoctorStates } from "../Components/utils/DoctorContext";
import axios from "axios";
import "../Routes/main.css";
import avatar from "../Components/assets/images/doctor.jpg";
import { FaUser, FaEnvelope, FaPhone, FaGlobe, FaArrowLeft } from 'react-icons/fa';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const { doctorState, doctorDispatch } = useDoctorStates();
  const { id } = useParams();
  const urlDoctorId = `https://jsonplaceholder.typicode.com/users/` + id;

  useEffect(() => {
    axios(urlDoctorId)
      .then((res) => {
        doctorDispatch({
          type: "GET_DOCTOR_DETAIL",
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Detalles del Doctor</h1>
      <div className="card-grid">
        {doctorState.doctorDetail.id && (
          <div className="card2">
            <img
              src={avatar}
              alt={`Avatar de ${doctorState.doctorDetail.name}`}
            />
            <h3><FaUser className="icon" /> {doctorState.doctorDetail.name}</h3>
            <h4><FaEnvelope className="icon" /> Email: {doctorState.doctorDetail.email}</h4>
            <h4><FaPhone className="icon" /> Teléfono: {doctorState.doctorDetail.phone}</h4>
            <h4><FaGlobe className="icon" /> Sitio web: {doctorState.doctorDetail.website}</h4>
            <Link to="/">
              <button>
                <FaArrowLeft className="icon" /> Volver al inicio
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
