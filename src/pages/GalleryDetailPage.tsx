import { Link, useParams } from 'react-router-dom';
import { ChevronLeftIcon } from '../components/Icons';
import { GALLERIES_DATA, PHOTOS_DATA } from '../constants/index';

export const GalleryDetailPage = () => {
  const { slug } = useParams();
  const gallery = GALLERIES_DATA.find((g) => g.slug === slug);
  const photos = gallery ? PHOTOS_DATA.filter((p) => p.galleryId === gallery.id) : [];

  if (!gallery) {
    return (
      <div className="py-16 md:py-24 text-center">
        <h1 className="text-2xl font-bold">Galeria não encontrada!</h1>
        <Link to="/galeria" className="text-primary hover:underline mt-4 inline-block">
          Voltar para todas as galerias
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/galeria" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-semibold">
          <ChevronLeftIcon className="w-5 h-5" />
          Voltar para Galerias
        </Link>
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary">{gallery.title}</h1>
          <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">{gallery.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="group relative">
              <img src={photo.imageUrl} alt={photo.caption || ''} className="w-full h-full object-cover rounded-lg shadow-md" />
              {photo.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
                  {photo.caption}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};