import { Link } from 'react-router-dom';
import { Card } from '../components/Card';
import { NEWS_DATA } from '../constants/index';

export const NewsListPage = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary">Notícias</h1>
          <p className="mt-4 text-lg text-text-secondary">Mantenha-se informado com nossas últimas publicações.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_DATA.map((article) => (
            <Link key={article.id} to={`/noticias/${article.slug}`}>
              <Card imageUrl={article.imageUrl} title={article.title} imageAlt={`Imagem para a notícia ${article.title}`}>
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <p>{article.excerpt}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};