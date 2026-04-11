import text from "../../constrants/text";
import images from "../../constrants/images";
import { Users, MapPin, Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="container relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8pb-10 sm:pb-14 lg:pb-20 ">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="flex-1 w-full text-center lg:text-left">
          <p className="bg-[#EDF6FE] text-[#4CA7FB] font-bold text-xs sm:text-sm px-3 py-2.5 rounded-full inline-flex items-center gap-2 mb-4 sm:mb-5">
            <Users size={14} color="#4CA7FB" />
            {text.banner.newFeature}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-[#4CA7FB] font-bold mb-4 sm:mb-5 leading-[1.15] tracking-tight">
            Find Players <br />
            <span className="text-[#0B0F19]">In Denmark & Join</span> Matches
            Easily
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-5 sm:mb-7 max-w-sm sm:max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            {text.hero.description}
          </p>

          <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 sm:mb-5">
            {text.hero.status}
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <img
              className="h-9 sm:h-11 w-auto object-contain"
              src={images.appStoreImg}
              alt="app store"
            />
            <img
              className="h-9 sm:h-11 w-auto object-contain"
              src={images.googlePlayImg}
              alt="google play"
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5 text-xs sm:text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} color="#4CA7FB" />
              {text.hero.location}
            </span>
            <span className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="ml-1 font-bold text-gray-800 text-xs sm:text-sm">
                {text.hero.rating}
              </span>
            </span>
          </div>
        </div>

        <div
          className="flex-1 w-full flex items-center justify-center
                        h-[260px] sm:h-[400px] md:h-[480px] lg:h-[600px] xl:h-[750px]"
        >
          <img
            className="w-full h-full object-contain"
            src={images.heroImg}
            alt="App preview"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
