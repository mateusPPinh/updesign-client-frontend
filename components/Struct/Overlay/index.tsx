import React from 'react';

type OverlayProps = {
  isVisible: boolean;
  onClick: () => void;
};

const Overlay: React.FC<OverlayProps> = ({ isVisible, onClick }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 10,
        transition: 'opacity 0.5s ease-in-out',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
      onClick={onClick}
    ></div>
  );
};

export default Overlay;
