"use client";
import React, { useState } from "react";
import { Typography, Modal } from "@/components";

interface PositionDataProps {
  type: string;
  text?: string;
  list?: string[];
}

interface PositionModalProps {
  data: Array<PositionDataProps>;
  title: string;
}

export const PositionModal = ({ title, data }: PositionModalProps) => {
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
          <Typography>{title}</Typography>
        </button>
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <div className="max-w-[1440px]">
          <Typography variant="subheader">{title}</Typography>
          {data.map((item, index) => (
            <div key={index}>
              {item.type === "copy" && <Typography>{item.text}</Typography>}
              {item.type === "subheader" && (
                <Typography variant="subheader">{item.text}</Typography>
              )}
              {item.type === "list" && (
                <ul>
                  {item.list &&
                    item.list.map((listItem, listIndex) => (
                      <li key={listIndex}>
                        <Typography>{listItem}</Typography>
                      </li>
                    ))}
                </ul>
              )}
              {item.type === "space" && <div className="mb-4" />}
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};
