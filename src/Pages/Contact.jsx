import { Form, redirect, useActionData } from "react-router-dom"
export default function Contact() {
  const data = useActionData() 
  return (
    <div className='pt-10 text-2xl shadow-2xl'>
        <h3 className='text-teal-700'>Reach out to us!</h3>
        <Form method='post' action='/help/contact' >
          <label className=''>
            <p className='p-6'>Your email:</p>
            <input type='email' name='email' required className='' />
          </label>
          <label>
            <p className='p-6'>Your message:</p>
            <textarea name='message' required className='text-black'></textarea>
          </label>
          <p><button className='py-4 hover:text-teal-700'>Submit</button></p>
          {data && data.error && <p>{data.error}</p> }
        </Form>
    </div>
  )
}
// eslint-disable-next-line react-refresh/only-export-components
export const contactAction = async ({ request }) => {        //the {request} property contains all of the form data(input values in the text-area)
//accessing the form data
  const data = await request.formData()
//accessing individual items/values
  const submission = {
    email: data.get('email'),     //getting the email value from the form data
    message: data.get('message')  //getting the message value from the form data
  }
  console.log(submission)
//send post request
if (submission.message.length < 10) {
  return {error:'Message must be over 10 chars long '}
}
//redirecting to the homepage after user submits the form, with > 10 chars 
  return redirect('/')
}

