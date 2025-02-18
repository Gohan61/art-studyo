import { Link } from "react-router-dom";

export default function Portfolio() {
  const imageDetails = {
    1: {
      url: "https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/dlgvzvh32hjsqzkgkfuv",
      alt: "Drawing of Masjid Al-Quba (a mosque)",
      shopUrl: "https://www.etsy.com/listing/1875678529/masjid-al-quba",
      title: "Masjid Al-Quba",
      available: true,
    },
    2: {
      url: "https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/qwjvweqrpvfq013zy4iy",
      alt: "Drawing of flowers",
      shopUrl: "https://www.etsy.com/listing/1875693641/still-life",
      title: "Still life",
      available: true,
    },
    3: {
      url: "https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/z7icjmqmenys5rvtiqi2",
      alt: "Drawing of Kaba in Mecca",
      shopUrl: "https://www.etsy.com/listing/1875675091/mecca",
      title: "Mecca",
      available: true,
    },
    4: {
      url: "https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/v0nqckiwqkv784a6mr38",
      alt: "Drawing of Mura",
      shopUrl: "https://www.etsy.com/listing/1861507550/mura",
      title: "Mura",
      available: true,
    },
    5: {
      url: "https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/ey6eoct2ejk6spadxr61",
      alt: "Drawing of figs",
      shopUrl: "https://www.etsy.com/listing/1875685609/at-tin",
      title: "At-Tin",
      available: true,
    },
    6: {
      url: "https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/yxmlw5jsgxj1nldqwv4u",
      alt: "Drawing of Arabic text",
      shopUrl:
        "https://www.etsy.com/listing/1875691535/hasbunallahu-wa-nimal-wakeel",
      title: "HasbunAllahu wa ni'mal wakeel",
      available: true,
    },
    7: {
      url: "https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/sey0f5ylpic4jsxizrfq",
      alt: "Drawing of flowers",
      shopUrl: "https://www.etsy.com/listing/1861489958/al-jabbar",
      title: "Al-Jabbar",
      available: true,
    },
    8: {
      url: "https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/sw9fnbvdzht0ws1qevzk",
      alt: "Drawing of the mosque Masjid An-Nabawi in Medina",
      shopUrl: "https://www.etsy.com/listing/1874392675/masjid-an-nabawi",
      title: "Masjid An-Nabawi",
      available: true,
    },
    9: {
      url: "https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/vcrosprforwdrvnojixy",
      alt: "Drawing of some Arabic text above a pomegranate",
      shopUrl: "https://www.etsy.com/listing/1875689113/ar-rahman",
      title: "Ar-Rahman",
      available: true,
    },
    10: {
      url: "https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/xnyrgv09ca4hau23qksy",
      alt: "Drawing of a building with oranges in front",
      shopUrl: "",
      title: "*Not available*",
      available: false,
    },
    11: {
      url: "https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/h9csxn0gjkyeiflscsss",
      alt: "Drawing of an old village with people and a donkey",
      shopUrl: "",
      title: "*Not available*",
      available: false,
    },
    12: {
      url: "https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/jrco5l6doqajo55ksu4o",
      alt: "Drawing of some flowers and Arabic text",
      shopUrl: "",
      title: "*Not available*",
      available: false,
    },
    13: {
      url: "https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/h3xcw8tgsrtnixurs65g",
      alt: "Drawing of a white mosque",
      shopUrl: "",
      title: "*Not available*",
      available: false,
    },
  };

  return (
    <div className="bg-portfolio w-screen relative ">
      <nav className="fixed top-0 right-0 left-0 bg-emerald-950 shadow-md shadow-cyan-950 flex">
        <Link
          to={"/"}
          className="text-2xl md:text-3xl text-white font-bold ml-2 flex-[1]"
        >
          Home
        </Link>
        <h1 className="text-2xl md:text-3xl text-white font-bold">Portfolio</h1>
        <div className="flex-[1]"></div>
      </nav>
      <div className="flex flex-col items-center">
        {Object.keys(imageDetails).map((image) => {
          if (imageDetails[image].available) {
            return (
              <a
                href={imageDetails[image].shopUrl}
                rel="noopener noreferrer"
                target="_blank"
                className="text-center font-bold text-white text-lg sm:text-2xl mt-10"
              >
                {imageDetails[image].title}
                <img
                  src={imageDetails[image].url}
                  alt={imageDetails[image].alt}
                  className="max-w-[1000px] w-[80vw] object-contain"
                  loading="lazy"
                />
              </a>
            );
          } else {
            return (
              <div className="text-center font-bold text-white text-lg sm:text-2xl mt-10">
                {imageDetails[image].title}
                <img
                  src={imageDetails[image].url}
                  alt={imageDetails[image].alt}
                  className="max-w-[1000px] w-[80vw] object-contain"
                  loading="lazy"
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
