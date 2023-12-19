import { Link } from "react-router-dom";
export default function Notfound() {
  return (
    <div className='text-2xl p-80'>
        <div className='p-8 shadow-2xl '>
        <h2 className=''>Page not found</h2>
        <p>Go to the <Link to = '/'> <span className='text-teal-700'> Homepage </span>. </Link></p>
        </div>
    </div>
  )
}
