import { Outlet, Navigate } from 'react-router-dom';
import Header from '../Components/Header';
import { useState } from 'react';

const ProtectedLogisticsLayout = () => {

const [auth, setAuth] = useState(true);

  return (
    <>
      <Header/>
      {
        //auth._id ? (
        auth ? (

        <main className='container mx-auto mt-10'>
          <Outlet />
        </main>)

         : <Navigate to='/'/>
      }
      <Footer/>
    </>
  )
}

export default ProtectedLogisticsLayout