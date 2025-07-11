import React, { useState } from 'react';

const Card = ({ 
  id, 
  backImage, 
  frontImage, 
  giftTitle, 
  giftDescription, 
  instagramUrl,
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

  const handleInstagramClick = (e) => {
    e.stopPropagation();
    if (instagramUrl) {
      window.open(instagramUrl, '_blank', 'noopener,noreferrer');
    }
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
            <div className="w-full h-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-hidden relative rounded-xl">
              {/* Background image container - only when expanded */}
              {isExpanded && (
                <div 
                  className="absolute inset-0 bg-center bg-no-repeat bg-contain"
                  style={{
                    backgroundImage: `url(${frontImage})`,
                  }}
                />
              )}
              
              {/* Card front image - only show when NOT expanded */}
              {!isExpanded && (
                <img 
                  src={frontImage} 
                  alt="Card front" 
                  className="w-full h-full object-cover rounded-xl"
                />
              )}
              
              {/* Control buttons overlay - positioned relative to card bounds */}
              {isExpanded && (
                <div className="absolute inset-0 pointer-events-none">
                  {/* Close button */}
                  <button
                    onClick={handleClose}
                    className="close-button absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-[#B4A7F5] font-bold z-10 bg-white/80 hover:bg-white transition-colors pointer-events-auto"
                  >
                    ✕
                  </button>
                  
                  {/* Instagram link - positioned relative to card bounds */}
                  {instagramUrl && (
                    <div className="absolute bottom-3 right-3 pointer-events-auto">
                      <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleInstagramClick}
                        className="flex items-center gap-1 text-xs font-medium text-[#E1306C] hover:text-[#C13584] transition-colors duration-200 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm hover:shadow-md font-['Poppins']"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <span>Mirar reel</span>
                      </a>
                    </div>
                  )}
                </div>
              )}
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