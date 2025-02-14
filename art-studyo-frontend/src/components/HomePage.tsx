export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-paint flex justify-center items-center">
      <h1 className="animate-fade-in-scale text-4xl sm:text-6xl md:text-8xl text-white font-bold text-center bg-neutral-800 rounded-l-full border-2 border-neutral-800 block w-full">
        Welcome to
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-purple-800 block">
          Selenart-Studyo
        </span>
      </h1>
    </div>
  );
}
