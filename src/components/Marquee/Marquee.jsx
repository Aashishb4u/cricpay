import { assets } from "../../lib/assets";

const Marquee = () => {
  const logos = [
    assets.PT1,
    assets.PT2,
    assets.PT3,
    assets.Ether,
    assets.Bitcoin,
  ];

  return (
    <div>
      <div className="w-full overflow-hidden relative bg-gray-200">
        <div className="w-full h-[1px] bg-gray-200/20 mb-2"></div>
        <div className="flex gap-x-10 animate-marquee ">
          {[...logos, ...logos].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Logo ${index + 1}`}
              className="size-32 bg-gray-700/50 rounded-2xl px-5"
            />
          ))}
        </div>
        <div className="w-full h-[1px] bg-gray-200/20 mt-2"></div>
      </div>
    </div>
  );
};

export default Marquee;