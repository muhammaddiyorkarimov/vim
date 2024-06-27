import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// layouts`
import RootLayout from './layouts/RootLayout'
// pages
import Login from './pages/login/Login'
import Register from './pages/register/Register'

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Route>
    )
  )

  return (
    <div className='App'>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App