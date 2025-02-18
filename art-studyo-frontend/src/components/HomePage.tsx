import PortfolioLink from "./PortfolioLink";
import ShopLink from "./ShopLink";
import paletteImage from "../assets/paint-palette-artist-svgrepo-com.svg";
import brushImage from "../assets/paintbrush-svgrepo-com.svg";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-paint flex flex-col justify-start items-center">
      <div className="w-full grid grid-cols-2 grid-rows-3 z-10">
        <PortfolioLink></PortfolioLink>
        <div className="flex flex-col items-center col-start-1 col-end-3 row-start-1 self-center bg-neutral-800 rounded-l-full border-2 border-neutral-800">
          <h1 className="animate-fade-in-scale text-4xl sm:text-6xl md:text-8xl text-white font-bold text-center block w-full">
            Welcome to
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-purple-800 block">
              Selenart-Studyo
            </span>
          </h1>
        </div>
        <ShopLink></ShopLink>
      </div>
      <img
        src={paletteImage}
        alt=""
        className="fixed z-0 w-3xs sm:w-md top-[45%] sm:top-[40%] md:top-[35%] left-0"
      />
      <img
        src="https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/be8a02daljyti2nbiour"
        alt=""
        className="contain w-2xs sm:w-lg rounded-sm mt-auto ml-auto z-10"
        loading="lazy"
      />
      <img
        src={brushImage}
        alt=""
        className="fixed z-0 w-sm sm:w-md md:w-lg top-0 right-0"
      />
    </div>
  );
}
