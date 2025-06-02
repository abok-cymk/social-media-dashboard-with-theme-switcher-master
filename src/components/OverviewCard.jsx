const baseImagePath = import.meta.env.BASE_URL;
const OverviewCard = ({ tag, platform, total, icon, percentage }) => {
  return (
    <div className="bg-lightGrayishBlue hover:bg-cardHoverLight hover:dark:bg-cardHoverDark cursor-pointer dark:bg-darkDesaturatedBlue flex flex-col justify-between shadow rounded-md p-6 gap-6">
      <div className="flex items-center justify-between">
        <span className="text-overviewCardHeading font-700 text-darkGrayishBlue dark:text-desaturatedBlue">
          {tag}
        </span>
        <img src={platform} alt={platform} />
      </div>
      <div className="flex items-center justify-between">
        <p className="dark:text-white text-darkBlueVery font-700 text-[2rem]">
          {total}
        </p>
        <div className="flex items-center gap-[0.5ch]">
          <img src={icon} alt={icon} />
          <p
            className={`${
              icon === `${baseImagePath}icon-up.svg` ? "text-limeGreen" : "text-brightRed"
            } text-xs font-700`}
          >
            {percentage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
