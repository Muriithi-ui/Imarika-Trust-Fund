import {
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
//pages
import Home from './Pages/Home'
import About from './Pages/About'
import Faq from './Pages/Faq'
import Contact, { contactAction } from './Pages/Contact'
import Getstarted from './Pages/Getstarted'
import Notfound from './Pages/Notfound'
import Careerdetails, { careerDetailsLoader } from './Pages/Careers/Careerdetails'
import CareersError from './Pages/Careers/careersError'
import Whyimarika from './Pages/Whyimarika'
import Location from './Pages/Location'
import Otherservices from './Pages/Otherservices'
import Othertrusts from './Pages/Othertrusts'
//layouts
import RootLayout from './Layouts/RootLayout'
import HelpLayout from './Layouts/HelpLayout'
import AboutLayout from './Layouts/AboutLayout'
import CareersLayout from './Layouts/CareersLayout'
//loaders
import Careers, { careersLoader } from './Pages/Careers/Careers'
import './App.css'
//creating the browser router
const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path = '/' element = {<RootLayout/>}>  {/*passing in elements intended to be within the browser router scope  */}
        <Route path = '/' element = {<Home/>} /> {/*index path, same as path='/' */}
        <Route path='aboutus' element = {<AboutLayout/>}>
        <Route path = 'about' element = {<About/>} />
        <Route path = 'getstarted' element = {<Getstarted/>} />
        <Route path = 'whyimarika' element = {<Whyimarika/>} />
        <Route path = 'othertrusts' element = {<Othertrusts/>} />
      </Route>
      <Route path='help' element = {<HelpLayout/>}>
        <Route path = 'faq' element = {<Faq/>} />
        <Route path = 'contact' element = {<Contact/>}  action={contactAction} />
        <Route path = 'Location' element = {<Location/>} />
        <Route path = 'Otherservices' element = {<Otherservices/>} />
      </Route>
    {/*careers parent route */}
      <Route path='careers' element = {<CareersLayout/>}    errorElement = {<CareersError />}>
        <Route
          index
          element = {<Careers />}
          loader={careersLoader}
          />
      {/*career details route with parameter id */}
      <Route                    
        path = ':id'    
        element = {<Careerdetails/>}
        loader = {careerDetailsLoader}
      /> 
      </Route> 
      <Route path = '*' element = {<Notfound/>} />
    </Route>
  )
)
function App() {
  {/*functions go here! */}
  return (
    <>      
         <div>
          <RouterProvider router = {router} />  {/*passing in the browser router */}
        </div>        
    </>
  )
}
export default App
