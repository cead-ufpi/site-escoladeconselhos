import { Link, useParams } from 'react-router-dom';
import { ChevronLeftIcon } from '../components/Icons';
import { NEWS_DATA } from '../constants/index';

export const NewsDetailPage = () => {
  const { slug } = useParams();
  const article = NEWS_DATA.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="py-16 md:py-24 text-center">
        <h1 className="text-2xl font-bold">Notícia não encontrada!</h1>
        <Link to="/noticias" className="text-primary hover:underline mt-4 inline-block">
          Voltar para todas as notícias
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link to="/noticias" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-semibold">
          <ChevronLeftIcon className="w-5 h-5" />
          Voltar para Notícias
        </Link>
        <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary">{article.title}</h1>
        <p className="text-text-secondary mt-2 mb-6">{article.date}</p>
        <img src={article.imageUrl} alt={article.title} className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg mb-8" />
        <div className="prose lg:prose-xl max-w-none text-text-secondary">
          <p>{article.content}</p>
        </div>
      </div>
    </div>
  );
};