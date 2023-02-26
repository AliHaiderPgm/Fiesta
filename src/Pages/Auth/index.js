import NoPage from 'Pages/NoPage'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateAccount from './CreateAccount'
import { ForgotPassword } from './ForgotPassword'
import Login from './Login'

const index = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/createAccount' element={<CreateAccount/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
        <Route path='*' element={<NoPage/>}/>
    </Routes>
  )
}

export default index
