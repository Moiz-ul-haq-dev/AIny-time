import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className='absolute -z-10 top-0 left-0 w-5/12 h-full bg-gradient-to-r from-[#a22fcf] to-[#1f0132] rounded-full filter blur-3xl opacity-55' style={{ transform: 'translateX(77%) translateY(-10%) rotate(-45deg)'}}></div>
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
