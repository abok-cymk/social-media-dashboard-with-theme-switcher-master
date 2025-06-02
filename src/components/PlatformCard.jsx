const baseImagePath = import.meta.env.BASE_URL;
const PlatformCard = ({
  platformIcon,
  username,
  total,
  tag,
  icon,
  todayTotal,
  className,
}) => {
  return (
    <div
      className={`hover:bg-cardHoverLight hover:dark:bg-cardHoverDark relative cursor-pointer flex items-center justify-center text-center flex-col gap-[1lh] bg-lightGrayishBlue dark:bg-darkDesaturatedBlue py-8 rounded-sm ${className}`}
    >
      <div className="flex items-center gap-[1ch]">
        <img src={platformIcon} alt={platformIcon} />
        <p className="text-darkGrayishBlue dark:text-desaturatedBlue text-xs font-700">
          {username}
        </p>
      </div>
      <div>
        <p className="text-darkBlueVery dark:text-white font-700 text-[3.5rem] leading-10">
          {total}
        </p>
        <span className="uppercase text-xs tracking-widest text-darkGrayishBlue font-400">
          {tag}
        </span>
      </div>
      <div className="flex items-center gap-[1ch]">
        <img src={icon} alt={icon} />
        <p
          className={`${
            icon === `${baseImagePath}icon-up.svg` ? "text-limeGreen" : "text-brightRed"
          } text-xs font-700`}
        >
          {todayTotal}
        </p>
      </div>
    </div>
  );
};

export default PlatformCard;
