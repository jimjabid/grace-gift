import React, { useState } from 'react';

const Card = ({ 
  id, 
  backImage, 
  frontImage, 
  giftTitle, 
  giftDescription, 
  onCardClick, 
  onClose,
  isFlipped, 
  isExpanded, 
  isDisabled 
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClick = () => {
    if (!isDisabled && !isFlipped) {
      onCardClick(id);
    }
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsClosing(true);
    
    // Wait for animation to complete before calling onClose
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 600);
  };

  return (
    <>
      <div 
        className={`
          card-flip-container 
          ${isExpanded ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-72 h-80 md:w-80 md:h-96' : ''} 
          ${isDisabled && !isFlipped ? 'opacity-30 pointer-events-none' : 'cursor-pointer'}
          ${!isExpanded ? 'w-32 h-48 md:w-40 md:h-60' : ''}
          ${!isFlipped && !isDisabled ? 'card-hover' : ''}
        `}
        onClick={handleClick}
      >
        <div className={`card-flip w-full h-full ${isFlipped ? 'flipped' : ''} ${isClosing ? 'closing' : ''}`}>
          {/* Card Back */}
          <div className="card-face card-back">
            <div className="w-full h-full bg-[#BFE9FF] rounded-xl border-4 border-[#B4A7F5] shadow-[0_4px_20px_rgba(0,0,0,0.1)] p-1">
              <img 
                src={backImage} 
                alt="Card back" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          
          {/* Card Front */}
          <div className="card-face card-front">
            <div 
              className="w-full h-full rounded-xl border-4 border-[#B4A7F5] shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-hidden relative flex flex-col"
              style={isExpanded ? {
                backgroundImage: `url(${frontImage})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              } : {}}
            >
              {/* Close button - only show when expanded */}
              {isExpanded && (
                <button
                  onClick={handleClose}
                  className="close-button absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-[#B4A7F5] font-bold z-10 bg-white/80 hover:bg-white transition-colors"
                >
                  ✕
                </button>
              )}
              
              {/* Card front image - only show when NOT expanded */}
              {!isExpanded && (
                <img 
                  src={frontImage} 
                  alt="Card front" 
                  className="w-full h-3/4 object-cover"
                />
              )}
              
              {/* Card placeholder when not expanded */}
              {!isExpanded && (
                <div className="w-24 h-24 mx-auto my-8 rounded-full bg-[#EFEAFE]/60 flex items-center justify-center">
                  <span className="text-[#B4A7F5] text-2xl">🎁</span>
                </div>
              )}
              
              {/* No HTML text overlay when expanded - image contains everything */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Backdrop blur overlay for expanded card */}
      {isExpanded && (
        <div className="fixed inset-0 bg-[#4A4A6A]/30 backdrop-blur-md z-45" />
      )}
    </>
  );
};

export default Card; 