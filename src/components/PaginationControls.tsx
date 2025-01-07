import React from "react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
}) => {
  return (
    <div className="flex justify-center mt-5 mb-5 gap-5">
      <button
        onClick={onPrevPage}
        disabled={currentPage <= 1}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${
          currentPage <= 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Previous Page
      </button>
      <span className="text-lg font-medium">{`Page ${currentPage || 0} of ${totalPages || 0}`}</span>
      <button
        onClick={onNextPage}
        disabled={currentPage >= totalPages}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${
          currentPage >= totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Next Page
      </button>
    </div>
  );
};

export default PaginationControls;