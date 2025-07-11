import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Card from "./Card";

const CardGrid = ({ allowReplay = false }) => {
  const [activeCardId, setActiveCardId] = useState(null);
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // New pastel confetti colors
  const pastelColors = ["#C7E9F7", "#D7C8FF", "#FDFBFF", "#B4A7F5", "#BFE9FF"];

  // Cards data
  const cards = [
    {
      id: 1,
      backImage: "./card-back.svg",
      frontImage: "./card-front-1.svg",
      giftTitle: "Delta Eco Hotel",
      giftDescription:
        "Spa completo + traslado en lancha + acceso a humedales naturales",
    },
    {
      id: 2,
      backImage: "./card-back.svg",
      frontImage: "./card-front-2.svg",
      giftTitle: "Howard Johnson Escobar",
      giftDescription: "Spa + almuerzo para 2 personas",
    },
    {
      id: 3,
      backImage: "./card-back.svg",
      frontImage: "./card-front-3.svg",
      giftTitle: "Eforea - Hilton Pilar",
      giftDescription: "Experiencia de spa de lujo para 2 personas",
    },
    {
      id: 4,
      backImage: "./card-back.svg",
      frontImage: "./card-front-4.svg",
      giftTitle: "Carta Vacía",
      giftDescription:
        "Esta es una carta vacía solo para ver si la sacaste a la primera, sigue intentando",
    },
  ];

  // Handle window resize for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (cardId) => {
    if (activeCardId === null) {
      // Flip the card
      setActiveCardId(cardId);

      // Wait for flip animation to complete, then expand
      setTimeout(() => {
        setExpandedCardId(cardId);
        setShowConfetti(true);
      }, 300);
    }
  };

  const handleCardClose = () => {
    // Close expanded card
    setExpandedCardId(null);
    setShowConfetti(false);

    // Reset active card if replay is allowed
    if (allowReplay) {
      setActiveCardId(null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 w-full">
      {/* Confetti effect with new pastel colors */}
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          numberOfPieces={200}
          recycle={false}
          colors={pastelColors}
          gravity={0.3}
          initialVelocityY={20}
        />
      )}

      {/* Cards grid */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            backImage={card.backImage}
            frontImage={card.frontImage}
            giftTitle={card.giftTitle}
            giftDescription={card.giftDescription}
            onCardClick={handleCardClick}
            onClose={handleCardClose}
            isFlipped={activeCardId === card.id}
            isExpanded={expandedCardId === card.id}
            isDisabled={activeCardId !== null && activeCardId !== card.id}
          />
        ))}
      </div>

      {/* Instructions */}
      {activeCardId === null && (
        <div className="text-center mt-8 animate-pulse">
          <p className="text-[#4A4A6A] text-lg font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] font-['Poppins']">
            ✨ Haz clic en una carta para revelar tu regalo sorpresa ✨
          </p>
        </div>
      )}

      {/* Celebration message when card is expanded */}
      {expandedCardId && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 border-2 border-[#B4A7F5] shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <p className="text-[#553C8B] font-extrabold text-lg font-['Poppins']">
              🎉 ¡Felicidades! 🎉
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardGrid;
