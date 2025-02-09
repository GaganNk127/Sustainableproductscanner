import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Card from './components/Card/Card.jsx'
import Products from './components/Products/Products.jsx'
import Legal from './components/Legal/Legal.jsx'
import ProductForm from './components/ProductForm/ProductForm.jsx'
import Scanner from './components/Scanner/Scanner.jsx'

const router = createBrowserRouter([
     {
       path : "/",
       element : <Layout/>,
       children : [
         {
         path : "",
         element : <Home/>,
     },{
       path : "About",
       element : <About/>
     },{
       path : "Contact",
       element : <Contact/>
     },
     {
      path : "User/:id",
      element : <User/>
    }
    ,{
      path : "Github",
      element : <Github/>
    },
    {
      path:"Gallery",
      element : <Gallery/>
    },
    {
      path:"Products",
      element : <Products/>
    },
    {
      path:"Legal",
      element : <Legal/>
    },
    {
      path:"ProductForm",
      element : <ProductForm/>
    },
    {
      path:"Scanner",
      element :<Scanner/>
    }
   ]
     }
])
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element = {Layout}>
//       <Route  path='' element = {Home}/>
//       <Route  path='About' element = {About}/>
//       <Route  path='Contact' element = {Contact}/>
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router}/> 
  </StrictMode>,
)
