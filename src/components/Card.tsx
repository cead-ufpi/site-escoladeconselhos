import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  children: React.ReactNode;
  imageAlt?: string;
}

export const Card: React.FC<CardProps> = ({ imageUrl, title, children, imageAlt = 'Card Image' }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img className="w-full h-56 object-cover" src={imageUrl} alt={imageAlt} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
        <div className="text-text-secondary">{children}</div>
      </div>
    </div>
  );
};
