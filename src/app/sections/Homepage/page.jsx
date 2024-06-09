"use client"

import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Homepage = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-slide');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view-Right');
          entry.target.classList.remove('out-of-view-Left');
        } else {
          entry.target.classList.add('out-of-view-Left');
          entry.target.classList.remove('in-view-Right');
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
    <div>
      <Navbar />
      <div className="pb-48 mt-40 ml-10 min-h-screen mx-auto">
        <h2 className="mt-24 w-[90%] text-4xl lg:text-5xl animate-slide xl:text-7xl font-bold text-red-600">
          Satit Pranakorn <br />
          <span className="text-2xl lg:text-3xl xl:text-4xl text-red-700">Communication Club</span>
        </h2>
        <p className="mt-10 flex md:w-[80%] w-[90%] text-lg text-gray-700 font-bold animate-slide">
          สื่อสารมวลชน เป็นกระบวนการสื่อสารที่มีความสำคัญในการส่งผ่านข้อมูล ข่าวสาร ความรู้ และความบันเทิงไปยังประชาชนจำนวนมาก ผ่านช่องทางและสื่อประเภทต่าง ๆ เช่น โทรทัศน์ วิทยุ หนังสือพิมพ์ นิตยสาร และอินเทอร์เน็ต บทบาทของสื่อสารมวลชนในการพัฒนาและเปลี่ยนแปลงสังคมจึงเป็นเรื่องที่สำคัญและมีผลกระทบอย่างมาก
        </p>
        <div className="">
          <h2 className="mt-24 w-[90%] grid text-4xl md:justify-end lg:text-5xl animate-slide xl:text-7xl font-bold text-red-600">
            <span className="text-2xl lg:text-3xl xl:text-4xl text-red-700">ความหมายของสื่อสารมวลชน</span>
          </h2>
          <p className="mt-10 flex md:w-[80%] md:mx-auto w-[90%] text-lg text-gray-700 font-bold animate-slide">
            สื่อสารมวลชนหมายถึงการใช้สื่อในการสื่อสารข้อมูลไปยังประชาชนกลุ่มใหญ่ ด้วยวัตถุประสงค์เพื่อให้ข้อมูลข่าวสาร ความรู้ และความบันเทิงให้กับผู้รับสาร สื่อที่ใช้สามารถเป็นสื่อแบบดั้งเดิม เช่น หนังสือพิมพ์ วิทยุ โทรทัศน์ หรือสื่อสมัยใหม่ เช่น อินเทอร์เน็ต และโซเชียลมีเดีย
          </p>
        </div>

        <div className="">
          <h2 className="mt-24 w-[90%] grid text-4xl lg:text-5xl xl:text-7xl animate-slide font-bold text-red-600">
            <span className="text-2xl lg:text-3xl xl:text-4xl text-red-700">บทบาทของสื่อสารมวลชนในสังคม</span>
          </h2>
          <div className="mt-10 grid gap-y-4 md:w-[80%] w-[90%] text-lg text-gray-700 font-bold">
            <li className="animate-slide">ให้ข้อมูลและความรู้: <span className="font-normal">สื่อสารมวลชนทำหน้าที่ในการรายงานข่าวสารและให้ข้อมูลที่เป็นประโยชน์แก่ประชาชน เพื่อให้ผู้รับสารสามารถรับรู้เหตุการณ์ที่เกิดขึ้นในสังคมและทั่วโลก และนำข้อมูลเหล่านี้ไปใช้ในการตัดสินใจในชีวิตประจำวัน</span></li>
            <li className="animate-slide">ส่งเสริมความเข้าใจและการตระหนักรู้: <span className="font-normal">สื่อสารมวลชนสามารถส่งเสริมความเข้าใจในประเด็นสังคมต่าง ๆ และสร้างการตระหนักรู้ในเรื่องที่มีผลกระทบต่อชีวิตของประชาชน เช่น สิ่งแวดล้อม สุขภาพ การเมือง และสิทธิมนุษยชน</span></li>
            <li className="animate-slide">เป็นช่องทางการแสดงออกและการวิจารณ์: <span className="font-normal">สื่อสารมวลชนเปิดโอกาสให้ประชาชนสามารถแสดงความคิดเห็นและวิจารณ์ประเด็นต่าง ๆ ในสังคม ช่วยเสริมสร้างความเป็นประชาธิปไตยและการมีส่วนร่วมของประชาชนในการพัฒนาสังคม</span></li>
            <li className="animate-slide">สร้างความบันเทิง: <span className="font-normal">นอกจากการให้ข้อมูลและความรู้ สื่อสารมวลชนยังมีบทบาทในการสร้างความบันเทิงและความผ่อนคลายให้กับประชาชน ผ่านรายการโทรทัศน์ ภาพยนตร์ ดนตรี และสื่อบันเทิงอื่น ๆ</span></li>
            <li className="animate-slide">ส่งเสริมและสนับสนุนเศรษฐกิจ: <span className="font-normal">สื่อสารมวลชนมีบทบาทในการส่งเสริมการตลาดและโฆษณาสินค้าและบริการ ช่วยกระตุ้นการบริโภคและการพัฒนาเศรษฐกิจในระดับท้องถิ่นและระดับประเทศ</span></li>
          </div>
        </div>

        <div className="">
          <h2 className="mt-24 w-[90%] grid text-4xl lg:text-5xl xl:text-7xl animate-slide font-bold text-red-600">
            <span className="text-2xl lg:text-3xl xl:text-4xl text-red-700">ปัจจัยที่ส่งผลต่อความสำเร็จของสื่อสารมวลชน</span>
          </h2>
          <div className="mt-10 grid gap-y-4 md:w-[80%] md:mx-auto w-[90%] text-lg text-gray-700 font-bold">
            <li className="animate-slide">ความน่าเชื่อถือและความเป็นกลาง: <span className="font-normal">สื่อสารมวลชนต้องรักษาความน่าเชื่อถือและความเป็นกลางในการรายงานข่าวสารและข้อมูล เพื่อให้ประชาชนได้รับข้อมูลที่ถูกต้องและไม่มีการบิดเบือน</span></li>
            <li className="animate-slide">การเข้าถึงและการแพร่กระจาย: <span className="font-normal">สื่อสารมวลชนต้องสามารถเข้าถึงประชาชนในทุกกลุ่มอย่างทั่วถึงและแพร่กระจายข้อมูลได้อย่างรวดเร็วและมีประสิทธิภาพ</span></li>
            <li className="animate-slide">ความคิดสร้างสรรค์และนวัตกรรม: <span className="font-normal">การนำเสนอข้อมูลและความบันเทิงในรูปแบบที่น่าสนใจและนวัตกรรมช่วยดึงดูดความสนใจของผู้รับสารและเพิ่มประสิทธิภาพในการสื่อสาร</span></li>
            <li className="animate-slide">การมีส่วนร่วมของประชาชน: <span className="font-normal">การเปิดโอกาสให้ประชาชนมีส่วนร่วมในการสร้างสรรค์เนื้อหาและแสดงความคิดเห็นช่วยเสริมสร้างความสัมพันธ์ระหว่างสื่อและผู้รับสาร</span></li>
          </div>
        </div>

        <div className="">
          <h2 className="mt-24 w-[90%] grid text-4xl lg:text-5xl xl:text-7xl animate-slide font-bold text-red-600">
            <span className="text-2xl lg:text-3xl xl:text-4xl text-red-700">ความท้าทายของสื่อสารมวลชนในยุคดิจิทัล</span>
          </h2>
          <p className="mt-10 flex md:w-[80%] w-[90%] text-lg text-gray-700 font-bold animate-slide">
            ในยุคดิจิทัล สื่อสารมวลชนต้องเผชิญกับความท้าทายใหม่ ๆ เช่น การแพร่กระจายของข้อมูลเท็จ (Fake News) การแข่งขันที่สูงขึ้นจากสื่อออนไลน์ และการเปลี่ยนแปลงในพฤติกรรมของผู้บริโภคสื่อ ดังนั้น ผู้ประกอบการในวงการสื่อสารมวลชนจำเป็นต้องปรับตัวและนำนวัตกรรมมาใช้ในการสร้างสรรค์เนื้อหาและการสื่อสารเพื่อคงความสำเร็จในยุคที่เทคโนโลยีก้าวหน้าอย่างรวดเร็ว
          </p>
        </div>

        <div className="">
          <h2 className="mt-24 w-[90%] grid text-4xl lg:text-5xl xl:text-7xl animate-slide font-bold text-red-600">
            <span className="text-2xl lg:text-3xl xl:text-4xl text-red-700">สรุป</span>
          </h2>
          <p className="mt-10 flex md:w-[80%] md:mx-auto w-[90%] text-lg text-gray-700 font-bold animate-slide">
            สื่อสารมวลชนมีบทบาทสำคัญในการส่งผ่านข้อมูล ข่าวสาร ความรู้ และความบันเทิงไปยังประชาชนกลุ่มใหญ่ เพื่อเสริมสร้างความเข้าใจ การมีส่วนร่วม และการพัฒนาสังคมในทิศทางที่ดี การรักษาความน่าเชื่อถือ การใช้เทคโนโลยีและนวัตกรรม รวมถึงการมีส่วนร่วมของประชาชนจะช่วยให้สื่อสารมวลชนสามารถทำหน้าที่ได้อย่างมีประสิทธิภาพและสร้างความเปลี่ยนแปลงที่ดีในสังคม
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
