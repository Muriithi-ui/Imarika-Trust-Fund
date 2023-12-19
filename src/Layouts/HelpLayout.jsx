import { NavLink, Outlet } from "react-router-dom";
export default function HelpLayout() {
  return (
    <div className='max-w-screen-xl p-48 m-auto text-2xl text-center text-gray-300 bg-teal-950 font-bruno'>
        <h2 className='pb-6 m-10 shadow-2xl'>At Imarika, our mission is to protect and create your wealth. Should you have any inquiries 
        about The Imarika Trust Fund or would like to set it up, you can email us at <span className='text-teal-700 cursor-pointer'>contactcentre@imarika.com</span></h2>
        <nav className='flex justify-evenly'>
            <NavLink to = 'faq' className='px-2 border-2 border-teal-700 rounded-full hover:text-teal-700 hover:border-gray-300'>View the FAQ</NavLink>
            <NavLink to = 'contact' className='px-2 border-2 border-teal-700 rounded-full hover:text-teal-700 hover:border-gray-300'>Contact Us</NavLink>
            <NavLink to = 'Location' className='px-2 border-2 border-teal-700 rounded-full hover:text-teal-700 hover:border-gray-300'>Locate Us</NavLink>
            <NavLink to = 'Otherservices' className='px-2 border-2 border-teal-700 rounded-full hover:text-teal-700 hover:border-gray-300'>Other Services</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}
