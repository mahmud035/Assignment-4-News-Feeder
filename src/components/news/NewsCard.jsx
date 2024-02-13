import { getFormattedDate } from '../../utils/date-time-utils';

const NewsCard = ({ news }) => {
  const { title, description, publishedAt } = news || {};

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4">
      {/* info  */}
      <div className="col-span-12 md:col-span-4">
        <a href="#">
          <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">{title}</h3>
        </a>
        <p className="text-base text-[#292219]">
          {description?.length > 80
            ? `${description?.slice(0, 80)}...`
            : description}
        </p>
        <p className="mt-5 text-base text-[#94908C]">
          {getFormattedDate(publishedAt)}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
