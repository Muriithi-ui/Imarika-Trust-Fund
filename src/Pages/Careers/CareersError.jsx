import { Link, useRouteError } from "react-router-dom"
export default function CareersError() {
    const error = useRouteError()
  return (
    <div className='p-40'>
        <div className='p-8 m-12 text-3xl shadow-2xl'>
            <h2 className=''>Error!</h2>
            <p className='mt-4'>{error.message}</p>
            <Link to = '/' className='text-teal-700'>Back to Homepage</Link>
        </div>
    </div>
  )
}
