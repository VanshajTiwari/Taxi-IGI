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
        <h1 className="text-[50px] border-b-2 m-2 text-gray-200">
              3 SIMPLE STEPS TO BOOK YOUR RIDE
        </h1>
        <article className=" text-gray-400">
              <ol className="w-[900px]">
              <li className="border-2 m-2 p-3 w-full border-gray-300">1. Set Pickup Point</li>
              <li className="border-2 m-2 p-3 w-full border-gray-300">2. Set Drop Point</li>
              <li className="border-2 m-2 p-3 w-full border-gray-300">3. Pay After Ride Complete</li>
              </ol>
        </article>
    </section>
    <section className="flex flex-col items-center m-5">
      <h1 className="text-[50px] border-b-2 mb-2 text-gray-200">
        Features
      </h1>
      <ol  className="w-[900px] text-gray-300">
        <li className="border-2 m-2 p-3 w-full border-gray-300">1. Cab Service</li>
        <li className="border-2 m-2 p-3 w-full border-gray-300">2. Long Tour</li>
        <li className="border-2 m-2 p-3 w-full border-gray-300">3. Rent</li>
        <li className="border-2 m-2 p-3 w-full border-gray-300">4. Polling</li>
        <li className="border-2 m-2 p-3 w-full border-gray-300">5. Other</li>
      </ol>
    </section>
    
    
    <Footer/>
</main>
  );
}
