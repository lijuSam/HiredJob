
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from "./theme-provider"
import './App.css'
import AppLayout from './layout/app-layout'
import LandingPage from './pages/landing-page'
import OnBoarding from './pages/onbording'
import Job from './pages/job'
import JobListing from './pages/job-listing'
import PostingJob from './pages/post-job'
import SaveJobs from './pages/save-jobs'
import MyJobs from './pages/my-jobs'


const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children:[
      {
        path:"/",
        element:<LandingPage/>
      },
      {
        path:"/onBoarding",
        element:<OnBoarding/>
      },
       {
        path:"/jobs",
        element:<Job/>
      },
      {
        path:"/job/:id",
        element:<Job/>
      },{
         path:"/jobs",
        element:<JobListing/>
      },
      {
         path:"/post-job",
        element:<PostingJob/>
      },
       {
         path:"/saved-job",
        element:<SaveJobs/>
      },
      {
         path:"/my-jobs",
        element:<MyJobs/>
      }
    ]
  }
])

function App() {
   return (

      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
       <RouterProvider router={router}/>
      </ThemeProvider>
   )
  
   
}

export default App
