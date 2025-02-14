import etsy from "../assets/Etsy_logo.svg";

export default function ShopLink() {
  return (
    <div className="col-start-2 row-start-3 flex flex-col items-center">
      <a
        href=""
        rel="noreferrer noopener"
        className="border-2 rounded-md mt-4 bg-blend-darken shadow-2xl shadow-cyan-700 bg-cyan-950 hover:bg-cyan-900"
      >
        <h2 className="text-md md:text-xl text-white font-bold mb-auto p-2">
          Visit my shop on
        </h2>
        <img src={etsy} alt="Etsy" className="object-contain" />
      </a>
    </div>
  );
}
