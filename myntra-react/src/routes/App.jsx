import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import '../App.css'
import Footer from '../comp/Footer.jsx'
import Header from '../comp/Header.jsx'
import FetchItems from '../comp/fetchItems.jsx'
import { Outlet } from 'react-router-dom'
import LoadingSpinner from '../comp/LoadingSpinner.jsx'
import { fetchStatusActions } from "../store/fetchStatusSlice";





function App() {
  const FetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
    <Header/>
    <main>
          <FetchItems/>
          {FetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
        
    </main>
   <Footer/>
    </>
  )
}

export default App
