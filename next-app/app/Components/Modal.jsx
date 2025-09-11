"use client";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>

      {/* Box */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg w-3/4 h-11/12 z-10 overflow-hidden">
        {children}
      </div>
      )}
    </div>
  );
}
