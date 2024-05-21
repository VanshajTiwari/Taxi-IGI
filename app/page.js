import Image from "next/image";
import { Nav } from "./Components/navbar";
import { Footer } from "./Components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
    <header>
      <Nav/>
      <div className="hero-section-back flex flex-col items-center">
         <h1 className="text-yellow-400 text-[90px] font-bold">
            Welcome to TAXI IGI
         </h1>
         <h2 className="text-[30px] font-light">Life is too short just book a ride and slay</h2>
         <span className="m-[20%]">
          <Link href="/login" className="border-yellow-400 border-2 p-4 text-yellow-400 transition-all duration-500 font-bold hover:bg-yellow-500 hover:text-white hover:font-normal">
              BOOK A RIDE
          </Link>
         </span>
      </div>
    </header>
    <section className="flex flex-col items-center m-5">
        <h1 className="text-[50px] ">
              3 SIMPLE STEPS TO BOOK YOUR RIDE
        </h1>
        <article className=" text-gray-400">
              <ol className="w-[900px]">
              <li className="border-2 m-2 p-3 w-full border-gray-400">1. Set Pickup Point</li>
              <li className="border-2 m-2 p-3 w-full border-gray-400">2. Set Drop Point</li>
              <li className="border-2 m-2 p-3 w-full border-gray-400">3. Pay After Ride Complete</li>
              </ol>
        </article>
    </section>

    
    
    <Footer/>
</main>
  );
}
