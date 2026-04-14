"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Modal, Typography } from "@/components";

interface CandidateDataProps {
  type: string;
  text?: string;
  list?: (string | string[])[];
  img?: string;
  alt?: string;
}

interface CandidateInfoProps {
  name: string;
  data: Array<CandidateDataProps>;
}

function getFirstname(fullName: string) {
  return fullName.split(" ")[0];
}

function getImageData(
  positionData: CandidateDataProps[],
): { img: string; alt: string } | null {
  const imageData = positionData.find((item) => item.type === "image");
  if (imageData && imageData.img) {
    return { img: imageData.img, alt: imageData.alt || "" };
  }
  return null;
}

export const CandidateInfo = ({ name, data }: CandidateInfoProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const imageData = getImageData(data);
  const firstName = getFirstname(name);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <button
        onClick={openModal}
        className="group relative flex flex-col overflow-hidden rounded-lg w-full h-full bg-card border-2 border-transparent transition-all duration-300 ease-out hover:border-yellow-500 hover:shadow-[0_0_24px_rgba(234,179,8,0.35)] hover:scale-[1.02] hover:-translate-y-1 focus-visible:border-yellow-500 focus-visible:shadow-[0_0_24px_rgba(234,179,8,0.35)] focus-visible:scale-[1.02] focus-visible:-translate-y-1 focus-visible:outline-none cursor-pointer"
        aria-label={`View details for ${name || "candidate"}`}
      >
        {/* Portrait Image Container */}
        <div className="relative aspect-[3/4] w-full flex-1 overflow-hidden bg-muted">
          {imageData ? (
            <Image
              src={imageData.img}
              alt={imageData.alt || `Portrait of ${name || "candidate"}`}
              fill
              quality={60}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjQyNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIi8+PC9zdmc+"
              className="object-cover transition-all duration-500 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105 group-focus-visible:grayscale-0 group-focus-visible:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-muted">
              <span className="text-muted-foreground text-sm">No image</span>
            </div>
          )}

          {/* Hover glow effect overlay */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-300 bg-gradient-to-t from-yellow-500/10 via-transparent to-transparent group-hover:opacity-100 group-focus-visible:opacity-100"
            aria-hidden="true"
          />

          {/* Animated top border accent */}
          <div
            className="absolute top-0 left-0 right-0 h-1 bg-yellow-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 group-focus-visible:scale-x-100"
            aria-hidden="true"
          />
        </div>

        {/* Name Section */}
        <div className="relative w-full px-3 py-3 bg-gradient-to-t from-gray-300 via-gray-200 to-gray-100 group-hover:from-yellow-500 group-hover:via-yellow-300 group-hover:to-yellow-200 group-focus-visible:from-yellow-500 group-focus-visible:via-yellow-300 group-focus-visible:to-yellow-200 transition-all duration-300">
          <p className="text-center font-semibold text-foreground text-sm sm:text-base tracking-wide transition-colors duration-300">
            {firstName}
          </p>
        </div>
      </button>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <div className="max-w-screen-lg mx-4 z-40">
          <div>
            <Typography variant="subheader">{name}</Typography>
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
                  className="mb-4 rounded-xl"
                />
              )}
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};
