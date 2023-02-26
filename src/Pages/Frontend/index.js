import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from 'Pages/Frontend/Home'
import About from './About/About'
import NoPage from 'Pages/NoPage'
import Navbar from 'Components/Header/Navbar'
import Footer from 'Components/Footer'
import AddEvent from 'Pages/Frontend/Events/AddEvent'
import ShowEvents from './Events/ShowEvents'
import ShowEventDetails from './Events/ShowEventDetails'

const index = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='addEvent' element={<AddEvent />} />
          <Route path='events' element={<ShowEvents />} />
          <Route path='eventDetails' element={<ShowEventDetails />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default index
