"use client";

import { baseImgUrl } from "../lib/constants";
import { Movie } from "@/lib/types";
import { useState } from "react";
import Modal from "../components/Modal";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="relative h-35 rounded-xl min-w-48 sm:h-32 sm:min-w-60 md:h-36 md:min-w-72 cursor-pointer hover:outline-white" onClick={openModal}>
        <img
          src={
            movie?.backdrop_path || movie?.poster_path
              ? `${baseImgUrl}${movie?.backdrop_path || movie?.poster_path}`
              : "/assets/no-image.png"
          }
          className="object-cover w-full h-[20vh] rounded-lg"
          alt={movie?.title || movie?.name}
          
        />
        <p className="">{movie.title}</p>
        <div className="absolute inset-0 rounded-lg border-4 border-transparent hover:border-white"></div>
      </div>

      {showModal && <Modal movie={movie} closeModal={closeModal} />}
    </>
  );
};

export default MovieCard;