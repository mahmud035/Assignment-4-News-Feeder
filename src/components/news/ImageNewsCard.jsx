import { getFormattedDate } from '../../utils/date-time-utils';

const ImageNewsCard = ({ news }) => {
  const { title, description, publishedAt, urlToImage } = news || {};

  return (
    <div className="grid grid-cols-12 col-span-12 gap-4 lg:col-span-8">
      {/* info  */}
      <div className="col-span-12 md:col-span-6">
        <a href="">
          <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">{title}</h3>
        </a>
        <p className="text-base text-[#292219]">
          {description?.length > 80
            ? `${description?.slice(0, 80)}...`
            : description}
        </p>
        <p className="mt-5 text-base text-[#5C5955]">
          {getFormattedDate(publishedAt)}
        </p>
      </div>
      {/* thumb  */}
      <div className="col-span-12 md:col-span-6">
        <img className="w-full lg:h-44" src={urlToImage} alt="thumb" />
      </div>
    </div>
  );
};

export default ImageNewsCard;
