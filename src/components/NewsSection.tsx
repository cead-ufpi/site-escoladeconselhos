import { Link } from 'react-router-dom';
import { Card } from './Card';
// Fix: Use relative paths instead of aliases to resolve module errors.
import { NEWS_DATA } from '../constants/index';

export const NewsSection = () => {
  return (
    <section id="news" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">Confira nossas últimas notícias</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_DATA.slice(0, 3).map((article) => (
            <Card key={article.id} imageUrl={article.imageUrl} title={article.title} imageAlt={`Imagem da notícia ${article.title}`}>
              <p className="text-sm text-gray-500 mb-2">{article.date}</p>
              <p>{article.excerpt}</p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/noticias"
            className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-secondary transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Ver todas as notícias
          </Link>
        </div>
      </div>
    </section>
  );
};