// import Image from "next/image";
// import Aboutus from "@/app/components/Aboutus";
// import { Cta } from "@/app/components/Cta";
// import { Faq } from "@/app/components/Faq";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/NavBar";
// import ArticleList from "@/app/components/ArticleList";
// import useArticleList from "@/hooks/useArticleList";
import CategoryList from "@/components/CategoryList";
import { fetchArticles, fetchGenreMovies } from "../../../../actions/moviesData";
import { Genre, ArticleBo, Article } from "@/lib/types";
import { Key } from "react";
import ArticlesCard from "@/components/Articles/ArticlesCard";
import Link from "next/link";


const background = "../../coursel/podcast-8571329_1280.jpg"
const Resources = async() => {
  const genres = await fetchGenreMovies()
  const example = genres.slice(0,1)
  // http://watotomarketplace.com/market-place/public/get-articles
  // const res = await fetch('https://bibletalk.tv/articles.json');
  const res = await fetch('http://watotomarketplace.com/market-place/public/get-articles');
  const datas = await res.json();
 
  return (
    <>
    {/* <Navbar/> */}
    <Hero backgroundImage={background} showButton={false} children={undefined}/>
  
    
    <div className="px-[10px] lg:container lg:px-20 mx-auto bg-gray-200">
      <h2 className="font-extrabold text-2xl pt-5">RESOURCES</h2>

      <div className="flex justify-between gap-y-8">

          <h3 className="text-2xl font-extrabold pt-3">Podcasts</h3>

            <Link href="/landing-page/resources/podcasts">
              <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#193778] lg:text-[18px]">
              See More{" "}
              </p>
            </Link>

            
          </div>
      <p>We are intentional about helping you thrive. We have a variety 
        of resources we have come up with that we think can be of help to you.</p>
          <div className="flex flex-col gap-8 mt-2 pl-1">
            {example.map((genre: Genre) => (
              <CategoryList key={genre.id} title={genre.name} movies={genre.movies} />
              
            ))}
          </div>
          <div className="flex justify-between">

          <h3 className="text-2xl font-extrabold pt-3">Articles</h3>

            <Link href="/landing-page/resources/articles">
              <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#193778] lg:text-[18px]">
              See More{" "}
              
              </p>

            </Link>

            
          </div>
          
          <p>These are designed to give you real life advice and scenarios to help you deal with things at your workplace.</p>
          <div className='relative w-full pt-2 overflow-x-auto border cursor-pointer'>
            <div className='grid grid-flow-col auto-cols-max gap-2 overflow-x-scroll scrollbar-hide'>
  
            {datas.map((article: Article) => (
              // <ArticleList key={datas.slug} title={datas.title} article={datas.article} />
            <ArticlesCard key={article.slug} articles={article} />
        ))}
          </div>
          </div>
      
        <Footer />
      </div>
    </>
  );
}
function async() {
  throw new Error("Function not implemented.");
}

export default Resources

