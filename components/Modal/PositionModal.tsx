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
      <div className="p-1 w-full bg-gray-200 flex align-middle my-1 px-4 cursor-pointer hover:bg-gray-300 transition-all">
        <button onClick={openModal} className="w-full text-left ">
          <Typography>{title}</Typography>
        </button>
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <div className="max-w-screen-md mx-4">
          <div className="underline">
            <Typography variant="subheader">{title}</Typography>
          </div>
          {data.map((item, index) => (
            <div key={index}>
              {item.type === "copy" && (
                <div className="mb-2">
                  <Typography>{item.text}</Typography>
                </div>
              )}
              {item.type === "subheader" && (
                <div className="mb-2">
                  <Typography variant="footerHeader" color="black">
                    {item.text}
                  </Typography>
                </div>
              )}
              {item.type === "list" && (
                <ul className="list-disc px-4 mb-2">
                  <div className="px-4">
                    {item.list &&
                      item.list.map((listItem, listIndex) => (
                        <li key={listIndex}>
                          <Typography>{listItem}</Typography>
                        </li>
                      ))}
                  </div>
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
