"use client"

import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import TWP from '../../../../public/Technician_Working_Page.png'
import SCTP from '../../../../public/Secretary_Couter_page.png'
import Image from 'next/image'
import Link from 'next/link'

function EventsPage() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-slide');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          entry.target.classList.remove('out-of-view');
        } else {
          entry.target.classList.add('out-of-view');
          entry.target.classList.remove('in-view');
        }
      });
    }, {
      threshold: 0.1,
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);


  return (
    <div className="">
      <Navbar/>
      <h1 className="font-bold  text-5xl text-gray-800 ml-10 mt-48 animate-slide pt-2">Events -</h1>

      {/* Techinian's Working Page */}
       <div className="max-w-7xl mx-auto hover:bg-gray-400 transition-all w-[90%] rounded-xl px-2 hover:bg-opacity-30 hover:shadow-2xl">
         <div className="grid md:grid-cols-[1fr_2fr]">
             <Link href="https://sctechwebsite.vercel.app/working" target="blank"><Image src={TWP} alt="Technician Working Page" className='animate-slide h-[80%] w-[80%] hover:scale-110 duration-500 cursor-pointer max-w-[400px] max-h-[400px] mx-auto md:ml-10 rounded-3xl border-2 border-white shadow-2xl mt-10' /></Link>
             <div className="mt-10 md:text-4xl text-2xl text-gray-800 font-bold mx-auto ">
                <h2 className="animate-slide ml-1">Technician's Working Page</h2>
                <p className="mt-2 animate-slide font-medium text-lg max-w-[40rem]">เว็บไซต์ที่แจกงานและลงโน้ตเกี่ยวกับงานในฝ่ายเทคนิคเช่นการรับรูปส่งรูปเพื่อการทำงานที่มีประสิธิภาพและรวดเร็วกระจายงานได้อย่างทั่วถึง โดยมีข้อมูลระบุไว้อย่างระเอียด <span className="text-gray-600">( ช่างภาพที่ถ่าย, วันที่ต้องส่ง, จำนวนของรูปภาพ)</span> และยังมีคำอธิบายงานเพื่อความระเอียดในแต่ละงานอีกด้วย</p>
                <button className="ml-1 animate-slide font-medium text-base text-white border-white border px-3 py-1 rounded-xl mt-4 hover:scale-125 transition-all bg-red-600 "><Link href="https://sctechwebsite.vercel.app/working" target="blank" className="">View Here</Link></button>
             </div>
         </div>
       </div>

       <div className="grid md:grid-cols-[2fr_3fr] mt-10  w-[90%] mx-auto">

         {/* Techinian's Package Page */}
          <div className="max-w-7xl mx-auto hover:bg-gray-400 transition-all py-2 rounded-xl px-4 hover:bg-opacity-30 hover:shadow-2xl">
            <div className="grid md:grid-cols-">
                <div className="mt-10 md:text-4xl text-2xl text-gray-800 font-bold mx-auto ">
                   <h2 className="ml-1 animate-slide">Technician's Package page</h2>
                   <p className="mt-2 animate-slide font-medium text-lg max-w-[40rem]">เว็บไซต์ที่แจกไฟล์โปรแกรมที่ใข้ทำงานในฝ่ายเทคนิคและฝ่ายอื่นๆ หรือ แจกฝ่าย Element ต่างๆที่เอาไว้ใช้ทำงาน</p>
                   <button className="ml-2 animate-slide font-medium text-base text-white border-white border px-3 py-1 rounded-xl mt-4 hover:scale-110 transition-all bg-red-600 "><Link href="https://sctechwebsite.vercel.app/package" target="blank" className="">View Here</Link></button>
                </div>
            </div>
          </div>

         {/* Secretary's Medal Counting Page */}
          <div className="max-w-7xl mx-auto hover:bg-gray-400 transition-all rounded-xl px-2 py-2 hover:bg-opacity-30 hover:shadow-2xl">
            <div className="grid md:grid-cols-[1fr_2fr]">
                <Link href="https://sctechwebsite.vercel.app/working" target="blank"><Image src={SCTP} alt="Technician Working Page" className='animate-slide h-[80%] w-[80%] hover:scale-110 duration-500 cursor-pointer max-w-[300px] max-h-[300px] mx-auto md:ml-10 rounded-3xl border-2 border-white shadow-2xl mt-10' /></Link>
                <div className="mt-10 md:text-4xl text-2xl text-gray-800 font-bold mx-auto ">
                   <h2 className="ml-2 animate-slide">Secretary's Medal Counting Page</h2>
                   <p className="mt-3 animate-slide font-medium text-lg ml-2 max-w-[40rem]">เว็บไซต์นับเหรียญรางวัลในงานแข่งกีฬาให้มีความสดวกสบายและถูกต้องมากขึ้น</p>
                   <button className="ml-2 animate-slidefont-medium text-base text-white border-white border px-3 py-1 rounded-xl mt-4 hover:scale-125 transition-all bg-red-600 "><Link href="https://sctechwebsite.vercel.app/working" target="blank" className="">View Here</Link></button>
                </div>
            </div>
          </div>
       </div>

       <div className="grid md:grid-cols-[3fr_2fr] mt-10  w-[90%] mx-auto">

        {/* Secretary's Roles Page */}
        <div className="max-w-7xl mx-auto hover:bg-gray-400 transition-all rounded-xl px-2 py-2 hover:bg-opacity-30 hover:shadow-2xl">
            <div className="grid md:grid-cols-[1fr_2fr]">
                <Link href="https://sctechwebsite.vercel.app/working" target="blank"><Image src={SCTP} alt="Technician Working Page" className='animate-slide h-[80%] w-[80%] hover:scale-110 duration-500 cursor-pointer max-w-[300px] max-h-[300px] mx-auto rounded-3xl border-2 border-white shadow-2xl mt-10' /></Link>
                <div className="mt-10 md:text-4xl text-2xl text-gray-800 font-bold mx-auto ">
                   <h2 className="ml-2 animate-slide">Secretary's Roles Page</h2>
                   <p className="mt-3 animate-slide font-medium text-lg ml-2 max-w-[40rem]">เว็บไซต์ที่ดูหน้าที่การทำงานของแต่ละคนที่กำลังทำงานอยู่เพื่อความสดวกสบายในการหาที่อยู่และประสานงานของแต่ละฝ่าย</p>
                   <button className="ml-2 animate-slidefont-medium text-base text-white border-white border px-3 py-1 rounded-xl mt-4 hover:scale-125 transition-all bg-red-600 "><Link href="https://sctechwebsite.vercel.app/working" target="blank" className="">View Here</Link></button>
                </div>
            </div>
          </div>

         {/* Secretary's Members Page */}
          <div className="max-w-7xl mx-auto hover:bg-gray-400 transition-all py-2 rounded-xl px-4 hover:bg-opacity-30 hover:shadow-2xl">
            <div className="grid md:grid-cols-">
                <div className="mt-10 md:text-4xl text-2xl text-gray-800 font-bold mx-auto ">
                   <h2 className="ml-1 animate-slide">Secretary's Members Page</h2>
                   <p className="mt-2 animate-slide font-medium text-lg max-w-[40rem]">เว็บไซต์เพิ่มชื่อสมาชิกเข้าในระบบเพื่อใข้ในเว็บอื่นๆ</p>
                   <button className="ml-2 animate-slide font-medium text-base text-white border-white border px-3 py-1 rounded-xl mt-4 hover:scale-110 transition-all bg-red-600 "><Link href="https://sctechwebsite.vercel.app/working" target="blank" className="">View Here</Link></button>
                </div>
            </div>
          </div>
         
       </div>
       <div className="h-20"></div>
       <Footer/>
    </div>
  )
}

export default EventsPage
