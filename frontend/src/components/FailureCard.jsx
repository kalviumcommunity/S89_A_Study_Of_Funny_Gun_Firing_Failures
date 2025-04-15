import React from 'react';

const FailuresCard = ({ gunFiring }) => {
  return (
    <div>
        <h1>Title: {gunFiring.title}</h1>
        <p>Comment: {gunFiring.comment}</p>
    </div>
  );
};

export default FailuresCard;