export default function Portfolio() {
  const imageDetails = {
    1: {
      url: "https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/dlgvzvh32hjsqzkgkfuv",
      alt: "Drawing of Masjid Al-Quba (a mosque)",
      shopUrl: "https://www.etsy.com/listing/1875678529/masjid-al-quba",
      title: "Masjid Al-Quba",
    },
    2: {
      url: "https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/qwjvweqrpvfq013zy4iy",
      alt: "Drawing of flowers",
      shopUrl: "https://www.etsy.com/listing/1875693641/still-life",
      title: "Still life",
    },
    3: {
      url: "https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/z7icjmqmenys5rvtiqi2",
      alt: "Drawing of Kaba in Mecca",
      shopUrl: "https://www.etsy.com/listing/1875675091/mecca",
      title: "Mecca",
    },
    4: {
      url: "https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/v0nqckiwqkv784a6mr38",
      alt: "Drawing of Mura",
      shopUrl: "https://www.etsy.com/listing/1861507550/mura",
      title: "Mura",
    },
    5: {
      url: "https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/ey6eoct2ejk6spadxr61",
      alt: "Drawing of figs",
      shopUrl: "https://www.etsy.com/listing/1875685609/at-tin",
      title: "At-Tin",
    },
    6: {
      url: "https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/yxmlw5jsgxj1nldqwv4u",
      alt: "Drawing of Arabic text",
      shopUrl:
        "https://www.etsy.com/listing/1875691535/hasbunallahu-wa-nimal-wakeel",
      title: "HasbunAllahu wa ni'mal wakeel",
    },
    7: {
      url: "https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/sey0f5ylpic4jsxizrfq",
      alt: "Drawing of flowers",
      shopUrl: "https://www.etsy.com/listing/1861489958/al-jabbar",
      title: "Al-Jabbar",
    },
    8: {
      url: "https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/sw9fnbvdzht0ws1qevzk",
      alt: "Drawing of the mosque Masjid An-Nabawi in Medina",
      shopUrl: "https://www.etsy.com/listing/1874392675/masjid-an-nabawi",
      title: "Masjid An-Nabawi",
    },
    9: {
      url: "https://res.cloudinary.com/du5var2so/image/upload/f_auto,q_auto/v1/selenart/vcrosprforwdrvnojixy",
      alt: "Drawing of some Arabic text above a pomegranate",
      shopUrl: "https://www.etsy.com/listing/1875689113/ar-rahman",
      title: "Ar-Rahman",
    },
  };

  return (
    <div className="bg-portfolio w-screen relative">
      <h1 className="text-2xl md:text-3xl text-white font-bold text-center bg-emerald-950 shadow-md shadow-cyan-950 fixed top-0 right-0 left-0">
        Portfolio
      </h1>
      <div className="flex flex-col items-center">
        {Object.keys(imageDetails).map((image) => {
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
                className="max-w-[1500px] w-[80vw] object-contain"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
