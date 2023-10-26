import Modal from "./Modal";
import { useState } from "react";

export default function Work() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const works = [
    {
      title: "PR Manager Portfolio Website",
      description:
        "A portfolio website for a PR Manager who works in the tech industry, made with Vite, React, TailwindCSS, and deployed on Firebase.",
      image: "/syanmey2.png",
      url: "https://www.syanmey.com/",
    },
    {
      title: "HelpUkraineHub",
      description:
        "A centralized fundraising platform for Ukraine with the goal of gathering as many campaigns as possible in the same place so users can easily browse through them and filter out which ones they want to support based in their purposes, this project was intended to help me get experience with a full-stack project. It was made with React, TailwindCSS, Next.js, MongoDB, and deployed on Firebase. The project is still in development as all de data base implementation is still missing.",
      image: "/helpukrainehub.png",
      url: "https://helpukrainehub-cd14b.web.app/",
    },
  ];

  const openModal = (title, description, image, url) => {
    setModalData({ title, description, image, url });
    setIsModalOpen(true);
    // Prevent scrolling
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData({});
    // Allow scrolling
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-orange-950 bg-opacity-40"></div>
        <div className="mask2 bg-customBgColor w-full h-full flex items-center lg:justify-evenly flex-col lg:flex-row justify-center">
          <h1 className="text-gray-300 text-6xl  text-center">
            Some of my work
          </h1>
          <p
            className="text-gray-300 text-2xl mt-8 pb-6 cursor-pointer"
            onClick={() =>
              openModal(
                works[0].title,
                works[0].description,
                works[0].image,
                works[0].url
              )
            }
          >
            PR Manager Portfolio Website
          </p>
          <p
            className="text-gray-300 text-2xl mt-8 pb-6 cursor-pointer"
            onClick={() =>
              openModal(
                works[1].title,
                works[1].description,
                works[1].image,
                works[1].url
              )
            }
          >
            HelpUkraineHub
          </p>
        </div>
        <div className="mask3 bg-customBgColor w-full h-full"></div>
        {isModalOpen && (
          <Modal
            onClose={closeModal}
            title={modalData.title}
            description={modalData.description}
            image={modalData.image}
            url={modalData.url}
          />
        )}
      </div>
    </>
  );
}
