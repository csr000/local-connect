import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 md:gap-28 lg:py-20 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-40 text-center lg:bold-52 lg:text-left ">Uncover Local Favorites Instantly</h1>
        <p className="regular-16 mt-6 text-gray-500 xl:max-w-[520px]">
          LocalConnect is an AI-powered app designed to help users discover local businesses that meet their needs and
          preferences. The app leverages AI to provide personalized suggestions, real-time promotions, user reviews, and
          more.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image src="/star.svg" key={index} alt="star" width={24} height={24} />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-accent">
            277k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_primary" />
          <Button type="button" title="How we work?" icon="/play.svg" variant="btn_white_text" />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="hero-map" style={{transform: 'scale(-1, -1)'}} />

        <Image src="/3d-map.png" alt="camp" width={300} height={300} className="w-full z-10" />
      </div>
    </section>
  );
};

export default Hero;
