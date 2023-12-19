import { useLoaderData, Link } from "react-router-dom"
export default function Careers() {
  const careers = useLoaderData()
  return (
    <div className=''>
        {careers.map(career => (
          <Link className='hover:text-teal-700'  to = {career.id.toString()} key={career.id}>
            <div className='p-8 m-12 shadow-2xl'>
              <p className=''>{career.title}</p>
              <p className=''>Based in {career.location}</p>
              <div className=''>
                <p className='text-xl'>
                  Click for career details
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
//careers loader function
// eslint-disable-next-line react-refresh/only-export-components
export const careersLoader = async () => {
  const res = await fetch('http://localhost:4000/careers')
  if (!res.ok) {
    throw Error('Could not fetch the careers')
}
  return res.json()
}