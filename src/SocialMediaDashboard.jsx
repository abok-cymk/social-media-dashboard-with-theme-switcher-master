import { useEffect, useState } from "react";
import TopBgPattern from "./components/TopBgPattern";
import PlatformCard from "./components/PlatformCard";
import OverviewCard from "./components/OverviewCard";
import { PiToggleLeftFill } from "react-icons/pi";
import { LiaToggleOnSolid } from "react-icons/lia";
const baseImagePath = import.meta.env.BASE_URL;
const facebook = {
  icon: `${baseImagePath}icon-facebook.svg`,
  username: "@nathanf",
  total: 1987,
  tag: "followers",
  currentFollowsIcon: `${baseImagePath}icon-up.svg`,
  today: "12 Today",
};

const twitter = {
  icon: `${baseImagePath}icon-twitter.svg`,
  username: "@nathanf",
  total: 1044,
  tag: "followers",
  currentFollowsIcon: `${baseImagePath}icon-up.svg`,
  today: "99 Today",
};

const instagram = {
  icon: `${baseImagePath}icon-instagram.svg`,
  username: "@realnathanf",
  total: "11k",
  tag: "followers",
  currentFollowsIcon: `${baseImagePath}icon-up.svg`,
  today: "1099 Today",
};

const youtube = {
  icon: `${baseImagePath}icon-youtube.svg`,
  username: "Nathan F.",
  total: 8239,
  tag: "subscribers",
  currentFollowsIcon: `${baseImagePath}icon-down.svg`,
  today: "144 Today",
};

const SocialMediaDashboard = () => {
  const [toggleTheme, setToggleTheme] = useState(() => {
    // Check localStorage first, then fallback to system or default
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    if (toggleTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [toggleTheme]);
  return (
    <section className="relative">
      <TopBgPattern />
      <div className="absolute inset-0 max-w-6xl mx-auto py-10 px-4">
        <div className="flex md:flex-row flex-col items-center justify-between md:divide-y-0 divide-y-[1.5px] divide-gray-300 dark:divide-desaturatedBlue">
          <div className="max-sm:pb-6">
            <h2 className="capitalize text-3xl font-700 text-darkBlueVery dark:text-white">
              social media dashboard
            </h2>
            <span className="text-xs font-700 text-darkGrayishBlue dark:text-desaturatedBlue">
              Total Followers: 23,004
            </span>
          </div>
          <div className="flex items-center max-sm:justify-between gap-[0.5lh] max-sm:w-full px-3 max-sm:pt-6">
            {toggleTheme ? (
              <span className="text-desaturatedBlue font-700 text-overviewCardHeading">
                Light mode
              </span>
            ) : (
              <span className="text-toggleLight font-700 text-overviewCardHeading">
                Dark Mode
              </span>
            )}
            <button
              onClick={() => setToggleTheme((prev) => !prev)}
              id="toggleDark"
              aria-label="Toggle theme"
            >
              {toggleTheme ? (
                <PiToggleLeftFill size={32} className="text-gradient" />
              ) : (
                <LiaToggleOnSolid size={32} className="text-toggleLight" />
              )}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <PlatformCard
            platformIcon={facebook.icon}
            username={facebook.username}
            total={facebook.total}
            tag={facebook.tag}
            icon={facebook.currentFollowsIcon}
            todayTotal={facebook.today}
            className="border-t-4 border-facebook"
          />

          <PlatformCard
            platformIcon={twitter.icon}
            username={twitter.username}
            total={twitter.total}
            tag={twitter.tag}
            icon={twitter.currentFollowsIcon}
            todayTotal={twitter.today}
            className="border-t-4 border-twitter"
          />

          <PlatformCard
            platformIcon={instagram.icon}
            username={instagram.username}
            total={instagram.total}
            tag={instagram.tag}
            icon={instagram.currentFollowsIcon}
            todayTotal={instagram.today}
            className="instagram border-t-4 border-transparent"
          />

          <PlatformCard
            platformIcon={youtube.icon}
            username={youtube.username}
            total={youtube.total}
            tag={youtube.tag}
            icon={youtube.currentFollowsIcon}
            todayTotal={youtube.today}
            className="border-t-4 border-youtube"
          />
        </div>
        <div className="mt-8 pb-8">
          <h3 className="dark:text-white text-darkGrayishBlue font-700 text-2xl">
            Overview - Today
          </h3>
          <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 gap-8">
            <OverviewCard
              tag="Page Views"
              platform={facebook.icon}
              total="87"
              icon={facebook.currentFollowsIcon}
              percentage="3%"
            />

            <OverviewCard
              tag="Likes"
              platform={facebook.icon}
              total="52"
              icon={`${baseImagePath}icon-down.svg`}
              percentage="2%"
            />

            <OverviewCard
              tag="Likes"
              platform={instagram.icon}
              total="5462"
              icon={`${baseImagePath}icon-up.svg`}
              percentage="2257%"
            />

            <OverviewCard
              tag="Profile Views"
              platform={instagram.icon}
              total="52k"
              icon={`${baseImagePath}icon-up.svg`}
              percentage="1375%"
            />

            <OverviewCard
              tag="Retweets"
              platform={twitter.icon}
              total="117"
              icon={`${baseImagePath}icon-up.svg`}
              percentage="303%"
            />

            <OverviewCard
              tag="Likes"
              platform={twitter.icon}
              total="507"
              icon={`${baseImagePath}icon-up.svg`}
              percentage="553%"
            />

            <OverviewCard
              tag="Likes"
              platform={youtube.icon}
              total="107"
              icon={`${baseImagePath}icon-down.svg`}
              percentage="19%"
            />
            <OverviewCard
              tag="Total Views"
              platform={youtube.icon}
              total="1407"
              icon={`${baseImagePath}icon-down.svg`}
              percentage="12%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaDashboard;
