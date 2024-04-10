"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Typography, Modal } from "@/components";
import { FaCirclePlus } from "react-icons/fa6";
import Link from "next/link";

interface PositionDataProps {
  type: string;
  text?: string;
  list?: (string | string[])[];
  img?: string;
  alt?: string;
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
      <div
        className="p-1 w-full bg-gray-200 flex align-middle my-1 px-4 cursor-pointer hover:bg-gray-300 transition-all"
        onClick={openModal}
      >
        <button
          onClick={openModal}
          className="w-full text-left flex items-center"
          style={{
            textOverflow: "ellipsis",
          }}
        >
          <FaCirclePlus className="mr-2 flex-shrink-0" />
          <p className="font-sans truncate">{title}</p>
        </button>
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <div className="max-w-screen-lg mx-4">
          <div className="underline">
            <Typography variant="subheader">{title}</Typography>
          </div>
          {data?.map((item, index) => (
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
                <div className="px-4">
                  <ul className="list-disc px-4 mb-2">
                    {item.list &&
                      item.list.map((listItem, listIndex) => (
                        <div key={listIndex}>
                          {Array.isArray(listItem) ? (
                            <Typography>
                              <li>
                                {listItem[0]}
                                <ol className="list-decimal px-4">
                                  {(listItem as string[])
                                    .slice(1)
                                    .map((sublistItem, sublistIndex) => (
                                      <li key={sublistIndex}>{sublistItem}</li>
                                    ))}
                                </ol>
                              </li>
                            </Typography>
                          ) : (
                            <li>
                              <Typography>{listItem}</Typography>
                            </li>
                          )}
                        </div>
                      ))}
                  </ul>
                </div>
              )}
              {item.type === "link" && (
                <div className="px-4">
                  <Typography>
                    <ol className="list-decimal">
                      {item.list &&
                        item.list.map((listItem, listIndex) => (
                          <li key={listIndex}>
                            <Link
                              href={!Array.isArray(listItem) ? listItem : ""}
                              className="text-blue-600"
                            >
                              {Array.isArray(listItem)
                                ? listItem.join(", ")
                                : listItem}
                            </Link>
                          </li>
                        ))}
                    </ol>
                  </Typography>
                </div>
              )}
              {item.type === "space" && <span className="mb-4" />}
              {item.type === "image" && (
                <Image
                  src={`${item.img}`}
                  alt={`${item.alt}`}
                  width={320}
                  height={320}
                  className="mb-4"
                  style={{
                    borderRadius: "12px",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};
