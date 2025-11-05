// Fix: Use relative paths instead of aliases to resolve module errors.
import { SOCIAL_LINKS } from '../constants/index';

export const SocialsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">Siga a Escola de Conselhos Tutelares do Piauí</h2>
           <p className="mt-4 text-lg text-text-secondary">Fique por dentro de todas as novidades nas nossas redes sociais.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-surface p-8 rounded-lg shadow-md hover:shadow-xl hover:bg-primary transition-all duration-300"
            >
              <Icon className="w-16 h-16 mx-auto mb-4 text-primary group-hover:text-white transition-colors duration-300" />
              <h3 className="text-center text-2xl font-bold text-text-primary group-hover:text-white transition-colors duration-300">{name}</h3>
              <p className="text-center text-text-secondary group-hover:text-gray-200 mt-2 transition-colors duration-300">
                {name === 'YouTube' ? 'Acesse nosso canal' : 'Siga-nos'}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};