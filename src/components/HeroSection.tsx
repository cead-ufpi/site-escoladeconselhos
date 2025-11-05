import React from 'react';

export const HeroSection = () => {
  return (
    <section id="home" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold text-text-primary leading-tight">
            Bem-vindo(a) à <br />
            <span className="text-primary">Escola de Conselhos Tutelares do Piauí</span>
          </h1>
          <p className="mt-6 text-lg text-text-secondary">
            A Escola é dedicada à formação continuada dos operadores do Sistema de Garantia de Direitos da Criança e do Adolescente (SGDCA) no Piauí. Nossa missão é levar formação continuada com qualidade técnica e responsabilidade ética para os(as) profissionais que atuam direta e indiretamente no Sistema de Garantia de Direitos da Criança e do Adolescente do Piauí.
          </p>
        </div>
        <div className="w-full h-64 md:h-96 bg-gray-200 rounded-lg shadow-xl overflow-hidden">
            <img src="https://picsum.photos/seed/hero/800/600" alt="Profissionais em treinamento" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};
