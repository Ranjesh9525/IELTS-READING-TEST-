// src/components/ResultModal.js
import React from 'react';

const ResultModal = ({ isOpen, onClose, score, total }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }}>
      <div style={{
        padding: '20px', background: 'white', borderRadius: '5px', width: '300px',
        display: 'flex', flexDirection: 'column', alignItems: 'center'
      }}>
        <h2>Congratulations!</h2>
        <p>Your score is {score} out of {total}.</p>
        <button onClick={onClose} style={{ marginTop: '20px' }}>Close</button>
      </div>
    </div>
  );
};

export default ResultModal;
