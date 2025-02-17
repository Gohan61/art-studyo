import etsyShopImage from "../assets/Screenshot from 2025-02-17 16-00-44.png";

export default function ShopLink() {
  return (
    <div className="col-start-2 row-start-3 flex flex-col place-self-center border-2 rounded-3xl shadow-xl shadow-blue-950 bg-gradient-to-r from-blue-950 to-blue-900 hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-950 w-fit h-fit p-3 mb-2 sm:mb-4">
      <a
        href="https://www.etsy.com/shop/Selenartstudyo"
        rel="noreferrer noopener"
        className=""
      >
        <h2 className="text-lg md:text-2xl text-white font-bold">
          My Etsy Shop
        </h2>
        <img src={etsyShopImage} alt="Etsy" className="object-contain w-2xs" />
      </a>
    </div>
  );
}
