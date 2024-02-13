import { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/header/Header';
import NewsContainer from '../components/news/NewsContainer';
import Loading from '../components/ui/Loading';
import { NewsContext } from '../contexts/NewsContext';

const HomePage = () => {
  const { isLoading } = useContext(NewsContext);

  return (
    <>
      <Header />

      {isLoading ? (
        <Loading />
      ) : (
        <main className="py-10 transition-all lg:py-14 ">
          <NewsContainer />
        </main>
      )}
      <Footer />
    </>
  );
};

export default HomePage;
