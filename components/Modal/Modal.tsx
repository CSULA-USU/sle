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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as HTMLElement)
      ) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
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
          className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center "
          onClick={onClose}
        >
          <div data-ref={modalRef} className="bg-white p-4 rounded shadow-lg">
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
