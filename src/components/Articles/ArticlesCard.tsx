
// import { Article } from '../types';
import { Article } from '@/lib/types';

interface ArticlesCardProps {
  articles: Article;
}

const ArticlesCard: React.FC<ArticlesCardProps> = ({ articles }) => {
  return (
    <div className="relative h-35 rounded-xl min-w-48 sm:h-32 sm:min-w-60 md:h-36 md:min-w-72 cursor-pointer hover:outline-white">

    {/* <div className="relative p-4 h-35 w-[330px]"> */}
      <img
        src={articles.image}
        className="object-cover w-full h-[20vh] rounded-lg"
        alt={articles.title}
      />
      <h2 className="text-black">{articles.title}</h2>
      {/* <p className="text-blue-700 w-10">{articles.excerpt}</p> */}
      <div className="absolute inset-0 rounded-lg border-4 border-transparent hover:border-white"></div>
    </div>
  );
};

export default ArticlesCard;

