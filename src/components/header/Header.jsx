import Date from './Date';
import Logo from './Logo';
import NewsCategories from './NewsCategories';
import Search from './Search';

const Header = () => {
  return (
    <header>
      <nav className="border-b border-black py-6 md:py-8">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
          <Date />
          <Logo />
          <Search />
        </div>

        <NewsCategories />
      </nav>
    </header>
  );
};

export default Header;
