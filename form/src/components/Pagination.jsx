import React from "react";

const pagination = ({ currnetpage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <button
        disabled={currnetpage === 1}
        onClick={() => onPageChange(currnetpage - 1)}
        className="px-2 py-1 border rounded disabled:opacity-50"
      >
        previous
      </button>
      <span>
        page{currnetpage} of {totalPages}
      </span>
      <button
        disabled={currnetpage === totalPages}
        onClick={() => onPageChange(currnetpage + 1)}
        className="px-3 py border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default pagination;
