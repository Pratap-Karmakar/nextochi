import { motion } from 'framer-motion';

const MarqueeItem = ({ children }) => (
  <motion.div
    initial={{ x: '0%' }}
    animate={{ x: '-100%' }}
    transition={{
      repeat: Infinity,
      repeatType: 'loop',
      duration: 20,
      ease: 'linear',
    }}
    className="flex-shrink-0 flex items-center justify-center"
  >
    {children}
  </motion.div>
);

const Marquee = () => {
  return (
    <div className="relative h-full w-full py-6 sm:py-10 md:py-16 lg:py-20 bg-[#664343] overflow-hidden">
      <div className="border-t-2 border-b-2 border-zinc-900 flex whitespace-nowrap">
        <div className="flex animate-marquee text-[#F9EFDB]">
          <MarqueeItem>
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[12vw] xl:text-[17vw] leading-none font-extrabold uppercase py-4 md:pb-5 md:pt-10 px-4">
              We are Naiyo24
            </span>
          </MarqueeItem>
          <MarqueeItem>
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[12vw] xl:text-[17vw] leading-none font-extrabold uppercase py-4 md:pb-5 md:pt-10 px-4">
              We are Naiyo24
            </span>
          </MarqueeItem>
        </div>
        <div className="flex animate-marquee" aria-hidden="true">
          <MarqueeItem>
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[12vw] xl:text-[17vw] leading-none font-extrabold uppercase py-4 md:pb-5 md:pt-10 px-4">
              We are Naiyo24
            </span>
          </MarqueeItem>
          <MarqueeItem>
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[12vw] xl:text-[17vw] leading-none font-extrabold uppercase py-4 md:pb-5 md:pt-10 px-4">
              We are Naiyo24
            </span>
          </MarqueeItem>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
