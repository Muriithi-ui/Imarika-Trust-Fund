import {  useLoaderData, useParams } from "react-router-dom"
export default function Careerdetails() {
    // eslint-disable-next-line no-unused-vars
    const { id } = useParams()     //used to access the route parameter id
    const career = useLoaderData()
  return (
    <div className='p-8 m-12 mt-4 text-2xl shadow-2xl'>
        <h2 className='m-2'>Career details for: <span className='text-teal-700'>{career.title}</span></h2>
        <p className='m-2'>Starting salary: {career.salary}</p>
        <p className='m-2'>Location: {career.location}</p>
        <div className='pt-4'>
            <p className='text-2xl'> <span className='text-teal-700'>Description:</span> {career.details}</p>
        </div>
    </div>
  )
}
//career details loader: fetch details of a single career
// eslint-disable-next-line react-refresh/only-export-components
export const careerDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch('http://localhost:4000/careers/' + id)
    if (!res.ok) {
        throw Error('Could not find that career')
    }
    return res.json()
}
