/* eslint-disable react/no-unescaped-entities */
import { NavLink, Outlet } from "react-router-dom";
export default function AboutLayout() {
  return (
    <div className='max-w-screen-xl p-48 m-auto text-2xl text-center text-gray-300 bg-teal-950 font-bruno'>
        <p className='p-8 pb-4 m-12 shadow-2xl'><span className='text-teal-700'>"</span>A safe deposit box that holds, 
        protects and preserves valuable items for your legacy and for the benefit of
        your loved ones<span className='text-teal-700'>"</span></p>
        <nav className='flex justify-evenly'>
            <NavLink to = 'about' className='px-2 border-2 border-teal-700 rounded-full hover:text-teal-700 hover:border-gray-300' >Who we are</NavLink>
            <NavLink to = 'Whyimarika' className='px-2 border-2 border-teal-700 rounded-full hover:text-teal-700 hover:border-gray-300' >Why Imarika</NavLink>
            <NavLink to = 'getstarted' className='px-2 border-2 border-teal-700 rounded-full hover:text-teal-700 hover:border-gray-300' >Get started</NavLink>
            <NavLink to = 'othertrusts' className='px-2 border-2 border-teal-700 rounded-full hover:text-teal-700 hover:border-gray-300' >Other Trusts</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}
