import text from "../../constrants/text";
import icons from "../../constrants/icons";
import images from "../../constrants/images";

const Hero = () => {
  return (
    <div className="px-90 flex gap-5">
      <div className="w-[50%] h-[91vh] py-20 ">
        <p className="bg-[#EDF6FE] text-[#4CA7FB] font-bold text-sm p-3 rounded-full inline-flex items-center gap-2 mb-5">
          <img className="w-5" src={icons.people} alt="people icon" />
          {text.banner.newFeature}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#4CA7FB] font-bold text-primary mb-4 sm:mb-6 leading-[1.1] tracking-tigh">
          Find Players <br />{" "}
          <span className="text-[#0B0F19] ">In Denmark & Join</span> Matches
          Easily
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
          {text.hero.description}
        </p>
        <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest">
          {text.hero.status}
        </p>
        <div className="flex gap-2 mt-5">
          <img
            className="h-10 sm:h-12"
            src={images.appStoreImg}
            alt="app store"
          />
          <img
            className="h-10 sm:h-12"
            src={images.googlePlayImg}
            alt="google play"
          />
        </div>
        <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-gray-500"></div>
      </div>
      <div className="bg-gray-800 w-[50%] h-[91vh]"></div>
    </div>
  );
};

export default Hero;
