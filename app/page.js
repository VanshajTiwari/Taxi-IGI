import Image from "next/image";
import { Nav } from "./Components/navbar";

export default function Home() {
  return (
    <main className="">
    <header>
      <Nav/>
      <div className="hero-section-back flex flex-col items-center">
         <h1 className="text-yellow-400 text-[90px] font-extrabold">
            Welcome to TAXI IGI
         </h1>
         <span className="m-[20%]">
          <button className="border-yellow-400 border-2 p-4 text-yellow-400 transition-all duration-500 font-bold hover:bg-yellow-400 hover:text-white hover:font-normal">
              BOOK A RIDE
          </button>
         </span>
      </div>
    </header>
    </main>
  );
}
