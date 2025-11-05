import { useEffect, useState } from 'react';
// Fix: Use relative paths instead of aliases to resolve module errors.
import { TEAM_DATA } from '../constants/index';
import { TeamMember } from '../types/index';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4">
    <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-accent"
        src={member.imageUrl}
        alt={member.name}
      />
      <h3 className="text-lg font-bold text-text-primary">{member.name}</h3>
      <p className="text-secondary">{member.title}</p>
    </div>
  </div>
);

export const AboutUsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = TEAM_DATA.length;
  const maxIndex = Math.ceil(totalItems / itemsPerView) - 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };
  
  const slideOffset = -currentIndex * 100;

  return (
    <section id="about" className="bg-surface py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">Nossos Profissionais</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
            Juntos, trabalhamos para promover os direitos das crianças e adolescentes e construir uma sociedade mais justa e inclusiva.
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${slideOffset}%)` }}
            >
              {TEAM_DATA.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-white text-primary rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-white text-primary rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
            aria-label="Próximo"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};