import { Link } from "react-router-dom";

export default function PortfolioLink() {
  return (
    <div className="col-start-1 row-start-2 border-2 rounded-3xl mt-4 shadow-xl shadow-blue-950 bg-gradient-to-r from-blue-950 to-blue-900 hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-950 size-fit p-4 self-center justify-self-center mb-3">
      <Link
        to={"/portfolio"}
        className="text-2xl md:text-4xl text-white font-bold italic"
      >
        Portfolio
      </Link>
    </div>
  );
}
