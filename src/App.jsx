import CategoryProvider from './contexts/CategoryContext';
import NewsProvider from './contexts/NewsContext';
import SearchProvider from './contexts/SearchContext';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <SearchProvider>
      <CategoryProvider>
        <NewsProvider>
          <HomePage />
        </NewsProvider>
      </CategoryProvider>
    </SearchProvider>
  );
};

export default App;
