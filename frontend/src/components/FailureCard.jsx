import React from 'react';

const FailureCard = ({ failure }) => {
  return (
    <div className="border p-4 rounded shadow bg-white max-w-md my-4">
      <h2 className="text-xl font-bold text-red-600 mb-1">🔫 {failure.title}</h2>
      <p><strong>Location:</strong> {failure.location}</p>
      <p><strong>Cause:</strong> {failure.cause}</p>
      <p className="italic mt-2 text-gray-500">"{failure.comment}"</p>
    </div>
  );
};

export default FailureCard;
