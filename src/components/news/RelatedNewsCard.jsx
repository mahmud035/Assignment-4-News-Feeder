import { getFormattedDate } from '../../utils/date-time-utils';

const RelatedNewsCard = ({ news, index }) => {
  const { title, description, publishedAt, urlToImage } = news || {};

  return (
    <div className="col-span-12 mb-6 md:col-span-8">
      {index === 0 && (
        <img className="w-full lg:h-[270px]" src={urlToImage} alt="thumb" />
      )}
      {/* info  */}
      <div
        className={`col-span-12 md:col-span-4 ${index === 0 ? 'mt-6' : 'mt-1'}`}
      >
        <a href="#">
          <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">{title}</h3>
        </a>
        <p className="text-base text-[#292219]">
          {description?.length > 45
            ? `${description?.slice(0, 45)}...`
            : description}
        </p>
        <p className="mt-5 text-base text-[#94908C]">
          {getFormattedDate(publishedAt)}
        </p>
      </div>
    </div>
  );
};

export default RelatedNewsCard;
