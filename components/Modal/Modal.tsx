"use client";
import React, { useEffect, useRef } from "react";
import { RiCloseCircleFill } from "react-icons/ri";

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
      document.body.classList.add("overflow-y-hidden");
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      modalRef.current?.focus();
    }

    return () => {
      document.body.classList.remove("overflow-y-hidden");
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div
          id="outer-div"
          className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-white flex items-center justify-center z-10"
          onClick={(event: React.MouseEvent<HTMLDivElement>) =>
            handleClickOutside(event.nativeEvent)
          }
          role="presentation"
        >
          <div
            className="max-w-screen-xl max-h-[90vh] p-4 rounded shadow-lg overflow-y-scroll bg-white"
            data-ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="relative top-0 left-0 text-gray-600 mx-3 pt-3 hover:opacity-70"
              onClick={onClose}
              aria-label="Close modal"
            >
              <RiCloseCircleFill size={28} color="red" />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
