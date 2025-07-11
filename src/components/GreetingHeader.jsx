import React from 'react';

const GreetingHeader = () => {
  return (
    <div className="text-center py-8 px-4 relative">
      {/* Decorative elements */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#C7E9F7] via-[#B4A7F5] to-[#D7C8FF] rounded-full opacity-60"></div>
      
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#553C8B] mb-4 drop-shadow-[0_1px_3px_rgba(255,255,255,0.8)] font-['Poppins'] tracking-wide">
          ¡ Feliz cumpleaños <br /> Grace  y Raul  !
        </h1>
        
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 bg-[#C7E9F7] rounded-full flex items-center justify-center">
            <span className="text-[#553C8B] text-2xl">♋</span>
          </div>
          <div className="w-8 h-8 bg-[#D7C8FF] rounded-full flex items-center justify-center">
            <span className="text-[#553C8B] text-2xl">➕</span>
          </div>
          <div className="w-8 h-8 bg-[#B4A7F5] rounded-full flex items-center justify-center">
            <span className="text-white text-2xl">♌️</span>
          </div>

        </div>
        
        <p className="text-xl md:text-2xl text-[#4A4A6A] font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] font-['Poppins'] max-w-2xl mx-auto leading-relaxed">
          Elige una carta para descubrir tu regalo sorpresa
          <br />
        <span className="text-2xl">👀</span> Ojo que hay una carta en blanco
        </p>
        
        <div className="mt-6 flex justify-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 border border-[#B4A7F5]/30">
            <p className="text-[#4A4A6A] text-sm font-medium font-['Poppins']">
              Hecho con amor de parte de Pame y Jabid 💕
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#BFE9FF] via-[#D7C8FF] to-[#C7E9F7] rounded-full opacity-60"></div>
    </div>
  );
};

export default GreetingHeader; 