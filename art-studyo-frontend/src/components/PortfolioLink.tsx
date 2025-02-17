import { Link } from "react-router-dom";

export default function PortfolioLink() {
  return (
    <div className="col-start-1 row-start-1 border-2 rounded-md mt-4 shadow-2xl shadow-cyan-600 bg-gradient-to-r from-emerald-700 to-green-700 hover:bg-gradient-to-r hover:from-emerald-600 hover:to-green-600 size-fit p-4 self-end justify-self-center mb-3">
      <Link
        to={"/portfolio"}
        className="text-xl md:text-2xl text-white font-bold italic"
      >
        My portfolio
      </Link>
    </div>
  );
}
