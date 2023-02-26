import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Frontend from 'Pages/Frontend'
import Auth from 'Pages/Auth'
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<Frontend />} />
                <Route path='/auth/*' element={<Auth />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
