import ShopLink from "./ShopLink";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-paint flex flex-col justify-center items-center">
      <div className="w-full grid grid-cols-2 grid-rows-3">
        <div className="flex flex-col items-center col-start-1 col-end-3 row-start-2 self-center">
          <h1 className="animate-fade-in-scale text-4xl sm:text-6xl md:text-8xl text-white font-bold text-center bg-neutral-800 rounded-l-full border-2 border-neutral-800 block w-full">
            Welcome to
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-purple-800 block">
              Selenart-Studyo
            </span>
          </h1>
        </div>
        <ShopLink></ShopLink>
      </div>
    </div>
  );
}
