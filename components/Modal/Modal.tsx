"use client";
import React, { useEffect, useRef } from "react";
import { Typography } from "@/components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLElement | null>(null);
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.id === "outer-div") {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      modalRef.current?.focus();
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div
          id="outer-div"
          className="fixed top-0 left-0 w-full h-full  bg-gray-800 bg-opacity-50 flex items-center justify-center"
          onClick={(event: React.MouseEvent<HTMLDivElement>) =>
            handleClickOutside(event.nativeEvent)
          }
        >
          <div
            className="max-w-screen-xl max-h-[90vh] bg-white p-4 rounded shadow-lg overflow-y-scroll"
            data-ref={modalRef}
            tabIndex={0}
          >
            <button
              className="relative top-0 left-0 pb-2 text-gray-600"
              onClick={onClose}
            >
              <Typography>X</Typography>
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
