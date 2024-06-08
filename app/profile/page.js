'use client';
import { PieChart } from "@mui/x-charts";
// import Card from "./card";
import moment from 'moment';
import Heatmap from '../Components/Heatmap';
// import { Dashboard } from "../dashboard/dashboard";
import SideNav from "../dashboard/sideNav";
import TopNavbar from "../dashboard/topNav";
import Image from "next/image";
import "../dashboard/style.scss";
export default function Page(){
  let startDate = moment().add(-365, 'days');
  let dateRange = [startDate, moment()];

  let data = Array.from(new Array(365)).map((_, index) => {
      return {
          date: moment(startDate).add(index, 'day'),
          value: Math.floor(Math.random() * 100)
      };
  });
  return(
    <>
      <div className="app-body" style={{width:"100%",paddingLeft:"100px",paddingBottom:"20px",backgroundColor:"#1f1f1f"}}>
        
        <SideNav/>
       
        <div className="scroll scroll-3 app-body-main-content overflow-auto pr-3" >
            <nav className="">			
              <div className="app-header-logo">
                <div className=" flex justify-center">
                  <span className="">
                    {/* <img src="https://assets.codepen.io/285131/almeria-logo.svg" /> */}
                    <Image  src="/site/img/view-3d-car_23-2150998595-removebg-preview.png" alt="logo" width={120} height={120} className=""/>
                  </span>
                  <h1 className="logo-title text-[30px]">
                    <span>Taxi IGI</span>
                    <span className='text-[15px]'>Powered by Project IGI</span>
                  </h1>
                </div>
              </div>
            </nav>
				<section className="w-full">
					<h2>Profile Details</h2>

					<div className="tiles">

						<article className="tile">
              <div className='flex flex-col items-center'>
                <div className="tile-header flex justify-center items-center min-h-[200px] ">
                  <img src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' width={140} height={140}/>
                  <h3 className="text-[20px]">
                    <span>Vanshaj Tiwari</span>
                    <span>vanshajtiwari62@gmail.com</span>
                  </h3>
                </div>
							</div>
							<a href="#">
								<span>Update Details</span>
							</a>
						</article>
            <article className="tile">
							<div className="flex flex-col">
								{/* <i className="ph-fire-simple-light"></i> */}
								{/* <FireSimple size={36} weight="regular"/> */}
                <h3 className='border-b-2 border-black grid-cols-2'>
									<span  className='font-bold'>verified : </span>
									<span>NO</span>
								</h3>
								<h3 className='border-b-2 border-black  grid-cols-2'>
									<span className='font-bold'>Address : </span>
									<span>Vrindavan,Mathura</span>
								</h3>
                <h3 className='border-b-2 border-black  grid-cols-2'>
									<span  className='font-bold'>Active Since :</span>
									<span>2023</span>
								</h3>
                <h3 className='border-b-2 border-black  grid-cols-2'>
									<span  className='font-bold'>Logged on :</span>
									<span>Poco M2 pro</span>
								</h3>
							</div>
							<a href="#">
								<span>Edit</span>
								<span className="icon-button">
									{/* <i className="ph-caret-right-bold"></i> */}
									{/* <CaretRight weight="regular"/> */}
								</span>
							</a>
						</article>
						<article className="tile">
							<div className="">
                <div className='flex justify-center text-[20px]'>
                      <span className="no-wrap">Total Travel : </span>&nbsp;
                      <span>99</span>
                      
                    </div>
                    
                    <div className="w-full h-full">
                    <PieChart
                        
                          series={[
                            {
                              data: [
                                { id: 0, value: 10, label: 'Ride Booked',color:"yellow"},
                                { id: 1, value: 15, label: 'Tour' },
                                { id: 2, value: 20, label: 'Polling' },
                              ],
                              innerRadius: 30,
                              outerRadius: 100,
                            
                              paddingAngle: 5,
                              cornerRadius: 5,
                            },
                          ]}
                          width={400}
                          height={200}
                        />
                    </div>
							</div>
							<a href="#">
								<span>Stats</span>
								<span className="icon-button">
								{/* <CaretRight weight="regular"/> */}
									{/* <i className="ph-caret-right-bold"></i> */}
								</span>
							</a>
						</article>
					</div>
            <article className="tile" style={{backgroundColor:"#dad7cd",marginTop:"20px"}}>
            <Heatmap range={dateRange} data={data} colorFunc={({ alpha }) => `rgba(3, 160, 3, ${alpha})`} />
            </article>

				</section>
				
			</div>
      </div>
      </>
    );
  }



  // <div className='w-9/10 ml-12 app-body-main-content overflow-auto pr-3'>
  //           <div className='flex'>
  //             <div className='w-1/4 h-full border-r-1 border-white px-6'>
  //               <div className='w-full   rounded-md my-4 p-2 shadow flex items-center flex flex-col'>
  //                   <div className='w-[300px] h-[300px] border rounded-full mt-4 overflow-hidden'>
  //                     <img  src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?t=st=1717241766~exp=1717245366~hmac=a189ffd79688c8e04b5caca776d2cd770a113594e83432e91dc878452d537a7b&w=826" className="object-cover"/>
  //                   </div>
  //                   <div className=' text-[30px] mt-5 flex flex-col items-center font-light '>
  //                     <span>Vanshaj Tiwari</span>
  //                     <span>vanshajtiwari62@gmail.com</span>
  //                   </div>
  //               </div>
                
  //               <div className='w-full bg-white  rounded-md text-black my-4 p-2 shadow flex flex-col items-center justify-center '>
                

  //               </div>
  //           </div>
  //           <div className="w-3/4">
  //             <div className='w-full my-4 ml-4 flex '>
  //               <div className='w-3/4 rounded-md relative h-[300px] p-4'>
  //                 <div className='text-[25px]'>
  //                   <div className=' border-b-[1px]'>
  //                     <span>Full Name : </span>
  //                     <span>Vanshaj Tiwari</span>
  //                   </div>
  //                   <div className=' border-b-[1px]'>
  //                     <span>Email : </span>
  //                     <span>vanshajtiwari62@gmail.com</span>
  //                   </div>
  //                   <div className=' border-b-[1px]'>
  //                     <span>Phone : </span>
  //                     <span>9368644771</span>
  //                   </div>
  //                   <div className=' border-b-[1px]'>
  //                     <span>Mobile : </span>
  //                     <span>Vanshaj Tiwari</span>
  //                   </div>
  //                   <div>
  //                     <span>Address : </span>
  //                     <span>Vrindavan,Mathura</span>
  //                   </div>
  //                 </div>
  //                 <div className='flex absolute bottom-4 '>
  //                   <button className='text-white bg-blue-400 p-2 rounded-md text-[20px] mr-4'>Update Details</button>
  //                   <button className='text-white bg-blue-400 p-2 rounded-md text-[20px]'>Update Password</button> 
  //                 </div>
  //               </div>
  //               <div>
  //                   {/* <Card/> */}
  //               </div>
  //             </div>
  //             {/* <div className="w-full flex justify-center items-center"></div> */}
  //           </div>
  //         </div>
  //       </div>