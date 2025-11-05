// Fix: Use relative paths instead of aliases to resolve module errors.
import { LIBRARY_DATA } from '../constants/index';
import { LibraryItem, LibraryItemType } from '../types/index';
import { BookIcon, PlayIcon } from './Icons';

const LibraryCard = ({ item }: { item: LibraryItem }) => {
    const isPdf = item.type === LibraryItemType.PDF;

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group">
            {isPdf ? (
                <div className="bg-secondary h-48 flex items-center justify-center">
                    <BookIcon className="w-24 h-24 text-white opacity-70" />
                </div>
            ) : (
                <div className="relative h-48">
                    <img src={item.thumbnailUrl} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <PlayIcon className="w-20 h-20 text-white" />
                    </div>
                </div>
            )}
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-text-primary mb-4 flex-grow">{item.title}</h3>
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full text-center bg-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-secondary transition-colors duration-300"
                >
                    {isPdf ? 'Baixar PDF' : 'Assistir no YouTube'}
                </a>
            </div>
        </div>
    );
};

export const LibrarySection = () => {
  return (
    <section id="gallery" className="bg-surface py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">Biblioteca Virtual</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
            Aqui você encontra uma coleção de recursos essenciais para a capacitação e atualização.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {LIBRARY_DATA.map((item, index) => (
            <LibraryCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};