import Hero from "./Hero";
import Integrations from "./Integrations";
import Navbar from "./Navbar";
import Platforms from "./Platforms";
import Pricing from "./Pricing";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className='absolute -z-10 top-0 left-0 lg:w-5/12 lg:h-2/3 bg-gradient-to-r from-[#a22fcf] to-[#1f0132] rounded-full filter blur-3xl opacity-55' style={{ transform: 'translateX(70%) translateY(-10%) rotate(-45deg)'}}></div>
        <Navbar />
        <Hero />
      </div>
      <Integrations />
      <Platforms />
      <Pricing />
    </>
  );
}
