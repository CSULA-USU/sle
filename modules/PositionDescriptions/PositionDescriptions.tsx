"use client";
import React, { useState } from "react";
import { Typography, Modal } from "@/components";

export const PositionDescriptions = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="my-10">
      <button onClick={openModal}>openmodelo</button>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <Typography>insert chilrin here </Typography>
      </Modal>
    </div>
  );
};
