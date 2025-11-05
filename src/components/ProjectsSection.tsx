import { Card } from './Card';
// Fix: Use relative paths instead of aliases to resolve module errors.
import { PROJECTS_DATA } from '../constants/index';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-surface py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">Nossos Projetos</h2>
          <p className="mt-4 text-lg text-text-secondary">Conheça as iniciativas que estamos desenvolvendo.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <Card key={index} imageUrl={project.imageUrl} title={project.title} imageAlt={`Imagem do projeto ${project.title}`}>
              <p>{project.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};