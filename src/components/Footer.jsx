import { motion } from "framer-motion";

const Footer = () => {

  return (
    <motion.footer
      className="text-[#FEFAE0] pt-44 w-full min-h-screen bg-zinc-900 py-28 px-4 sm:px-6 lg:px-8 flex flex-col"
    >
      <div className="max-w-7xl mx-auto flex-grow flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div className="space-y-6">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold">About.</h2>
            <p className="max-w-md text-lg">
              NAIYO24 PRIVATE LIMITED specializes in crafting innovative web and
              mobile solutions tailored to your business. We're committed to
              turning your digital ideas into reality with cutting-edge
              technology and expert services.
            </p>
          </div>
          <div className="mt-16 lg:mt-0 font-semibold text-2xl">Naiyo24.</div>
        </div>
        <div className="lg:w-1/2 space-y-12">
          <h3 className="text-4xl sm:text-5xl font-semibold">Quick Links.</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold">Social.</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-zinc-300 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-zinc-300 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-zinc-300 transition-colors">Twitter</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold">Company.</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-zinc-300 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-zinc-300 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-zinc-300 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold">Resources.</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-zinc-300 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-zinc-300 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-zinc-300 transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} NAIYO24 PRIVATE LIMITED. All Rights Reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
