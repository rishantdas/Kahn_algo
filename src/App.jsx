import React from 'react'
import Header from'./components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
// import Services from './components/services/Services.jsx'
import Portfolio from './components/portfolio/Portfolio'
// import Testimonial from './components/testimonial/Testimonial.jsx'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer';
// import Headersocials from './components/header/headersocials'
// import SocialHeaders from './components/header/SocialHeaders'

const App = () => {
  return (
   <>
   
   <Header/>
   <Nav/>
   <About/>
   <Experience/>
  
   <Portfolio/>
   
  //  {/*<Testimonial/>*/}
   <Contact/>
   <Footer/>
   {/* <Headersocials/>
   <SocialHeaders/> */}
   </>
  )
}

export default App
