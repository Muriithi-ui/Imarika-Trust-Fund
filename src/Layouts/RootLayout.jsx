//root layout wraps other pages and is passed into the browser router 
import { NavLink, Outlet } from "react-router-dom"
export default function RootLayout() {
  return (
    <div className='max-w-screen-xl text-center text-gray-300 bg-teal-950 font-bruno'>
        <header>
           <nav className='flex justify-end p-2 text-2xl'>
             <NavLink to='/' className='px-2 hover:text-teal-700'> Home</NavLink>
             <NavLink to='aboutus' className='px-2 hover:text-teal-700'> About</NavLink>
             <NavLink to='help' className='px-2 hover:text-teal-700'>Help</NavLink>
             <NavLink to='careers' className='px-2 hover:text-teal-700'>Careers</NavLink>
           </nav>
         </header>  
    <main>
        <Outlet />
    </main>
    </div>
  )
}
