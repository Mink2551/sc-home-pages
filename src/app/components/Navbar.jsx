"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SC_Logo from '../../../public/logo_sc.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubOpen, setIsSubOpen] = useState({
        1: false,
      });
    
      const toggleSubmenu = (submenuId) => {
        setIsSubOpen({ ...isSubOpen, [submenuId]: !isSubOpen[submenuId] });
      };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };

    

    return (
        <div className='flex flex-col items-center'>
            {/* Logo SC */}
            <div className='bg-white shadow-2xl z-50 p-3 m-5 fixed rounded-full w-3/4 lg:w-1/2 flex justify-between items-center'>
                <div className='cursor-pointer hover:scale-110 transition-all flex'>
                    <Link href="/sections/Homepage" className="flex">
                       <Image src={SC_Logo} alt="Logo" className='h-12' width={48} height={48} />
                       <p className="my-auto text-red-400 cursor-pointer">Home</p>
                    </Link>
                </div>
            
            {/* Icon Open Mobile */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu}>
                        <svg className='w-6 h-6 mr-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
                        </svg>
                    </button>
                </div>

                <div className="md:flex hidden">
                    <ul className="flex gap-5 mr-8 font-bold">
                        <li className="font-bold text-gray-700 cursor-pointer hover:-translate-y-1 transition-all"><Link href="/sections/events">Events</Link></li>
                        <li className="font-bold text-gray-700 cursor-pointer hover:-translate-y-1 transition-all"><Link href="https://linktr.ee/sc.satitpm.official" target="blank">LinkTree</Link></li>
                        <li className="font-bold text-gray-700 cursor-pointer hover:-translate-y-1 transition-all"><Link href="https://sctechwebsite.vercel.app/register" target="blank">Register</Link></li>
                    </ul>
                </div>
            </div>

            {/* Sidebar PC */}
            <div className={`fixed h-fit hidden md:grid top-1 bottom-1 z-50 right-16 bg-gray-50 shadow-2xl w-60 rounded-3xl duration-500 transform ${isSidebarOpen ? 'translate-x-[65px]' : 'translate-x-full'}`}>
              <button
                className="absolute top-20 left-[-20px] transform -translate-y-1/2 px-3 py-2 text-gray-800 bg-gray-50 h-fit w-fit rounded-full focus:outline-none"
                onClick={toggleSidebar}
              >
                {isSidebarOpen ? '←' : '→'}
              </button>
              <div className="text-gray-700 grid my-4 h-fit ml-1 gap-y-2">
                {/* Sidebar's Header */}
                    <div className="flex h-fit">
                      <Link href="/sections/Homepage" className="flex">
                         <Image src={SC_Logo} alt="Logo" className='ml-2' width={44} height={44} />
                         <h1 className="text-2xl ml-3 font-bold my-auto text-red-500">Home Page</h1>
                      </Link>
                    </div>
                    <hr className="my-3 border-gray-700 mb-7 w-11/12 mx-auto"/>
                {/* Sidebar's Home */}
                   <div className="mx-3 flex p-1 py-2 rounded-md hover:bg-gray-700 hover:bg-opacity-30 cursor-pointer transition-all ">
                        <Link href="/sections/Homepage" class="flex">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#000000"} fill={"none"}>
                               <path d="M15.0001 17C14.2006 17.6224 13.1504 18 12.0001 18C10.8499 18 9.79965 17.6224 9.00012 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                               <path d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                           </svg>
                           <p className="my-auto text-xl ml-5 text-gray-700 font-bold">Home</p>
                        </Link>
                  </div>
                        
                {/* Sidebar's Departments */}
                <div className="mx-3.5 flex p-1 py-2 rounded-md hover:bg-gray-700 hover:bg-opacity-30 cursor-pointer transition-all" onClick={() => toggleSubmenu(1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                      <path d="M3.5 10C3.5 6.22876 3.5 4.34315 4.7448 3.17157C5.98959 2 7.99306 2 12 2H12.7727C16.0339 2 17.6645 2 18.7969 2.79784C19.1214 3.02643 19.4094 3.29752 19.6523 3.60289C20.5 4.66867 20.5 6.20336 20.5 9.27273V11.8182C20.5 14.7814 20.5 16.2629 20.0311 17.4462C19.2772 19.3486 17.6829 20.8491 15.6616 21.5586C14.4044 22 12.8302 22 9.68182 22C7.88275 22 6.98322 22 6.26478 21.7478C5.10979 21.3424 4.19875 20.4849 3.76796 19.3979C3.5 18.7217 3.5 17.8751 3.5 16.1818V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M20.5 12C20.5 13.8409 19.0076 15.3333 17.1667 15.3333C16.5009 15.3333 15.716 15.2167 15.0686 15.3901C14.4935 15.5442 14.0442 15.9935 13.8901 16.5686C13.7167 17.216 13.8333 18.0009 13.8333 18.6667C13.8333 20.5076 12.3409 22 10.5 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 7H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 11H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex">
                      <p className="my-auto text-xl ml-5 text-gray-700 font-bold">Departments</p>
                      <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                        <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                </div>
                  {isSubOpen[1] && (
                    <div className=" ml-2 w-fit" style={{ transition: "max-height 1s ease" }}>
                      {/* <a href="#" className="block py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">Graphic Designer</a> */}
                      {/* <a href="#" className="block py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">Photographer</a> */}
                      <a href="https://sctechwebsite.vercel.app/" target="blank" className="flex py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">
                        <svg className='my-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} color={"#000000"} fill={"none"}>
                            <path d="M14 2H10C6.72077 2 5.08116 2 3.91891 2.81382C3.48891 3.1149 3.1149 3.48891 2.81382 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C22 14.9188 22 13.2792 22 10C22 6.72077 22 5.08116 21.1862 3.91891C20.8851 3.48891 20.5111 3.1149 20.0811 2.81382C18.9188 2 17.2792 2 14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M11 15H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.5 22L14.1845 21.5811C13.4733 20.6369 13.2969 19.1944 13.7468 18M9.5 22L9.8155 21.5811C10.5267 20.6369 10.7031 19.1944 10.2532 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M7 22H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <p className=' ml-6'>Technician</p>
                      </a>
                      <a href="#" target="blank" className="flex py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">
                            <svg  className='my-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} color={"#000000"} fill={"none"}>
                            <path d="M16.5956 20.6989L14.1508 21.3462C11.8879 21.9453 10.7564 22.2448 9.86986 21.7542C8.98333 21.2636 8.68795 20.1744 8.09718 17.996L6.63512 12.6048C6.04436 10.4264 5.74898 9.33725 6.26846 8.4744C6.78794 7.61155 7.91941 7.312 10.1824 6.7129L14.1827 5.65384C16.4457 5.05474 17.5771 4.75519 18.4637 5.2458C19.3502 5.73642 19.6456 6.82561 20.2363 9.00398L21.7042 14.4166C21.9554 15.343 22.0811 15.8062 21.943 16.2417M16.5956 20.6989C17.3477 20.4998 17.3537 20.4966 17.9386 19.9948L20.6824 17.6404C21.4308 16.9983 21.805 16.6772 21.943 16.2417M16.5956 20.6989C16.5956 20.6989 17.1837 16.1058 18.5 15.5C19.9932 14.8128 21.943 16.2417 21.943 16.2417" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            <path d="M17 5.00118C16.9356 3.92779 16.7573 3.2521 16.2484 2.76762C15.4689 2.02553 14.218 2.02184 11.716 2.01444L7.29321 2.00137C4.79129 1.99398 3.54033 1.99028 2.76535 2.72777C1.99037 3.46526 1.99402 4.65592 2.00132 7.03725L2.01938 12.9307C2.02668 15.3121 2.03033 16.5027 2.80984 17.2448C3.58935 17.9869 4.84031 17.9906 7.34224 17.998L8.02306 18" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        <p className='ml-6'>Secretary</p>
                        </a>
                      {/* <a href="#" className="block py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">Marketing</a> */}
                      {/* <a href="#" className="block py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">Reporter</a> */}
                      {/* <a href="#" className="block py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">Editor</a> */}
                    </div>
                  )}
                {/* Sidebar's Socials */}
                   <div className="mx-3 flex p-1 py-2 rounded-md hover:bg-gray-700 hover:bg-opacity-30 cursor-pointer transition-all" onClick={() => toggleSubmenu(2)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                            <circle cx="12" cy="13" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M12 3.5V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 2H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.7728 10.2571C15.5061 10.9837 14.3328 16.8933 13.1289 16.9974C12.1189 17.0848 11.8041 15.0928 11.5914 14.4614C11.3815 13.8383 11.1478 13.6139 10.5298 13.4095C8.95989 12.8901 8.17492 12.6304 8.0195 12.2192C7.60796 11.1304 13.8362 9.32902 14.7728 10.2571Z" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        <p className="my-auto text-xl ml-5 text-gray-700 font-bold">Socials</p>
                        <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                            <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                   </div>
                   {isSubOpen[2] && (
                    <div className=" ml-2 w-fit" style={{ transition: "max-height 1s ease" }}>
                      <a href="https://facebook.com/sc.satitpm.official" target="blank" className="flex py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">
                      <svg className="my-auto mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} color={"#000000"} fill={"none"}>
                          <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                          <path d="M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                        <p>Facebook</p>
                      </a>

                      <a href="https://instagram.com/sc.satitpm.official" target="blank" className="flex py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">
                      <svg className="my-auto mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} color={"#000000"} fill={"none"}>
                          <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                          <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                        <p>Instagram</p>
                      </a>

                      <a href="https://youtube.com/@sc.satitpm.official" target="blank" className="flex py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">
                      <svg className="my-auto mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} color={"#000000"} fill={"none"}>
                          <path d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                        <p>Youtube</p>
                      </a>

                      <a href="https://www.tiktok.com/@sc.club7" target="blank" className="flex py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">
                      <svg className="my-auto mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} color={"#000000"} fill={"none"}>
                          <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                          <path d="M10.5359 11.0075C9.71585 10.8916 7.84666 11.0834 6.93011 12.7782C6.01355 14.4729 6.9373 16.2368 7.51374 16.9069C8.08298 17.5338 9.89226 18.721 11.8114 17.5619C12.2871 17.2746 12.8797 17.0603 13.552 14.8153L13.4738 5.98145C13.3441 6.95419 14.4186 9.23575 17.478 9.5057" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                        <p>TikTok</p>
                      </a>
                      <a href="https://linktr.ee/sc.satitpm.official" target="blank" className="flex py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">
                      <svg className="my-auto mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} color={"#000000"} fill={"none"}>
                          <path d="M12 22V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M15 17H16C18.7614 17 21 14.7614 21 12C21 9.5807 19.2818 7.56271 16.999 7.09982C16.999 4.3384 15 2 12 2C9 2 7.00097 4.3384 7.00097 7.09982C4.71825 7.56271 3 9.5807 3 12C3 14.7614 5.23858 17 8 17H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 15L14.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 13L9.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10 22H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                        <p>Link Tree</p>
                      </a>
                    </div>
                  )}
                {/* Sidebar's Admin & Dashboard */}
                   <div className="mx-3 flex p-1 py-2 rounded-md hover:bg-gray-700 hover:bg-opacity-30 cursor-pointer transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                            <path d="M7 17L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M12 17L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M17 17L17 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                        <p className="my-auto text-xl ml-5 text-gray-700 font-bold">Dashboard</p>
                   </div>
                {/* Sidebar's Account Register*/}
                <div className="mx-3 flex p-1 py-2 rounded-md hover:bg-gray-700 hover:bg-opacity-30 cursor-pointer transition-all">
                        <Link class="flex" href="https://sctechwebsite.vercel.app/register" target="blank">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                               <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                               <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" strokeWidth="1.5" />
                           </svg>
                           <p className="my-auto text-xl ml-5 text-gray-700 font-bold">Register</p>
                        </Link>
                </div>
              </div>
            </div>







            {/* Mobile Sidebar */}
            <div className={`bg-white shadow-2xl p-3 rounded-lg w-[80%] h-screen z-50 md:hidden fixed top-0 right-0 transition-all ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
               <div class="h-[calc(100vh-3rem)] overflow-y-auto">
                  <div className="text-gray-700 grid my-4 h-fit ml-1 gap-y-2">
                      {/* Sidebar's Header */}
                          <div className="flex h-fit">
                            <Image src={SC_Logo} alt="Logo" className='ml-2' width={44} height={44} />
                            <h1 className="text-2xl ml-3 font-bold my-auto text-red-500">Home Page</h1>
                          </div>
                          <hr className="my-3 border-gray-700 mb-7 w-11/12 mx-auto"/>
                      {/* Sidebar's Home */}
                          <div className="mx-3 flex p-1 py-2 rounded-md hover:bg-gray-700 hover:bg-opacity-30 cursor-pointer transition-all ">
                            <Link href="/sections/Homepage" class="flex">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#000000"} fill={"none"}>
                                   <path d="M15.0001 17C14.2006 17.6224 13.1504 18 12.0001 18C10.8499 18 9.79965 17.6224 9.00012 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                   <path d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                               </svg>
                               <p className="my-auto text-xl ml-5 text-gray-700 font-bold">Home</p>
                            </Link>
                           </div>
                      {/* Sidebar's Departments */}
                      <div className="mx-3.5 flex p-1 py-2 rounded-md hover:bg-gray-700 hover:bg-opacity-30 cursor-pointer transition-all" onClick={() => toggleSubmenu(1)}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                            <path d="M3.5 10C3.5 6.22876 3.5 4.34315 4.7448 3.17157C5.98959 2 7.99306 2 12 2H12.7727C16.0339 2 17.6645 2 18.7969 2.79784C19.1214 3.02643 19.4094 3.29752 19.6523 3.60289C20.5 4.66867 20.5 6.20336 20.5 9.27273V11.8182C20.5 14.7814 20.5 16.2629 20.0311 17.4462C19.2772 19.3486 17.6829 20.8491 15.6616 21.5586C14.4044 22 12.8302 22 9.68182 22C7.88275 22 6.98322 22 6.26478 21.7478C5.10979 21.3424 4.19875 20.4849 3.76796 19.3979C3.5 18.7217 3.5 17.8751 3.5 16.1818V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            <path d="M20.5 12C20.5 13.8409 19.0076 15.3333 17.1667 15.3333C16.5009 15.3333 15.716 15.2167 15.0686 15.3901C14.4935 15.5442 14.0442 15.9935 13.8901 16.5686C13.7167 17.216 13.8333 18.0009 13.8333 18.6667C13.8333 20.5076 12.3409 22 10.5 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 7H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 11H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <div className="flex">
                            <p className="my-auto text-xl ml-5 text-gray-700 font-bold">Departments</p>
                            <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                              <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                      </div>
                        {isSubOpen[1] && (
                          <div className=" ml-2 w-fit" style={{ transition: "max-height 1s ease" }}>
                            {/* <a href="#" className="block py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">Graphic Designer</a> */}
                            {/* <a href="#" className="block py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">Photographer</a> */}
                            <a href="https://sctechwebsite.vercel.app/" className="flex py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">
                              <svg className='my-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} color={"#000000"} fill={"none"}>
                                  <path d="M14 2H10C6.72077 2 5.08116 2 3.91891 2.81382C3.48891 3.1149 3.1149 3.48891 2.81382 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C22 14.9188 22 13.2792 22 10C22 6.72077 22 5.08116 21.1862 3.91891C20.8851 3.48891 20.5111 3.1149 20.0811 2.81382C18.9188 2 17.2792 2 14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                  <path d="M11 15H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M14.5 22L14.1845 21.5811C13.4733 20.6369 13.2969 19.1944 13.7468 18M9.5 22L9.8155 21.5811C10.5267 20.6369 10.7031 19.1944 10.2532 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                  <path d="M7 22H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                              </svg>
                              <p className=' ml-6'>Technician</p>
                            </a>
                            <a href="#" className="flex py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">
                                  <svg  className='my-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} color={"#000000"} fill={"none"}>
                                  <path d="M16.5956 20.6989L14.1508 21.3462C11.8879 21.9453 10.7564 22.2448 9.86986 21.7542C8.98333 21.2636 8.68795 20.1744 8.09718 17.996L6.63512 12.6048C6.04436 10.4264 5.74898 9.33725 6.26846 8.4744C6.78794 7.61155 7.91941 7.312 10.1824 6.7129L14.1827 5.65384C16.4457 5.05474 17.5771 4.75519 18.4637 5.2458C19.3502 5.73642 19.6456 6.82561 20.2363 9.00398L21.7042 14.4166C21.9554 15.343 22.0811 15.8062 21.943 16.2417M16.5956 20.6989C17.3477 20.4998 17.3537 20.4966 17.9386 19.9948L20.6824 17.6404C21.4308 16.9983 21.805 16.6772 21.943 16.2417M16.5956 20.6989C16.5956 20.6989 17.1837 16.1058 18.5 15.5C19.9932 14.8128 21.943 16.2417 21.943 16.2417" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                  <path d="M17 5.00118C16.9356 3.92779 16.7573 3.2521 16.2484 2.76762C15.4689 2.02553 14.218 2.02184 11.716 2.01444L7.29321 2.00137C4.79129 1.99398 3.54033 1.99028 2.76535 2.72777C1.99037 3.46526 1.99402 4.65592 2.00132 7.03725L2.01938 12.9307C2.02668 15.3121 2.03033 16.5027 2.80984 17.2448C3.58935 17.9869 4.84031 17.9906 7.34224 17.998L8.02306 18" stroke="currentColor" strokeWidth="1.5" />
                              </svg>
                              <p className='ml-6'>Secretary</p>
                              </a>
                            {/* <a href="#" className="block py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">Marketing</a> */}
                            {/* <a href="#" className="block py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">Reporter</a> */}
                            {/* <a href="#" className="block py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">Editor</a> */}
                          </div>
                        )}
                      {/* Sidebar's Socials */}
                         <div className="mx-3 flex p-1 py-2 rounded-md hover:bg-gray-700 hover:bg-opacity-30 cursor-pointer transition-all" onClick={() => toggleSubmenu(2)}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                                  <circle cx="12" cy="13" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                  <path d="M12 3.5V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M10 2H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M14.7728 10.2571C15.5061 10.9837 14.3328 16.8933 13.1289 16.9974C12.1189 17.0848 11.8041 15.0928 11.5914 14.4614C11.3815 13.8383 11.1478 13.6139 10.5298 13.4095C8.95989 12.8901 8.17492 12.6304 8.0195 12.2192C7.60796 11.1304 13.8362 9.32902 14.7728 10.2571Z" stroke="currentColor" strokeWidth="1.5" />
                              </svg>
                              <p className="my-auto text-xl ml-5 text-gray-700 font-bold">Socials</p>
                              <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                                  <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                         </div>
                         {isSubOpen[2] && (
                          <div className=" ml-2 w-fit" style={{ transition: "max-height 1s ease" }}>
                            <a href="https://facebook.com/sc.satitpm.official" target="blank" className="flex py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">
                            <svg className="my-auto mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} color={"#000000"} fill={"none"}>
                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                <path d="M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                              <p>Facebook</p>
                            </a>
   
                            <a href="https://instagram.com/sc.satitpm.official" target="blank" className="flex py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">
                            <svg className="my-auto mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} color={"#000000"} fill={"none"}>
                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                              <p>Instagram</p>
                            </a>
   
                            <a href="https://youtube.com/@sc.satitpm.official" target="blank" className="flex py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">
                            <svg className="my-auto mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} color={"#000000"} fill={"none"}>
                                <path d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>
                              <p>Youtube</p>
                            </a>
   
                            <a href="https://www.tiktok.com/@sc.club7" target="blank" className="flex py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">
                            <svg className="my-auto mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} color={"#000000"} fill={"none"}>
                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                                <path d="M10.5359 11.0075C9.71585 10.8916 7.84666 11.0834 6.93011 12.7782C6.01355 14.4729 6.9373 16.2368 7.51374 16.9069C8.08298 17.5338 9.89226 18.721 11.8114 17.5619C12.2871 17.2746 12.8797 17.0603 13.552 14.8153L13.4738 5.98145C13.3441 6.95419 14.4186 9.23575 17.478 9.5057" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                              <p>TikTok</p>
                            </a>
                            <a href="https://linktr.ee/sc.satitpm.official" target="blank" className="flex py-2 px-3 rounded-md hover:bg-gray-600 hover:bg-opacity-30 transition-all">
                            <svg className="my-auto mr-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} color={"#000000"} fill={"none"}>
                                <path d="M12 22V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 17H16C18.7614 17 21 14.7614 21 12C21 9.5807 19.2818 7.56271 16.999 7.09982C16.999 4.3384 15 2 12 2C9 2 7.00097 4.3384 7.00097 7.09982C4.71825 7.56271 3 9.5807 3 12C3 14.7614 5.23858 17 8 17H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 15L14.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 13L9.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 22H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                              <p>Link Tree</p>
                            </a>
                          </div>
                        )}
                      
                     

                      <hr className="my-3 border-gray-700 mb-7 w-11/12 mx-auto"/>

                      {/* Sidebar's Admin & Dashboard */}
                      <div className="mx-3 flex p-1 py-2 rounded-md hover:bg-gray-700 hover:bg-opacity-30 cursor-pointer transition-all">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                                  <path d="M7 17L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                  <path d="M12 17L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                  <path d="M17 17L17 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                  <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                              </svg>
                              <p className="my-auto text-xl ml-5 text-gray-700 font-bold">Dashboard</p>
                         </div>

                      {/* Sidebar's Events */}
                      <div className="mx-3 flex p-1 py-2 rounded-md hover:bg-gray-700 hover:bg-opacity-30 cursor-pointer transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                                   <path d="M18 2V4M6 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                   <path d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                   <path d="M3.5 8H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                   <path d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                   <path d="M3 8H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                               </svg>
                              <p className="my-auto text-xl ml-5 text-gray-700 font-bold"><Link href="/sections/events">Events</Link></p>
                         </div>

                         <hr className="my-3 border-gray-700 mb-7 w-11/12 mx-auto"/>

                          {/* Sidebar's Account Register*/}
                      <div className="mx-3 flex p-1 py-2 rounded-md hover:bg-gray-700 hover:bg-opacity-30 cursor-pointer transition-all">
                          <Link class="flex" href="https://sctechwebsite.vercel.app/register" target="blank">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                                   <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                   <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" strokeWidth="1.5" />
                               </svg>
                               <p className="my-auto text-xl ml-5 text-gray-700 font-bold">Register</p>
                          </Link>
                      </div>
                    
                    </div>
               </div>
            </div>

            {/* Blur Overlay */}
            <div className={`fixed inset-0 bg-black bg-opacity-25 z-40 ${isOpen ? 'block' : 'hidden'}`} onClick={toggleMenu}></div>

            {/* Content Container */}
            <div className={`flex flex-col items-center transition-all w-full ${isOpen ? 'blur-[1px]' : ''}`}>
                {/* Main Content */}
                {/* Add your main content here */}
            </div>
        </div>
    );
};

export default Navbar;
