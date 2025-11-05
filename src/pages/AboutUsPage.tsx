import { TEAM_DATA } from '../constants/index';

export const AboutUsPage = () => {
  return (
    <div className="bg-surface py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary">Sobre a Equipe</h1>
          <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
            Conheça os profissionais dedicados que fazem a Escola de Conselhos Tutelares do Piauí acontecer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_DATA.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
              <img
                className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-primary"
                src={member.imageUrl}
                alt={`Foto de ${member.name}`}
              />
              <h2 className="text-xl font-bold text-text-primary">{member.name}</h2>
              <h3 className="text-secondary font-semibold mb-4">{member.title}</h3>
              <p className="text-text-secondary text-left flex-grow">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};