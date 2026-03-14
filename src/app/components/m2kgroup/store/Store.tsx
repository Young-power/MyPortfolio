"use client";
import { useMemo, useState } from 'react'
import { ArticleType, dataArticle } from './dataArticle'
import ArticleCard from './ArticleCard'
import Image from 'next/image';
import DetailCard from './DetailCard';
import { miniTitleFont } from '@/font/font';

const Store = () => {

  const [articleSelected, setArticleSelected] = useState<ArticleType | null>(null);
  const [articlesData ] = useState<ArticleType[]>(dataArticle);
  const closeDetail = () => {
    setArticleSelected(null);
  }

  const handleClickArticle = (id: number) => {
    const article = dataArticle.find((item) => item.id === id);
    if (article) {
      setArticleSelected(article);
    }
  }


  const articles = useMemo(() => {
    return articlesData.map((article) => (
      <ArticleCard key={article.id} {...article} onclick={() => handleClickArticle(article.id)} />
    ))
  }, [articlesData])



  return (
    <section id="store" className='mt-10 lg:mt-20 '>

      {
        articleSelected &&
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50 px-3 lg:px-0" onClick={closeDetail}>
          <DetailCard product={articleSelected} close={closeDetail} />
        </div>
      }

      <h1 className={`text-center ${miniTitleFont.className} text-black mb-5 dark:text-white text-xl lg:text-3xl font-bold`}>
        M²K-Store
      </h1>

      <div className='w-full flex flex-col lg:flex-row items-center gap-6 mb-5'>
        <div className="w-full lg:w-125 mb-6 lg:mb-0 shrink-0 px-3">
          <Image
            src="/assets/m2kgroup/store.png"
            width={1200}
            height={700}
            alt="logo société"
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="px-4 text-gray-700 dark:text-gray-300 space-y-4">
          <h2 className="text-lg lg:text-2xl font-semibold text-black dark:text-white">
            La technologie à portée de main
          </h2>

          <p>
            <strong>M²K-Store</strong> vous propose une sélection d’équipements
            technologiques fiables et modernes : webcams, accessoires informatiques,
            périphériques et bien plus encore.
          </p>

          <p>
            Notre objectif est simple : offrir des produits de qualité, disponibles
            rapidement et adaptés aux besoins des particuliers comme des
            professionnels.
          </p>

          <p>
            Avec <strong>M²K-Store</strong>, profitez d’un service sérieux, de
            produits testés et d’un accompagnement pour trouver l’équipement
            idéal.
          </p>

          <p className="font-semibold text-blue-600">
            M²K-Store — L’innovation au service de votre quotidien.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-x-1 lg:px-12 px-3.5 py-7 '>
        {articles}
      </div>

    </section>
  )
}

export default Store
