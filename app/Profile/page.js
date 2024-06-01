'use client';
import { PieChart } from "@mui/x-charts";
import Card from "./card";
import React from 'react';
import moment from 'moment';
import Heatmap from '../Components/Heatmap';
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
      <div className='w-full lg:h-screen p-4 bg-[#1f1f1f]'>
        <div className=' p-3 rounded-md shadow text-[20px] text-gray-100'>
          <span className='text-blue-400'> / Dashboard</span>
          <span> / profile</span>
        </div>
          <div className='flex w-full'>
            <div className='w-1/4 h-full border-r-1 border-white px-6'>
              <div className='w-full   rounded-md my-4 p-2 shadow flex items-center flex flex-col'>
                  <div className='w-[300px] h-[300px] border rounded-full mt-4 overflow-hidden'>
                    <img  src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?t=st=1717241766~exp=1717245366~hmac=a189ffd79688c8e04b5caca776d2cd770a113594e83432e91dc878452d537a7b&w=826" className="object-cover"/>
                  </div>
                  <div className=' text-[30px] mt-5 flex flex-col items-center font-light '>
                    <span>Vanshaj Tiwari</span>
                    <span>vanshajtiwari62@gmail.com</span>
                  </div>
              </div>
              
              <div className='w-full bg-white  rounded-md text-black my-4 p-2 shadow flex flex-col items-center justify-center '>
              
                  <div className='flex text-[20px] mb-2'>
                    <span>Total Travel : </span>&nbsp;
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
          </div>
          <div className="w-3/4">
            <div className='w-full my-4 ml-4 flex '>
              <div className='w-3/4 rounded-md relative h-[300px] p-4'>
                <div className='text-[25px]'>
                  <div className=' border-b-[1px]'>
                    <span>Full Name : </span>
                    <span>Vanshaj Tiwari</span>
                  </div>
                  <div className=' border-b-[1px]'>
                    <span>Email : </span>
                    <span>vanshajtiwari62@gmail.com</span>
                  </div>
                  <div className=' border-b-[1px]'>
                    <span>Phone : </span>
                    <span>9368644771</span>
                  </div>
                  <div className=' border-b-[1px]'>
                    <span>Mobile : </span>
                    <span>Vanshaj Tiwari</span>
                  </div>
                  <div>
                    <span>Address : </span>
                    <span>Vrindavan,Mathura</span>
                  </div>
                </div>
                <div className='flex absolute bottom-4 '>
                  <button className='text-white bg-blue-400 p-2 rounded-md text-[20px] mr-4'>Update Details</button>
                  <button className='text-white bg-blue-400 p-2 rounded-md text-[20px]'>Update Password</button> 
                </div>
              </div>
              <div>
                  <Card/>
              </div>
            </div>
            <div className="w-full flex justify-center items-center"><Heatmap range={dateRange} data={data} colorFunc={({ alpha }) => `rgba(3, 160, 3, ${alpha})`} /></div>
          </div>
        </div>
      </div>
    );
  }
