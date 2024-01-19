"use client";
import React, { useState } from "react";
import { Typography, Modal } from "@/components";

export const PositionsModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="h-10 w-full bg-gray-200 flex align-middle my-1 px-4 cursor-pointer hover:bg-gray-300 transition-all">
        <button onClick={openModal} className="w-full text-left ">
          <Typography>ASI President</Typography>
        </button>
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <Typography>insert chilriasdfasdfn here </Typography>
      </Modal>
    </>
  );
};
