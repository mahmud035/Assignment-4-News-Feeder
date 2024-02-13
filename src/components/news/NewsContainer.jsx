import { useContext } from 'react';
import { NewsContext } from '../../contexts/NewsContext';

import { SearchContext } from '../../contexts/SearchContext';
import NoNewsFound from '../ui/NoNewsFound';
import ImageNewsCard from './ImageNewsCard';
import NewsCard from './NewsCard';
import RelatedNewsCard from './RelatedNewsCard';
import TopNewsCard from './TopNewsCard';

const NewsContainer = () => {
  const { newsData } = useContext(NewsContext);
  const { searchTerm } = useContext(SearchContext);
  let topNews;
  let imageNews;
  let restNews;
  let relatedNews;

  const filteredNewsData =
    newsData?.length > 0
      ? newsData.filter(
          (news) => news.title && news.description && news.content
        )
      : [];

  if (filteredNewsData?.length > 0) {
    topNews = filteredNewsData?.slice(0, 1) || [];
  }

  if (
    !searchTerm &&
    filteredNewsData?.length > 1 &&
    filteredNewsData?.length <= 7
  ) {
    imageNews = filteredNewsData?.slice(1, 2) || [];
  } else if (
    searchTerm?.length > 0 &&
    filteredNewsData?.length > 2 &&
    filteredNewsData?.length <= 7
  ) {
    imageNews = filteredNewsData?.slice(2, 3) || [];
  } else if (searchTerm?.length > 0 && filteredNewsData?.length > 7) {
    imageNews = filteredNewsData?.slice(1, 2) || [];
  }

  if (!searchTerm && filteredNewsData?.length > 2) {
    restNews =
      filteredNewsData?.slice(
        2,
        filteredNewsData?.length - 5 > 2 ? -5 : undefined
      ) || [];
  } else if (
    searchTerm?.length > 0 &&
    filteredNewsData?.length > 3 &&
    filteredNewsData?.length <= 7
  ) {
    restNews = filteredNewsData?.slice(3, 8) || [];
  } else if (searchTerm?.length > 0 && filteredNewsData?.length > 7) {
    restNews = filteredNewsData?.slice(2, -5) || [];
  }

  if (!searchTerm && filteredNewsData?.length > 3) {
    relatedNews = filteredNewsData?.slice(filteredNewsData?.length - 5) || [];
  } else if (
    searchTerm?.length > 0 &&
    filteredNewsData?.length > 1 &&
    filteredNewsData?.length <= 7
  ) {
    relatedNews = filteredNewsData?.slice(1, 2) || [];
  } else if (searchTerm?.length > 0 && filteredNewsData?.length > 7) {
    relatedNews = filteredNewsData?.slice(-5) || [];
  }

  // const topNews =
  //   filteredNewsData.length > 0 ? filteredNewsData.slice(0, 1) : [];

  // const imageNews =
  //   filteredNewsData.length > 1 ? filteredNewsData.slice(1, 2) : [];

  // const restNews =
  //   filteredNewsData.length > 2
  //     ? filteredNewsData.slice(
  //         2,
  //         filteredNewsData.length - 5 > 2
  //           ? filteredNewsData.length - 5
  //           : undefined
  //       )
  //     : [];

  // const relatedNews =
  //   filteredNewsData.length > 3
  //     ? filteredNewsData.slice(filteredNewsData.length - 5)
  //     : [];
  console.log('filteredNewsData =>', filteredNewsData);
  console.log('topNews =>', topNews);
  console.log('imageNews =>', imageNews);
  console.log('restNews =>', restNews);
  console.log('relatedNews =>', relatedNews);

  if (searchTerm?.length > 0 && filteredNewsData?.length === 0) {
    return <NoNewsFound />;
  }

  return (
    <div className="container grid grid-cols-12 gap-8 mx-auto">
      {/* Left side (Main News)  */}
      <div className="grid self-start grid-cols-12 col-span-12 gap-6 xl:col-span-8">
        {/* 0 No. item will be here  */}
        {topNews?.length > 0 &&
          topNews?.map((news) => (
            <TopNewsCard key={news.urlToImage} news={news} />
          ))}

        {/* 1 No. item will be here  */}
        {imageNews?.length > 0 &&
          imageNews?.map((news) => (
            <ImageNewsCard key={news.urlToImage} news={news} />
          ))}

        {/* Rest until last five items will be here */}
        {restNews?.length > 0 &&
          restNews?.map((news) => (
            <NewsCard key={news.urlToImage} news={news} />
          ))}
      </div>

      {/* Right side  (Related News)  */}
      <div className="self-start col-span-12 xl:col-span-4">
        <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
          {/* Last five items of array will be here */}
          {relatedNews?.length > 0 &&
            relatedNews?.map((news, index) => (
              <RelatedNewsCard
                key={news.urlToImage}
                news={news}
                index={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsContainer;
