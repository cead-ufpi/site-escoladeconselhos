import { Link } from 'react-router-dom';
import { GALLERIES_DATA } from '../constants/index';
import { Card } from '../components/Card';

export const GalleryListPage = () => {
  return (
    <div className="bg-surface py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary">Galeria de Fotos</h1>
          <p className="mt-4 text-lg text-text-secondary">Navegue por nossos álbuns e veja os registros de nossos eventos e atividades.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERIES_DATA.map((gallery) => (
            <Link key={gallery.id} to={`/galeria/${gallery.slug}`}>
              <Card imageUrl={gallery.coverImageUrl} title={gallery.title} imageAlt={`Capa da galeria ${gallery.title}`}>
                <p>{gallery.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};