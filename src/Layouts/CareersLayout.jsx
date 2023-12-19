import { Outlet } from "react-router-dom";
export default function CareersLayout() {
  return (
    <div className='max-w-screen-xl m-auto text-2xl text-center text-gray-300 bg-teal-950 font-bruno p-60'>
        <p className='pb-4'>Available career opportunities :</p>
        <Outlet/>
    </div>
  )
}

